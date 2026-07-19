/* ============================================================
   CHARMÉ — PROTOTYPE CART + PDP LOGIC
   ------------------------------------------------------------
   PROTOTYPE ONLY. This whole file demonstrates the shopping flow
   on static files. At build time it is REPLACED by Shopify:
     - charm designs      -> product variants (or separate products)
     - add-to-bag         -> theme cart drawer + AJAX Cart API (/cart/add.js)
     - cart state         -> Shopify cart object (server-side), not localStorage
     - Notify me          -> a back-in-stock app (e.g. Klaviyo / Back in Stock)
   Nothing here handles real money. Checkout is a placeholder.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Catalog (single source of truth for the 6 designs) ---------- */
  /* img = filename slot for the REAL product photo, dropped into /images later.
     Until real photos exist we render the CSS/SVG charm stand-in tinted to the
     design's accent, so the page is never empty. Flip USE_IMAGES to true once
     the files exist. */
  var USE_IMAGES = false;
  var CATALOG = [
    { id: 'strawberry',   name: 'Strawberry',   accent: '#E4572E', price: 24.99, soldout: false, img: 'charme-charm-strawberry-1080.jpg',   note: 'Bestseller' },
    { id: 'cherry',       name: 'Cherry',       accent: '#E4572E', price: 24.99, soldout: false, img: 'charme-charm-cherry-1080.jpg' },
    { id: 'lemon',        name: 'Lemon',        accent: '#C9A227', price: 24.99, soldout: false, img: 'charme-charm-lemon-1080.jpg' },
    { id: 'green-apple',  name: 'Green Apple',  accent: '#4E7C82', price: 24.99, soldout: false, img: 'charme-charm-green-apple-1080.jpg' },
    { id: 'golden-heart', name: 'Golden Heart', accent: '#C9A227', price: 24.99, soldout: false, img: 'charme-charm-golden-heart-1080.jpg' },
    { id: 'lucky-clover', name: 'Lucky Clover', accent: '#4E7C82', price: 24.99, soldout: true,  img: 'charme-charm-lucky-clover-1080.jpg' }
  ];
  var SETS = {
    single: { label: 'Single charm',    price: 24.99, count: 1 },
    x2:     { label: 'Mix & Match — x2', price: 39,    count: 2 },
    x3:     { label: 'Gift Set — x3',    price: 54,    count: 3 }
  };
  var FREE_SHIP = 35; // dollars — matches the store's $35 free-shipping logic
  var byId = function (id) { return CATALOG.filter(function (d) { return d.id === id; })[0]; };
  var money = function (n) { return '$' + Number(n).toFixed(2); };

  /* charm stand-in SVG, tinted to an accent (used until real photos are added) */
  function charmSVG(color) {
    return '<svg viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="52" fill="' + color + '" stroke="#1C1B19" stroke-width="4"/>' +
      '<ellipse cx="60" cy="16" rx="10" ry="10" fill="none" stroke="#1C1B19" stroke-width="4"/>' +
      '<text x="60" y="82" font-family="Archivo,sans-serif" font-weight="900" font-size="58" fill="#1C1B19" text-anchor="middle">é</text></svg>';
  }
  function designVisual(d) {
    if (USE_IMAGES && d.img) { return '<img src="images/' + d.img + '" alt="Charmé ' + d.name + ' charm">'; }
    return charmSVG(d.accent);
  }

  /* ============================================================
     PROTOTYPE CART — persisted in localStorage (fine for static files).
     Real store: this becomes the Shopify cart via /cart/*.js.
     ============================================================ */
  var KEY = 'charme_cart_v1';
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch (e) { return []; } // storage blocked -> in-memory only, degrade gracefully
  }
  function saveCart(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {}
  }
  var CART = loadCart();

  function lineKey(item) { return item.set + '|' + item.designs.slice().sort().join(','); }
  function subtotal() { return CART.reduce(function (s, l) { return s + l.unit * l.qty; }, 0); }
  function charmCount() { return CART.reduce(function (s, l) { return s + l.qty * l.designs.length; }, 0); }

  function addToCart(item) {
    var k = lineKey(item), found = CART.filter(function (l) { return lineKey(l) === k; })[0];
    if (found) { found.qty += item.qty; } else { CART.push(item); }
    saveCart(CART); syncUI();
  }
  function setQty(k, qty) {
    CART = CART.filter(function (l) { return !(lineKey(l) === k && qty <= 0); });
    CART.forEach(function (l) { if (lineKey(l) === k) l.qty = qty; });
    saveCart(CART); syncUI();
  }
  function removeLine(k) { CART = CART.filter(function (l) { return lineKey(l) !== k; }); saveCart(CART); syncUI(); }

  /* ---------- Header bag count on every page ---------- */
  function updateBagCount() {
    var n = charmCount();
    document.querySelectorAll('.bag').forEach(function (el) { el.textContent = 'Bag · ' + n; });
  }

  /* ============================================================
     CART DRAWER (slide-in "Just added") — injected on every page.
     Real store: replaced by the theme's cart drawer.
     ============================================================ */
  function ensureDrawer() {
    if (document.getElementById('charmeDrawer')) return;
    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div class="drawer-overlay" id="charmeOverlay"></div>' +
      '<aside class="drawer" id="charmeDrawer" aria-label="Cart" aria-hidden="true">' +
        '<div class="drawer__head"><b id="drawerTitle">Just added</b>' +
          '<button class="drawer__close" id="drawerClose" aria-label="Close">×</button></div>' +
        '<div class="drawer__body" id="drawerBody"></div>' +
        '<div class="drawer__foot" id="drawerFoot"></div>' +
      '</aside>';
    document.body.appendChild(wrap);
    document.getElementById('charmeOverlay').addEventListener('click', closeDrawer);
    document.getElementById('drawerClose').addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });
  }
  function openDrawer(title) {
    ensureDrawer(); renderDrawer();
    if (title) document.getElementById('drawerTitle').textContent = title;
    document.getElementById('charmeDrawer').classList.add('open');
    document.getElementById('charmeOverlay').classList.add('open');
    document.getElementById('charmeDrawer').setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-lock');
  }
  function closeDrawer() {
    var d = document.getElementById('charmeDrawer'); if (!d) return;
    d.classList.remove('open'); document.getElementById('charmeOverlay').classList.remove('open');
    d.setAttribute('aria-hidden', 'true'); document.body.classList.remove('drawer-lock');
  }
  function lineHTML(l, mini) {
    var d0 = byId(l.designs[0]) || CATALOG[0];
    var names = l.designs.map(function (id) { return (byId(id) || {}).name || id; }).join(', ');
    return '<div class="mini-line">' +
      '<div class="mini-line__img">' + designVisual(d0) + '</div>' +
      '<div class="mini-line__info"><b>' + SETS[l.set].label + '</b>' +
        '<small>' + names + '</small><br><small>Qty ' + l.qty + '</small></div>' +
      '<div class="mini-line__price">' + money(l.unit * l.qty) + '</div></div>';
  }
  function renderDrawer() {
    var body = document.getElementById('drawerBody'), foot = document.getElementById('drawerFoot');
    if (!body) return;
    if (!CART.length) {
      body.innerHTML = '<div class="drawer-empty">Your bag is empty.</div>';
      foot.innerHTML = '<a href="product.html" class="cta" style="width:100%;justify-content:center">Shop the charm</a>';
      return;
    }
    var sub = subtotal(), remaining = FREE_SHIP - sub, pct = Math.min(100, sub / FREE_SHIP * 100);
    body.innerHTML =
      '<div class="drawer__ship"><p>' +
        (remaining > 0 ? "You're " + money(remaining) + ' away from free shipping 🎉' : "You've unlocked free US shipping 🎉") +
      '</p><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
      CART.map(function (l) { return lineHTML(l, true); }).join('');
    foot.innerHTML =
      '<div class="row"><span>Subtotal</span><span>' + money(sub) + '</span></div>' +
      /* PROTOTYPE: checkout is a placeholder — real store links to Shopify checkout */
      '<a href="cart.html" class="cta">Checkout</a>' +
      '<a href="cart.html" class="viewbag">View bag</a>';
  }

  /* ============================================================
     CART PAGE — renders the same state (editable qty, remove, totals)
     ============================================================ */
  function renderCartPage() {
    var root = document.getElementById('charme-cart-root'); if (!root) return;
    if (!CART.length) {
      root.innerHTML = '<p style="padding:20px 0 60px;font-size:16px;color:#3a3733">Your bag is empty. ' +
        '<a href="product.html" style="color:var(--persimmon);text-decoration:underline;font-weight:700">Shop the charm →</a></p>';
      return;
    }
    var sub = subtotal(), remaining = FREE_SHIP - sub, pct = Math.min(100, sub / FREE_SHIP * 100);
    var items = CART.map(function (l) {
      var d0 = byId(l.designs[0]) || CATALOG[0], k = lineKey(l);
      var names = l.designs.map(function (id) { return (byId(id) || {}).name || id; }).join(', ');
      return '<div class="line">' +
        '<div class="line__img">' + designVisual(d0) + '</div>' +
        '<div class="line__info"><b>' + SETS[l.set].label + '</b><small>' + names + '</small>' +
          '<div class="qty"><button data-act="dec" data-k="' + k + '" aria-label="decrease">–</button>' +
          '<span>' + l.qty + '</span>' +
          '<button data-act="inc" data-k="' + k + '" aria-label="increase">+</button></div>' +
          '<button data-act="rm" data-k="' + k + '" style="margin-top:8px;background:none;border:none;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.06em;font-weight:700;cursor:pointer;text-decoration:underline">Remove</button>' +
        '</div>' +
        '<div class="line__price">' + money(l.unit * l.qty) + '</div></div>';
    }).join('');
    root.innerHTML =
      '<div class="cartwrap"><div>' +
        '<div class="ship-progress"><p>' +
          (remaining > 0 ? "You're " + money(remaining) + ' away from free shipping 🎉' : "You've unlocked free US shipping 🎉") +
        '</p><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        items +
        '<p style="margin-top:22px"><a href="product.html" style="font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:13px;color:var(--patina)">← Keep shopping</a></p>' +
      '</div>' +
      '<div class="summary"><h3>Order summary</h3>' +
        '<div class="row"><span>Subtotal</span><span>' + money(sub) + '</span></div>' +
        '<div class="row"><span>Shipping</span><span>Calculated at checkout</span></div>' +
        '<div class="row"><span>Est. delivery</span><span>8–15 days, tracked</span></div>' +
        '<div class="row total"><span>Total</span><span>' + money(sub) + '</span></div>' +
        /* PROTOTYPE checkout placeholder */
        '<a href="#" class="cta" onclick="alert(\'Prototype — real checkout is handled by Shopify.\');return false;" style="width:100%;justify-content:center;margin-top:18px">Checkout</a>' +
        '<p class="fineprint">Taxes calculated at checkout. Secure payment via Shopify Payments.</p>' +
      '</div></div>';
    root.querySelectorAll('[data-act]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.dataset.k, line = CART.filter(function (l) { return lineKey(l) === k; })[0]; if (!line) return;
        if (b.dataset.act === 'inc') setQty(k, line.qty + 1);
        else if (b.dataset.act === 'dec') setQty(k, line.qty - 1);
        else removeLine(k);
        renderCartPage();
      });
    });
  }

  function syncUI() { updateBagCount(); renderDrawer(); renderCartPage(); }

  /* ============================================================
     PRODUCT PAGE — design picker (mix bundles) + set + qty + add
     ============================================================ */
  function initPDP() {
    var grid = document.getElementById('designGrid'); if (!grid) return; // not the PDP

    var params = new URLSearchParams(location.search);
    var preset = params.get('charm');
    var firstInStock = CATALOG.filter(function (d) { return !d.soldout; })[0];
    var startId = (preset && byId(preset) && !byId(preset).soldout) ? preset : firstInStock.id;

    var state = { set: 'single', selected: [startId], qty: 1 };

    /* build the always-visible design tiles */
    grid.innerHTML = CATALOG.map(function (d) {
      return '<div class="design" role="radio" tabindex="0" data-id="' + d.id + '"' +
        (d.soldout ? ' aria-disabled="true"' : '') + ' aria-checked="false">' +
        '<div class="design__img">' + designVisual(d) +
          '<span class="design__pick">✓</span>' +
          (d.soldout ? '<span class="design__so">Sold out</span>' : '') +
        '</div><span class="design__name">' + d.name + '</span></div>';
    }).join('');

    var mainImg   = document.getElementById('pdpMain');
    var titleEl   = document.getElementById('pdpTitle');
    var subEl     = document.getElementById('pdpSubtitle');
    var priceEl   = document.getElementById('pdpPrice');
    var ctaBtn    = document.getElementById('pdpAdd');
    var ctaPrice  = document.getElementById('pdpCtaPrice');
    var helpEl    = document.getElementById('pickerHelp');
    var notifyRow = document.getElementById('notifyRow');
    var qtyEl     = document.getElementById('pdpQty');

    function render() {
      var need = SETS[state.set].count;
      if (state.selected.length > need) state.selected = state.selected.slice(0, need);
      // tiles
      grid.querySelectorAll('.design').forEach(function (t) {
        t.setAttribute('aria-checked', state.selected.indexOf(t.dataset.id) > -1 ? 'true' : 'false');
      });
      // main visual = first selected design
      var d0 = byId(state.selected[0]) || byId(startId);
      if (mainImg) mainImg.innerHTML = designVisual(d0);
      // title / subtitle / price
      if (titleEl) titleEl.textContent = SETS[state.set].label;
      if (subEl) subEl.textContent = state.selected.map(function (id) { return (byId(id) || {}).name; }).join(' · ') || d0.name;
      if (priceEl) priceEl.textContent = money(SETS[state.set].price);
      if (ctaPrice) ctaPrice.textContent = money(SETS[state.set].price);
      // helper + add button state
      var complete = state.selected.length === need;
      if (helpEl) {
        helpEl.innerHTML = need === 1 ? 'Choose your design' :
          'Pick <b>' + need + '</b> designs — <b>' + state.selected.length + '/' + need + '</b> selected';
      }
      if (ctaBtn) ctaBtn.toggleAttribute('disabled', !complete);
      // qty
      if (qtyEl) qtyEl.textContent = state.qty;
    }

    /* design tile selection (mix-aware) */
    function toggleDesign(id) {
      var d = byId(id); if (!d) return;
      if (d.soldout) { if (notifyRow) notifyRow.classList.add('show'); return; }
      if (notifyRow) notifyRow.classList.remove('show');
      var need = SETS[state.set].count, i = state.selected.indexOf(id);
      if (need === 1) { state.selected = [id]; }
      else if (i > -1) { state.selected.splice(i, 1); }             // deselect
      else if (state.selected.length < need) { state.selected.push(id); } // add
      else { state.selected.shift(); state.selected.push(id); }     // at limit -> replace oldest
      render();
    }
    grid.querySelectorAll('.design').forEach(function (t) {
      t.addEventListener('click', function () { toggleDesign(t.dataset.id); });
      t.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDesign(t.dataset.id); }
      });
    });

    /* set selector */
    document.querySelectorAll('.tier[data-set]').forEach(function (tier) {
      tier.addEventListener('click', function () {
        document.querySelectorAll('.tier[data-set]').forEach(function (x) { x.setAttribute('aria-checked', 'false'); });
        tier.setAttribute('aria-checked', 'true');
        state.set = tier.dataset.set;
        render();
      });
      tier.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tier.click(); } });
    });

    /* qty stepper */
    var dec = document.getElementById('qtyDec'), inc = document.getElementById('qtyInc');
    if (dec) dec.addEventListener('click', function () { state.qty = Math.max(1, state.qty - 1); render(); });
    if (inc) inc.addEventListener('click', function () { state.qty = Math.min(20, state.qty + 1); render(); });

    /* add to bag */
    if (ctaBtn) ctaBtn.addEventListener('click', function () {
      if (state.selected.length !== SETS[state.set].count) return;
      addToCart({ set: state.set, designs: state.selected.slice(), qty: state.qty, unit: SETS[state.set].price });
      openDrawer('Just added');
    });

    /* notify-me (prototype email capture on the sold-out design) */
    var notifyBtn = document.getElementById('notifyBtn');
    if (notifyBtn) notifyBtn.addEventListener('click', function () {
      var inp = document.getElementById('notifyEmail');
      if (inp && inp.value) { notifyRow.innerHTML = '<p style="font-size:13px;color:var(--patina);font-weight:700">Thanks — we\'ll email you when Lucky Clover is back. (Prototype)</p>'; }
    });

    render();
  }

  /* ---------- boot ---------- */
  function init() {
    ensureDrawer();
    updateBagCount();
    renderCartPage();
    initPDP();
    // expose a couple of hooks for inline handlers / debugging
    window.CharmeCart = { open: openDrawer, close: closeDrawer, state: function () { return CART; } };
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
