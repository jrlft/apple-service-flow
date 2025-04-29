export const quizData = {
  iniciante: [
    {
      question: "Qual programa é utilizado para desenvolver apps iOS?",
      options: ["Android Studio", "Xcode", "Visual Studio", "PyCharm"],
      correct: 1,
      explanation: "O Xcode é o ambiente oficial de desenvolvimento para iOS."
    },
    {
      question: "Qual linguagem é usada atualmente para apps iOS?",
      options: ["Swift", "Kotlin", "JavaScript", "Ruby"],
      correct: 0,
      explanation: "Swift é a principal linguagem para desenvolvimento iOS."
    },
    // ...adicione mais perguntas
  ],
  intermediario: [
    {
      question: "O que é um protocolo em Swift?",
      options: [
        "Uma classe base",
        "Uma interface que define métodos e propriedades",
        "Um tipo de variável",
        "Uma função especial"
      ],
      correct: 1,
      explanation: "Protocolos em Swift são como interfaces, definem métodos e propriedades que outras classes ou structs devem implementar."
    },
    {
      question: "Como você faz uma requisição HTTP em Swift?",
      options: [
        "Usando URLSession",
        "Usando CoreData",
        "Usando UserDefaults",
        "Usando SwiftUI diretamente"
      ],
      correct: 0,
      explanation: "URLSession é a API padrão para requisições HTTP em Swift."
    },
    {
      question: "Qual componente é usado para navegação por abas?",
      options: [
        "NavigationView",
        "TabView",
        "ListView",
        "StackView"
      ],
      correct: 1,
      explanation: "TabView é usado para navegação por abas em SwiftUI."
    },
    {
      question: "Como salvar dados simples localmente no iOS?",
      options: [
        "UserDefaults",
        "CoreData",
        "CloudKit",
        "Firebase"
      ],
      correct: 0,
      explanation: "UserDefaults é usado para salvar dados simples como preferências do usuário."
    },
    {
      question: "O que é Codable em Swift?",
      options: [
        "Um protocolo para serializar e desserializar dados",
        "Um tipo de animação",
        "Um componente de UI",
        "Uma função de navegação"
      ],
      correct: 0,
      explanation: "Codable permite converter objetos Swift para e de JSON facilmente."
    },
    {
      question: "Como criar uma animação em SwiftUI?",
      options: [
        "Usando o modificador .animation()",
        "Usando UserDefaults",
        "Usando NavigationView",
        "Usando CoreData"
      ],
      correct: 0,
      explanation: "O modificador .animation() permite animar mudanças de estado em SwiftUI."
    },
    {
      question: "Para que serve o CoreData?",
      options: [
        "Persistência de dados complexos",
        "Requisições HTTP",
        "Animações",
        "Navegação"
      ],
      correct: 0,
      explanation: "CoreData é usado para persistir dados estruturados em apps iOS."
    },
    {
      question: "Como consumir uma API REST e mostrar dados em uma lista?",
      options: [
        "Buscar com URLSession, decodificar com Codable e exibir em List",
        "Usar apenas UserDefaults",
        "Usar NavigationView",
        "Salvar no CoreData e mostrar em TabView"
      ],
      correct: 0,
      explanation: "O fluxo comum é buscar com URLSession, decodificar com Codable e exibir em List."
    },
    {
      question: "Qual é uma boa prática de UX em apps iOS?",
      options: [
        "Feedback visual ao tocar botões",
        "Usar apenas texto",
        "Ignorar animações",
        "Evitar navegação"
      ],
      correct: 0,
      explanation: "Feedback visual melhora a experiência do usuário."
    },
    {
      question: "Como criar uma navegação programática em SwiftUI?",
      options: [
        "Usando NavigationLink com estado",
        "Usando apenas TabView",
        "Usando UserDefaults",
        "Usando CoreData"
      ],
      correct: 0,
      explanation: "NavigationLink pode ser controlado por estado para navegação programática."
    }
  ],
  avancado: [
    {
      question: "O que é MVVM?",
      options: [
        "Um padrão de arquitetura (Model-View-ViewModel)",
        "Uma linguagem de programação",
        "Um tipo de animação",
        "Um framework de testes"
      ],
      correct: 0,
      explanation: "MVVM separa lógica de apresentação (ViewModel) da interface (View) e dos dados (Model)."
    },
    {
      question: "Como testar uma função em Swift?",
      options: [
        "Usando XCTest",
        "Usando apenas print()",
        "Usando SwiftUI",
        "Usando UserDefaults"
      ],
      correct: 0,
      explanation: "XCTest é o framework padrão para testes unitários em Swift."
    },
    {
      question: "Para que serve o Firebase em apps iOS?",
      options: [
        "Backend como serviço (autenticação, banco de dados, notificações)",
        "Apenas para animações",
        "Somente para navegação",
        "Apenas para testes"
      ],
      correct: 0,
      explanation: "Firebase oferece autenticação, banco de dados em tempo real, notificações e mais."
    },
    {
      question: "Como implementar notificações push no iOS?",
      options: [
        "Usando APNs (Apple Push Notification Service)",
        "Usando apenas UserDefaults",
        "Usando CoreData",
        "Usando SwiftUI"
      ],
      correct: 0,
      explanation: "APNs é o serviço oficial da Apple para notificações push."
    },
    {
      question: "O que é internacionalização em apps iOS?",
      options: [
        "Permitir o app em vários idiomas",
        "Adicionar animações",
        "Aumentar performance",
        "Salvar dados locais"
      ],
      correct: 0,
      explanation: "Internacionalização permite que o app seja traduzido e adaptado para diferentes regiões."
    },
    {
      question: "Como publicar um app na App Store?",
      options: [
        "Usando o App Store Connect",
        "Apenas subindo para o Xcode",
        "Usando UserDefaults",
        "Usando CoreData"
      ],
      correct: 0,
      explanation: "App Store Connect é a plataforma oficial para publicação de apps na App Store."
    },
    {
      question: "Como melhorar a performance de um app iOS?",
      options: [
        "Otimizar código, imagens e uso de memória",
        "Adicionar mais animações",
        "Evitar testes",
        "Usar apenas CoreData"
      ],
      correct: 0,
      explanation: "Performance é melhorada otimizando código, imagens e gerenciamento de memória."
    },
    {
      question: "O que é acessibilidade em apps iOS?",
      options: [
        "Facilitar o uso do app por pessoas com deficiência",
        "Adicionar animações",
        "Aumentar performance",
        "Internacionalizar o app"
      ],
      correct: 0,
      explanation: "Acessibilidade garante que todos possam usar o app, incluindo pessoas com deficiência."
    },
    {
      question: "Como integrar testes de interface em apps iOS?",
      options: [
        "Usando XCTest UI",
        "Usando apenas UserDefaults",
        "Usando CoreData",
        "Usando SwiftUI"
      ],
      correct: 0,
      explanation: "XCTest UI permite testes automatizados de interface no iOS."
    },
    {
      question: "O que é Clean Architecture?",
      options: [
        "Separação de responsabilidades em camadas independentes",
        "Um tipo de animação",
        "Um componente de UI",
        "Um framework de testes"
      ],
      correct: 0,
      explanation: "Clean Architecture separa lógica de negócio, dados e interface para apps escaláveis e fáceis de manter."
    }
  ]
};
