
export interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  resposta_correta: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    pergunta: "Qual gesto é usado para retornar à tela inicial em iPhones com Face ID?",
    opcoes: [
      "Deslizar para cima a partir da parte inferior da tela.",
      "Pressionar o botão lateral.",
      "Tocar duas vezes na tela."
    ],
    resposta_correta: "Deslizar para cima a partir da parte inferior da tela."
  },
  {
    pergunta: "Como você acessa a Central de Controle em um iPhone com Face ID?",
    opcoes: [
      "Deslizar para baixo a partir do canto superior direito da tela.",
      "Deslizar para cima a partir da parte inferior da tela.",
      "Pressionar o botão de início."
    ],
    resposta_correta: "Deslizar para baixo a partir do canto superior direito da tela."
  },
  {
    pergunta: "Qual é a função do Modo Pouca Energia?",
    opcoes: [
      "Aumentar o brilho da tela para economizar bateria.",
      "Reduzir o consumo de energia do iPhone desativando algumas funções.",
      "Ativar o modo avião para economizar bateria."
    ],
    resposta_correta: "Reduzir o consumo de energia do iPhone desativando algumas funções."
  },
  {
    pergunta: "Como você tira uma captura de tela (screenshot) em um iPhone com Face ID?",
    opcoes: [
      "Pressionar o botão lateral e o botão de diminuir volume simultaneamente.",
      "Pressionar o botão lateral e o botão de aumentar volume simultaneamente.",
      "Pressionar o botão de início e o botão lateral simultaneamente."
    ],
    resposta_correta: "Pressionar o botão lateral e o botão de aumentar volume simultaneamente."
  },
  {
    pergunta: "O que é o Haptic Touch?",
    opcoes: [
      "Uma tecnologia que permite sentir vibrações ao tocar na tela.",
      "Uma forma de interagir com o iPhone pressionando e segurando a tela para acessar atalhos e pré-visualizações.",
      "Um recurso que desativa o som do teclado."
    ],
    resposta_correta: "Uma forma de interagir com o iPhone pressionando e segurando a tela para acessar atalhos e pré-visualizações."
  },
  {
    pergunta: "Como você pode encontrar um iPhone perdido usando outro dispositivo Apple?",
    opcoes: [
      "Usando o aplicativo Buscar.",
      "Ligando para o número do iPhone perdido.",
      "Acessando o iCloud.com e usando a função 'Buscar iPhone'."
    ],
    resposta_correta: "Acessando o iCloud.com e usando a função 'Buscar iPhone'."
  },
  {
    pergunta: "Qual é a principal função do AirDrop?",
    opcoes: [
      "Fazer backup dos seus dados na nuvem.",
      "Compartilhar arquivos rapidamente com outros dispositivos Apple próximos.",
      "Conectar seu iPhone a redes Wi-Fi automaticamente."
    ],
    resposta_correta: "Compartilhar arquivos rapidamente com outros dispositivos Apple próximos."
  },
  {
    pergunta: "Como você ativa a Siri?",
    opcoes: [
      "Dizendo 'E aí Siri' ou pressionando e segurando o botão lateral (ou botão de início em modelos mais antigos).",
      "Tocando três vezes na parte de trás do iPhone.",
      "Acessando as Configurações e ativando manualmente."
    ],
    resposta_correta: "Dizendo 'E aí Siri' ou pressionando e segurando o botão lateral (ou botão de início em modelos mais antigos)."
  },
  {
    pergunta: "O que é o 'Tempo de Uso' nas Configurações?",
    opcoes: [
      "Um recurso que mostra quanto tempo falta para a próxima carga da bateria.",
      "Um relatório que mostra quanto tempo você passa usando apps e sites, permitindo definir limites.",
      "Uma configuração para ajustar o fuso horário do iPhone."
    ],
    resposta_correta: "Um relatório que mostra quanto tempo você passa usando apps e sites, permitindo definir limites."
  },
  {
    pergunta: "Como você pode personalizar a Central de Controle?",
    opcoes: [
      "Não é possível personalizar a Central de Controle.",
      "Acessando Configurações > Central de Controle e adicionando ou removendo controles.",
      "Baixando um aplicativo de terceiros para personalizar a Central de Controle."
    ],
    resposta_correta: "Acessando Configurações > Central de Controle e adicionando ou removendo controles."
  }
];
