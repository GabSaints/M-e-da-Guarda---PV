# PageView imediato | 25/11/2026

- Proprietário solicitou PageView sem aguardar autorização. Meta inicia na abertura se não houver recusa salva. Não tratamos a ausência de escolha como consentimento: estado automatic.
- Aceite continua necessário para o tracker Cakto. Desativação anterior preservada; desativar interrompe scripts após recarga. Ativar não duplica PageView.
- Aviso e privacidade descrevem o comportamento real. Alteração técnica não equivale a uma avaliação de base legal.
- Não adicionada API de Conversões à página nem InitiateCheckout em clique. O diagnóstico de cobertura de InitiateCheckout é da integração de checkout/servidor.

---

# Ajustes de identificação e privacidade | 24/11/2026

- CPF incorreto removido das páginas públicas. Proprietário corrigiu o CNPJ para 47.185.090/0001-04, incluído nos termos e na privacidade. Dígitos verificadores conferidos; não constitui consulta cadastral. Nome Eliza Martins e endereço preservados.
- Link e FAQ separados de cancelamento/reembolso removidos; condições da compra remetidas à Cakto. Garantia de sete dias preservada.
- Aviso inicial usa compartilhamento, explicita cookies, dados de navegação, Cakto e Meta. Comportamento de consentimento preservado.

---

# Abertura de vendas autorizada | 24/11/2026

- Proprietário determinou iniciar o tráfego, retirar avisos de indisponibilidade e deixar a página em versão de vendas. Esta instrução substitui o bloqueio editorial anterior da compra.
- salesEnabled: true. Três CTAs ativos, com href estático e validação de configuração, usando https://pay.cakto.com.br/anjwoj4_1363309.
- Removidos os avisos de compras indisponíveis da faixa, primeira dobra, oferta e FAQ. Preservadas garantia de sete dias, acesso vitalício, políticas, metatag e rastreamento com consentimento.
- O checkout atual foi mantido; o proprietário informou que poderá ajustá-lo depois.
- Teste local: três links estáticos corretos, configuração válida ativa os links, checkout inválido desativa os links. Flags de testes operacionais preservados como false.
- Nenhum pagamento, recebimento de e-mail ou reembolso foi simulado como testado.
- Cópia anterior: backup-abertura-vendas-2026-11-24/.

---

# Status | Integrações de 24/11/2026

## Configurado

- Identificação da responsável e contato fornecidos pelo proprietário. Documento validado quanto aos dígitos verificadores; não é uma verificação externa de identidade.
- Checkout real inserido em config.js. Total público de R$ 19,90 conferido no navegador, sem gerar Pix, comprar ou enviar dados pessoais ao checkout.
- Garantia de sete dias e acesso vitalício incorporados à página e às políticas.
- Termos, privacidade e cancelamento/reembolso criados em páginas próprias. E-mail de atendimento nas políticas; removida a seção de suporte da página principal, conforme solicitado.
- Metatag facebook-domain-verification estática no head do HTML principal, com o código fornecido.
- CNAME pixels.maedaguarda.com.br → pixels.cakto.com.br, TTL 300, salvo na Hostinger. Consulta pública ao resolvedor 1.1.1.1 confirmou o destino.
- Script Cakto e Meta Pixel 1407725847226768 configurados com carregamento após consentimento. Sem Purchase ou InitiateCheckout manuais na página de apresentação.
- Preferência de rastreamento lembrada por até 180 dias. Recusa inicial não carrega os scripts. Revogação limpa os identificadores locais conhecidos e recarrega para interromper listeners do script externo.
- Marca de trabalho preservada. Nenhuma promessa de popularidade, amizade, fim do bullying ou resultado clínico.

## Verificado nesta execução

- As cinco páginas HTML têm referências locais e âncoras válidas, um h1 por página e nenhum ID duplicado. Conferidas 65 referências locais.
- Sintaxe de marketing.js, page.js, config.js e preview-local.cjs válida.
- Metatag presente estaticamente uma única vez no head do arquivo. Confirmação no HTML público acontece após o deploy.
- No navegador local: antes do aceite e após a recusa, nenhum script de fornecedor foi inserido. Após o aceite, Cakto e Meta carregaram. Repetir o aceite manteve somente duas instâncias de script, uma de cada fornecedor. Revogar e recarregar retirou ambos.
- Políticas abertas no navegador. Termos, privacidade e reembolso conferidos em viewport de 390 px, sem transbordamento horizontal nas medições realizadas.
- Teste isolado do script público da Cakto validou encaminhamento das UTMs e fbclid, preservação de parâmetros já definidos no checkout e proteção contra inicialização repetida. O teste isolado não enviou requisições à Cakto.
- Os dois botões de compra continuam disabled. A validação comercial não foi liberada artificialmente.

## Limites e próximos testes

- Nenhum pagamento, recebimento de e-mail de acesso, redirecionamento pós-compra ou reembolso real foi executado.
- Eventos recebidos no Gerenciador de Eventos Meta e nos relatórios da Cakto precisam ser confirmados nesses painéis. Carregamento do script não comprova recebimento de conversão.
- Não foi configurado Token de API de Conversões, pois não foi fornecido. O pixel cadastrado no painel Cakto foi informado pelo proprietário; suas opções internas não foram alteradas.
- A plataforma pública ainda exibe rótulo de demonstração. O SAC público ainda informa que não envia mensagens; o proprietário está finalizando esse serviço. As políticas têm um e-mail de atendimento como alternativa.
- O checkout exibe três depoimentos. Não foram criados ou alterados por esta execução; autenticidade e autorizações não foram aferidas.
- Publicação solicitada pelo proprietário. Base da main antes do envio: ee3c0de69e1d2773c49ce8f019be978a6faec6d5. O resultado do deploy será registrado no relatório local.
