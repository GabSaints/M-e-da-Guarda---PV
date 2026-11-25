(() => {
  'use strict';
  const KEY = 'mdg_marketing_consent_v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const banner = document.getElementById('privacy-banner');
  const accept = document.getElementById('privacy-accept');
  const reject = document.getElementById('privacy-reject');
  let metaStarted = false;
  let caktoStarted = false;
  let trigger = null;
  const read = () => {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || 'null');
      return value && ['accepted', 'rejected'].includes(value.choice) && Date.now() - value.at >= 0 && Date.now() - value.at < MAX_AGE ? value.choice : null;
    } catch { return null; }
  };
  const store = choice => {
    try { localStorage.setItem(KEY, JSON.stringify({choice, at: Date.now()})); } catch { /* A escolha vale para esta página quando o armazenamento estiver bloqueado. */ }
  };
  const clearIdentifiers = () => {
    try { ['cakto_trk', 'cakto_vid'].forEach(key => localStorage.removeItem(key)); } catch { /* Armazenamento bloqueado. */ }
    for (const name of ['_fbp', '_fbc']) {
      for (const suffix of ['', '; domain=' + location.hostname, '; domain=.maedaguarda.com.br']) {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + suffix;
      }
    }
  };
  const loadCakto = () => {
    if (caktoStarted) return;
    // Cria uma instância executável do script exato fornecido pela Cakto.
    const source = document.getElementById('cakto-tracker-template')?.content.querySelector('script');
    if (source) {
      caktoStarted = true;
      const script = document.createElement('script');
      script.src = source.getAttribute('src');
      script.async = true;
      script.setAttribute('data-offer', source.getAttribute('data-offer'));
      script.dataset.vendor = 'cakto';
      script.onload = () => { document.documentElement.dataset.caktoTracking = 'loaded'; };
      script.onerror = () => { document.documentElement.dataset.caktoTracking = 'error'; };
      document.head.appendChild(script);
    }
  };
  const loadMeta = () => {
    if (metaStarted) return;
    const id = window.MAE_DA_GUARDA_CONFIG?.metaPixelId;
    if (!/^\d+$/.test(id || '')) return;
    metaStarted = true;
    // Código-base Meta. Sem correspondência avançada e sem evento Purchase nesta página.
    if (!window.fbq) {
      const queue = function () { queue.callMethod ? queue.callMethod.apply(queue, arguments) : queue.queue.push(arguments); };
      queue.push = queue; queue.loaded = true; queue.version = '2.0'; queue.queue = [];
      window.fbq = queue;
      if (!window._fbq) window._fbq = queue;
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.dataset.vendor = 'meta';
      script.onload = () => { document.documentElement.dataset.metaTracking = 'loaded'; };
      script.onerror = () => { document.documentElement.dataset.metaTracking = 'error'; };
      document.head.appendChild(script);
    }
    window.fbq('consent', 'grant');
    window.fbq('init', id);
    window.fbq('track', 'PageView');
  };
  const choice = read();
  // PageView na abertura por instrução do proprietário em 25/11/2026.
  // Uma recusa já registrada continua sendo respeitada.
  document.documentElement.dataset.marketingConsent = choice || 'automatic';
  if (choice === 'rejected') clearIdentifiers();
  else loadMeta();
  if (choice === 'accepted') loadCakto();
  // O disparo inicial não depende da presença ou do clique no aviso.
  if (!banner || !accept || !reject) return;
  const close = () => { banner.hidden = true; if (trigger) trigger.focus(); };
  accept.addEventListener('click', () => {
    store('accepted');
    document.documentElement.dataset.marketingConsent = 'accepted';
    loadMeta();
    loadCakto();
    close();
  });
  reject.addEventListener('click', () => {
    store('rejected');
    clearIdentifiers();
    document.documentElement.dataset.marketingConsent = 'rejected';
    close();
    if (metaStarted || caktoStarted) {
      if (window.fbq) window.fbq('consent', 'revoke');
      // A Cakto não expõe API de desligamento: recarregar remove seus listeners.
      location.reload();
    }
  });
  document.querySelectorAll('[data-privacy-preferences]').forEach(button => button.addEventListener('click', () => {
    trigger = button;
    banner.hidden = false;
    reject.focus();
  }));
  if (!choice) banner.hidden = false;
  if (location.hash === '#preferencias-de-cookies') { banner.hidden = false; reject.focus(); }
})();
