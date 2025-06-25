
export interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  resposta_correta: string;
  question?: string;
  options?: string[];
  correct_answer?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    pergunta: "Qual gesto é usado para retornar à tela inicial em iPhones com Face ID?",
    opcoes: [
      "Deslizar para cima a partir da parte inferior da tela.",
      "Pressionar o botão lateral.",
      "Tocar duas vezes na tela."
    ],
    resposta_correta: "Deslizar para cima a partir da parte inferior da tela.",
    question: "What gesture is used to return to the home screen on iPhones with Face ID?",
    options: [
      "Swipe up from the bottom of the screen.",
      "Press the side button.",
      "Double tap the screen."
    ],
    correct_answer: "Swipe up from the bottom of the screen."
  },
  {
    pergunta: "Como você acessa a Central de Controle em um iPhone com Face ID?",
    opcoes: [
      "Deslizar para baixo a partir do canto superior direito da tela.",
      "Deslizar para cima a partir da parte inferior da tela.",
      "Pressionar o botão de início."
    ],
    resposta_correta: "Deslizar para baixo a partir do canto superior direito da tela.",
    question: "How do you access Control Center on an iPhone with Face ID?",
    options: [
      "Swipe down from the top right corner of the screen.",
      "Swipe up from the bottom of the screen.",
      "Press the home button."
    ],
    correct_answer: "Swipe down from the top right corner of the screen."
  },
  {
    pergunta: "Qual é a função do Modo Pouca Energia?",
    opcoes: [
      "Aumentar o brilho da tela para economizar bateria.",
      "Reduzir o consumo de energia do iPhone desativando algumas funções.",
      "Ativar o modo avião para economizar bateria."
    ],
    resposta_correta: "Reduzir o consumo de energia do iPhone desativando algumas funções.",
    question: "What is the function of Low Power Mode?",
    options: [
      "Increase screen brightness to save battery.",
      "Reduce iPhone energy consumption by disabling some functions.",
      "Activate airplane mode to save battery."
    ],
    correct_answer: "Reduce iPhone energy consumption by disabling some functions."
  },
  {
    pergunta: "Como você tira uma captura de tela (screenshot) em um iPhone com Face ID?",
    opcoes: [
      "Pressionar o botão lateral e o botão de diminuir volume simultaneamente.",
      "Pressionar o botão lateral e o botão de aumentar volume simultaneamente.",
      "Pressionar o botão de início e o botão lateral simultaneamente."
    ],
    resposta_correta: "Pressionar o botão lateral e o botão de aumentar volume simultaneamente.",
    question: "How do you take a screenshot on an iPhone with Face ID?",
    options: [
      "Press the side button and volume down button simultaneously.",
      "Press the side button and volume up button simultaneously.",
      "Press the home button and side button simultaneously."
    ],
    correct_answer: "Press the side button and volume up button simultaneously."
  },
  {
    pergunta: "O que é o Haptic Touch?",
    opcoes: [
      "Uma tecnologia que permite sentir vibrações ao tocar na tela.",
      "Uma forma de interagir com o iPhone pressionando e segurando a tela para acessar atalhos e pré-visualizações.",
      "Um recurso que desativa o som do teclado."
    ],
    resposta_correta: "Uma forma de interagir com o iPhone pressionando e segurando a tela para acessar atalhos e pré-visualizações.",
    question: "What is Haptic Touch?",
    options: [
      "A technology that allows you to feel vibrations when touching the screen.",
      "A way to interact with the iPhone by pressing and holding the screen to access shortcuts and previews.",
      "A feature that disables keyboard sound."
    ],
    correct_answer: "A way to interact with the iPhone by pressing and holding the screen to access shortcuts and previews."
  },
  {
    pergunta: "Como você pode encontrar um iPhone perdido usando outro dispositivo Apple?",
    opcoes: [
      "Usando o aplicativo Buscar.",
      "Ligando para o número do iPhone perdido.",
      "Acessando o iCloud.com e usando a função 'Buscar iPhone'."
    ],
    resposta_correta: "Acessando o iCloud.com e usando a função 'Buscar iPhone'.",
    question: "How can you find a lost iPhone using another Apple device?",
    options: [
      "Using the Find My app.",
      "Calling the lost iPhone number.",
      "Accessing iCloud.com and using the 'Find iPhone' function."
    ],
    correct_answer: "Accessing iCloud.com and using the 'Find iPhone' function."
  },
  {
    pergunta: "Qual é a principal função do AirDrop?",
    opcoes: [
      "Fazer backup dos seus dados na nuvem.",
      "Compartilhar arquivos rapidamente com outros dispositivos Apple próximos.",
      "Conectar seu iPhone a redes Wi-Fi automaticamente."
    ],
    resposta_correta: "Compartilhar arquivos rapidamente com outros dispositivos Apple próximos.",
    question: "What is the main function of AirDrop?",
    options: [
      "Back up your data to the cloud.",
      "Quickly share files with nearby Apple devices.",
      "Connect your iPhone to Wi-Fi networks automatically."
    ],
    correct_answer: "Quickly share files with nearby Apple devices."
  },
  {
    pergunta: "Como você ativa a Siri?",
    opcoes: [
      "Dizendo 'E aí Siri' ou pressionando e segurando o botão lateral (ou botão de início em modelos mais antigos).",
      "Tocando três vezes na parte de trás do iPhone.",
      "Acessando as Configurações e ativando manualmente."
    ],
    resposta_correta: "Dizendo 'E aí Siri' ou pressionando e segurando o botão lateral (ou botão de início em modelos mais antigos).",
    question: "How do you activate Siri?",
    options: [
      "Saying 'Hey Siri' or pressing and holding the side button (or home button on older models).",
      "Tapping three times on the back of the iPhone.",
      "Going to Settings and manually activating."
    ],
    correct_answer: "Saying 'Hey Siri' or pressing and holding the side button (or home button on older models)."
  },
  {
    pergunta: "O que é o 'Tempo de Uso' nas Configurações?",
    opcoes: [
      "Um recurso que mostra quanto tempo falta para a próxima carga da bateria.",
      "Um relatório que mostra quanto tempo você passa usando apps e sites, permitindo definir limites.",
      "Uma configuração para ajustar o fuso horário do iPhone."
    ],
    resposta_correta: "Um relatório que mostra quanto tempo você passa usando apps e sites, permitindo definir limites.",
    question: "What is 'Screen Time' in Settings?",
    options: [
      "A feature that shows how much time is left until the next battery charge.",
      "A report that shows how much time you spend using apps and websites, allowing you to set limits.",
      "A setting to adjust the iPhone's time zone."
    ],
    correct_answer: "A report that shows how much time you spend using apps and websites, allowing you to set limits."
  },
  {
    pergunta: "Como você pode personalizar a Central de Controle?",
    opcoes: [
      "Não é possível personalizar a Central de Controle.",
      "Acessando Configurações > Central de Controle e adicionando ou removendo controles.",
      "Baixando um aplicativo de terceiros para personalizar a Central de Controle."
    ],
    resposta_correta: "Acessando Configurações > Central de Controle e adicionando ou removendo controles.",
    question: "How can you customize Control Center?",
    options: [
      "It's not possible to customize Control Center.",
      "By going to Settings > Control Center and adding or removing controls.",
      "By downloading a third-party app to customize Control Center."
    ],
    correct_answer: "By going to Settings > Control Center and adding or removing controls."
  }
];
