(() => {
  'use strict';
  const cases = {
    normal: {title: 'Quando tudo vira “normal”', context: 'Uma resposta curta não confirma que existe um problema. Observe o momento e ofereça uma abertura sem pedir um relatório completo do dia.', prompts: {pequenos: '“Teve uma coisa divertida ou chata hoje? Se quiser, pode me contar ou desenhar.”', escolares: '“Você disse que foi normal. Tem uma parte do dia que gostaria de me contar, agora ou mais tarde?”', maiores: '“Não precisa contar tudo. Quer que eu só te escute um pouco, agora ou em outro momento?”'}, avoid: 'Evite insistir com várias perguntas seguidas ou dizer que ele está escondendo alguma coisa.', follow: 'Se ele preferir não falar, mantenha um momento de convivência e retome o convite depois. Escute o que vier sem exigir uma conclusão.', help: 'Se o silêncio vier acompanhado de mudanças persistentes na rotina ou sofrimento, converse com a escola e considere orientação profissional.'},
    ignorado: {title: 'Quando ele diz que ninguém liga', context: 'Acolha o relato antes de sugerir uma solução. Ser ignorado em uma cena não permite concluir sozinho o que acontece no grupo.', prompts: {pequenos: '“Você queria brincar e ficou de fora? Me conta o que aconteceu.”', escolares: '“Quero entender. O que aconteceu quando você tentou falar com eles?”', maiores: '“Obrigado por dividir isso comigo. Quer me contar uma situação ou pensar no apoio que você gostaria de ter?”'}, avoid: 'Evite “é só fazer outros amigos”, culpar a criança ou prometer que os colegas vão mudar.', follow: 'Pergunte se aconteceu outras vezes e que apoio ele gostaria. Se houver repetição, registre o relato com cuidado e procure a escola para combinar acompanhamento.', help: 'Humilhação, ameaça ou exclusão repetida precisam de atenção da escola. Se houver sofrimento importante, busque também um profissional.'},
    medo: {title: 'Quando ele não quer ir à escola', context: 'Tente entender a dificuldade sem chamá-la de manha e sem concluir de imediato que há bullying ou um transtorno.', prompts: {pequenos: '“Tem alguma parte da escola que está difícil para você? Pode me mostrar ou contar.”', escolares: '“Quando você pensa em ir amanhã, qual parte parece mais difícil?”', maiores: '“Quero levar esse medo a sério. Tem algo ou alguém na escola que faz você se sentir inseguro?”'}, avoid: 'Evite ameaças, comparações e perguntas que já sugerem a resposta que você espera ouvir.', follow: 'Converse com a escola sobre situações concretas e combine um adulto de referência. Não decida apenas com base em uma resposta isolada.', help: 'Se o medo persistir, prejudicar a rotina ou vier com sofrimento intenso, procure avaliação profissional. Relato de violência exige proteção imediata.'},
    vergonha: {title: 'Quando riram dele', context: 'Antes de tentar fazer a criança esquecer o episódio, dê espaço para ela dizer como viveu a situação.', prompts: {pequenos: '“Você ficou triste ou com vergonha quando riram? Eu estou aqui para te ouvir.”', escolares: '“Imagino que tenha sido difícil. O que você gostaria que eu entendesse sobre esse momento?”', maiores: '“Não vou tratar isso como bobagem. Você prefere que eu te escute ou quer pensar comigo no que fazer?”'}, avoid: 'Evite “aprenda a rir de si mesmo”, repetir a brincadeira ou expor a história para outras pessoas sem necessidade.', follow: 'Pergunte o que aconteceu depois e se ele se sente seguro. Combine o que pode ser compartilhado com a escola para buscar apoio.', help: 'Se a exposição se repetir ou o sofrimento afetar a rotina, envolva a escola e considere apoio profissional.'},
    sozinho: {title: 'Quando ele sente que ninguém se importa', context: 'A frase merece atenção. Pergunte o que ele quis dizer, sem discordar imediatamente nem tomar o relato como prova de uma causa específica.', prompts: {pequenos: '“Eu me importo com você. Teve alguma hora em que você ficou se sentindo sozinho?”', escolares: '“Você é importante para mim. Quando essa sensação ficou mais forte?”', maiores: '“Quero entender essa sensação e estar com você. O que tem feito você se sentir sem apoio?”'}, avoid: 'Evite “você tem tudo, não pode reclamar” ou pedir que ele prove que tem motivos para se sentir assim.', follow: 'Combine um momento de presença e um adulto de confiança a quem ele possa recorrer. Se você respondeu com pressa, reconheça e retome a conversa.', help: 'Suspeita de abandono real, falta de proteção ou sofrimento persistente exige apoio da rede de proteção ou de profissionais. Se falar em se machucar ou não querer viver, não deixe a criança sozinha e procure atendimento urgente.'},
    protecao: {title: 'Quando é preciso proteger primeiro', context: 'Uma ameaça, agressão ou suspeita de abuso exige ação de proteção. Uma orientação na tela não substitui a ajuda necessária.', prompts: {pequenos: '“Obrigado por me contar. Você não tem culpa de alguém machucar você. Vou buscar ajuda para te proteger.”', escolares: '“Você fez bem em me contar. Vamos procurar ajuda e cuidar da sua segurança.”', maiores: '“Eu levo isso a sério. Vou te explicar os próximos passos e buscar ajuda para te proteger.”'}, avoid: 'Não prometa segredo absoluto, não culpe a criança e não faça um interrogatório ou um confronto por conta própria.', follow: 'Escute sem pressionar por detalhes. Procure os serviços de saúde ou proteção adequados; envolva a escola quando isso contribuir para a segurança.', help: 'Em perigo imediato, procure atendimento de emergência. Não espere outra conversa nem o uso do guia para agir.'}
  };
  const age = document.getElementById('age');
  const result = document.getElementById('result');
  let shown = false;
  const add = (tag, text, className) => {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    result.appendChild(element);
  };
  const render = () => {
    const selected = document.querySelector('input[name="caso"]:checked');
    const entry = selected && cases[selected.value];
    if (!entry) return;
    shown = true;
    result.replaceChildren();
    add('span', 'EXEMPLO ADAPTADO À FAIXA ETÁRIA', 'eyebrow');
    add('h2', entry.title);
    add('p', entry.context);
    add('h3', 'Uma forma de começar');
    add('blockquote', entry.prompts[age.value]);
    add('h3', 'O que evitar nesta hora');
    add('p', entry.avoid);
    add('h3', 'Como acompanhar depois');
    add('p', entry.follow);
    add('h3', 'Quando buscar mais apoio');
    add('p', entry.help, 'care-note');
  };
  document.getElementById('show').addEventListener('click', render);
  age.addEventListener('change', () => { if (shown) render(); });
  document.querySelectorAll('input[name="caso"]').forEach(input => input.addEventListener('change', () => { if (shown) render(); }));
  const requested = new URLSearchParams(location.search).get('caso');
  if (Object.hasOwn(cases, requested)) {
    const input = document.querySelector('input[value="' + requested + '"]');
    input.checked = true;
    render();
  }
})();
