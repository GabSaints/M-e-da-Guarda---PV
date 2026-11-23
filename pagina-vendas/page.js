(() => {
  const c = window.MAE_DA_GUARDA_CONFIG || {};
  const https = value => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !['localhost', 'example.com'].includes(url.hostname);
    } catch { return false; }
  };
  // Keep sales closed until both the actual delivery and the operation are tested.
  const ready = Boolean(
    c.salesEnabled && c.productReady && c.deliveryFlowTested && c.supportReady &&
    c.editorialApproved && c.legalApproved && c.purchaseFlowTested && c.refundFlowTested &&
    https(c.checkoutUrl) && https(c.termsUrl) && https(c.privacyUrl) && https(c.refundPolicyUrl) &&
    typeof c.sellerName === 'string' && c.sellerName.trim().length > 2 &&
    typeof c.accessDescription === 'string' && c.accessDescription.trim().length > 3 &&
    typeof c.supportEmail === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.supportEmail)
  );
  if (!ready) return;
  // Launch copy must also be reviewed against the delivered product before enabling this config.
  document.getElementById('setup-banner').hidden = true;
  document.querySelectorAll('[data-buy]').forEach(button => {
    const link = document.createElement('a');
    link.className = button.className;
    link.href = c.checkoutUrl;
    link.textContent = 'Comprar por R$ 19,90';
    link.rel = 'noopener noreferrer';
    button.replaceWith(link);
  });
  document.getElementById('access-description').textContent = c.accessDescription;
  document.getElementById('seller-line').textContent = `${c.sellerName} · Suporte: ${c.supportEmail}`;
  [['terms-link', c.termsUrl], ['privacy-link', c.privacyUrl], ['refund-link', c.refundPolicyUrl]].forEach(([id, url]) => {
    const link = document.getElementById(id);
    link.href = url;
    link.hidden = false;
    link.rel = 'noopener noreferrer';
  });
})();
