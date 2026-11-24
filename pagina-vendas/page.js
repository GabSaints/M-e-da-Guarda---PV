(() => {
  const c = window.MAE_DA_GUARDA_CONFIG || {};
  const https = value => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !['localhost', 'example.com'].includes(url.hostname);
    } catch { return false; }
  };
  // O proprietário autorizou a abertura em 24/11/2026. Os flags de teste
  // permanecem como registro de evidência, sem simular testes não executados.
  const ready = Boolean(
    c.salesEnabled && c.productReady &&
    https(c.checkoutUrl) && https(c.termsUrl) && https(c.privacyUrl) && https(c.refundPolicyUrl) &&
    typeof c.sellerName === 'string' && c.sellerName.trim().length > 2 &&
    typeof c.accessDescription === 'string' && c.accessDescription.trim().length > 3 &&
    typeof c.supportEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.supportEmail)
  );
  document.querySelectorAll('[data-buy]').forEach(link => {
    if (!ready) {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
      return;
    }
    link.href = c.checkoutUrl;
    link.removeAttribute('aria-disabled');
    link.rel = 'noopener noreferrer';
  });
  // As condições reais também ficam disponíveis sem JavaScript no HTML.
  if (!ready) return;
  document.getElementById('seller-line').textContent = `Mãe da Guarda · ${c.sellerName}`;
  [['terms-link', c.termsUrl], ['privacy-link', c.privacyUrl]].forEach(([id, url]) => {
    const link = document.getElementById(id);
    link.href = url;
    link.hidden = false;
    link.rel = 'noopener noreferrer';
  });
})();
