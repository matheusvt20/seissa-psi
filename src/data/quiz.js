export const CHECKOUT_URL = 'https://pay.kiwify.com.br/'

export const quizQuestions = [
  {
    id: 'childAge',
    eyebrow: 'Pergunta 1',
    question: 'Qual é a idade do seu filho?',
    options: [
      { id: 'age-1', label: 'Até 3 anos' },
      { id: 'age-2', label: 'De 4 a 7 anos' },
      { id: 'age-3', label: 'De 8 a 12 anos' },
      { id: 'age-4', label: '13 anos ou mais' },
    ],
  },
  {
    id: 'behavior',
    eyebrow: 'Pergunta 2',
    question: 'Qual comportamento aparece com mais frequência?',
    options: [
      { id: 'behavior-1', label: 'Explode, desafia ou responde com raiva' },
      { id: 'behavior-2', label: 'Fica quieto, triste ou se fecha' },
      { id: 'behavior-3', label: 'Busca aprovação e pergunta sobre o pai' },
      { id: 'behavior-4', label: 'Chama atenção, testa limites ou provoca' },
    ],
  },
  {
    id: 'absenceMoment',
    eyebrow: 'Pergunta 3',
    question: 'Quando a ausência do pai aparece mais?',
    options: [
      { id: 'moment-1', label: 'Em datas comemorativas e eventos da escola' },
      { id: 'moment-2', label: 'Na hora de dormir ou em momentos de silêncio' },
      { id: 'moment-3', label: 'Quando vê outras famílias ou pais presentes' },
      { id: 'moment-4', label: 'Quando recebe limites ou ouve um não' },
    ],
  },
  {
    id: 'motherFear',
    eyebrow: 'Pergunta 4',
    question: 'Qual é o seu maior medo hoje?',
    options: [
      { id: 'fear-1', label: 'Que ele carregue essa dor para a vida adulta' },
      { id: 'fear-2', label: 'Que eu erre tentando compensar a ausência' },
      { id: 'fear-3', label: 'Que ele se sinta rejeitado ou insuficiente' },
      { id: 'fear-4', label: 'Que eu perca a conexão emocional com ele' },
    ],
  },
]

export const resultProfiles = {
  'behavior-1': {
    title: 'O Filho que Explode',
    headline: 'Seu filho está transformando a dor em raiva',
    headlineStart: 'Seu filho está transformando',
    headlineAccent: 'a dor em raiva',
    description:
      'Quando a ausência do pai dói, algumas crianças não conseguem mostrar tristeza de forma direta. A emoção aparece como irritação, desafio, respostas duras e explosões repentinas. Por trás da raiva, pode existir uma mistura de frustração, sensação de rejeição e medo de não ser importante o bastante.',
  },
  'behavior-2': {
    title: 'O Filho que Fecha',
    headline: 'Seu filho está guardando a dor em silêncio',
    headlineStart: 'Seu filho está guardando',
    headlineAccent: 'a dor em silêncio',
    description:
      'O silêncio pode parecer tranquilidade, mas muitas vezes é uma forma de proteção. A criança se fecha porque ainda não sabe explicar o tamanho do que sente, ou porque acredita que falar sobre isso pode machucar ainda mais a mãe. A dor fica contida, mas continua se manifestando no olhar, no afastamento e na dificuldade de se abrir.',
  },
  'behavior-3': {
    title: 'O Filho que Busca',
    headline: 'Seu filho está procurando respostas para se sentir pertencente',
    headlineStart: 'Seu filho está procurando respostas',
    headlineAccent: 'para se sentir pertencente',
    description:
      'Quando a criança pergunta, compara ou busca aprovação, ela pode estar tentando montar uma história que faça sentido dentro dela. A ausência paterna toca diretamente a identidade: quem eu sou, por que isso aconteceu comigo e se existe algo errado em mim. Essa busca não é curiosidade simples; é uma tentativa de encontrar segurança emocional.',
  },
  'behavior-4': {
    title: 'O Filho que Grita por Atenção',
    headline: 'Seu filho está pedindo presença através do comportamento',
    headlineStart: 'Seu filho está pedindo presença',
    headlineAccent: 'através do comportamento',
    description:
      'Alguns comportamentos que parecem provocação são pedidos de vínculo em forma desorganizada. Ao testar limites, insistir, interromper ou chamar atenção pelo conflito, a criança pode estar tentando confirmar se ainda é vista, escolhida e sustentada emocionalmente. O comportamento fala quando ela ainda não consegue pedir cuidado de outro jeito.',
  },
}
