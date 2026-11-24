# Mãe da Guarda | Página, políticas e rastreamento

Atualização de 24/11/2026. Projeto estático em HTML, CSS e JavaScript, publicado pela integração GitHub/Vercel.

## Arquivos

- index.html, styles.css e amostra.html: apresentação e amostra demonstrativa.
- termos.html, privacidade.html e reembolso.html: políticas e identificação fornecida pelo proprietário.
- config.js: checkout Cakto, contato da responsável, garantia de sete dias, acesso vitalício e Pixel ID. Compra ainda desativada.
- page.js: validação das condições de abertura das vendas.
- marketing.js: consentimento, script Cakto e Meta Pixel. Os scripts publicitários só carregam depois do aceite; a recusa pode ser alterada pelo rodapé.
- COPY-FINAL.txt: texto atual da página e da amostra.
- STATUS.md e PENDENCIAS-PARA-PUBLICAR.md: estado real e verificações restantes.
- preview-local.cjs: servidor de prévia restrito ao computador local.

## Prévia local

Execute `node preview-local.cjs` e abra http://127.0.0.1:4184/ . Encerre com Ctrl+C.

## Integrações

- Checkout: https://pay.cakto.com.br/anjwoj4_1363309 . O resumo aberto no navegador confirmou total de R$ 19,90. Nenhuma transação foi executada.
- Metatag de verificação Meta inserida estaticamente no head do index.html. A confirmação no painel Meta será feita pelo proprietário.
- CNAME pixels.maedaguarda.com.br → pixels.cakto.com.br, TTL 300, configurado na Hostinger e confirmado em consulta pública ao DNS.
- Script oficial da Cakto incluído em template inerte e carregado após consentimento. Oferta identificada por data-offer=anjwoj4_1363309.
- Meta Pixel 1407725847226768: código-base PageView após consentimento. Purchase e InitiateCheckout ficam na integração do checkout Cakto, sem disparos de compra pela página de apresentação.

## Estado comercial

O proprietário confirmou produto pronto, entrega por e-mail e redirecionamento após confirmação do pagamento, acesso vitalício e garantia de sete dias. Forneceu os dados da responsável e o e-mail de atendimento. As políticas incorporam essas condições.

Na conferência pública, app.maedaguarda.com.br ainda exibe rótulo de demonstração e sac.maedaguarda.com.br informa que não envia mensagens. O proprietário informou que está finalizando o SAC. O e-mail de atendimento foi incluído nas políticas, sem criar uma seção adicional de suporte na página principal.

Os botões de compra permanecem desativados até a validação do fluxo real de pagamento e entrega. Não marcar purchaseFlowTested, deliveryFlowTested ou refundFlowTested como verdadeiros com base apenas em carregamento de páginas. A aparência antiga de produto em planejamento foi retirada; permanece somente a indisponibilidade temporária da compra.

Backups, fontes auditadas, evidências e relatório ficam em backup-integracoes-2026-11-24/ e auditoria-integracoes-2026-11-24/, somente na pasta local.
