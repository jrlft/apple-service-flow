
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.iphone': 'iPhone',
    'nav.ipad': 'iPad',
    'nav.mac': 'Mac',
    'nav.watch': 'Watch',
    'nav.airpods': 'AirPods',
    'nav.otherServices': 'Outros Serviços',
    'nav.prices': 'Preços',
    'nav.faq': 'Dúvidas',
    'nav.appointment': 'Agendamento',
    'nav.contact': 'Contato',
    'nav.blog': 'Blog',
    'nav.toggleMenu': 'Alternar Menu',
    
    // Language selector
    'language.portuguese': 'Português',
    'language.english': 'Inglês',
    
    // Theme
    'theme.light': 'Modo Claro',
    'theme.dark': 'Modo Escuro',
    'theme.toggle': 'Alternar Tema',
    
    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.tryAgain': 'Tentar Novamente',
    
    // Hero Section
    'hero.welcome': 'Bem-vindo à Link TI',
    'hero.subtitle': 'Centro de Serviço Autorizado da Apple',
    'hero.description1': 'Aqui, trazemos a excelência Apple para Mato Grosso! Como centro de serviços autorizado, usamos apenas peças originais e contamos com técnicos certificados para cuidar do seu iPhone, iPad, Mac, Apple Watch e mais.',
    'hero.description2': 'Nosso compromisso? Reparos rápidos, atendimento acolhedor e dispositivos como novos.',
    'hero.servicesButton': 'Nossos Serviços',
    'hero.whatsappButton': 'Atendimento via WhatsApp',
    'hero.whatsappMessage': 'Olá, gostaria de informações sobre assistência técnica para dispositivos Apple.',
    
    // Services Section
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Confira nossa gama de serviços para seus dispositivos Apple',
    'services.iphone.description': 'Reparos de telas, baterias, câmeras e outros componentes para todos os modelos de iPhone.',
    'services.ipad.description': 'Consertos para todos os modelos de iPad, incluindo telas, baterias e problemas de software.',
    'services.mac.description': 'Serviços para MacBook, iMac e Mac mini, desde upgrades até reparos de placa lógica.',
    'services.watch.description': 'Reparo especializado para Apple Watch, incluindo telas, baterias e problemas de conectividade.',
    'services.airpods.description': 'Reparo especializado para AirPods, incluindo bateria, conectividade e limpeza profunda.',
    'services.learnMore': 'Saiba Mais',
    
    // About Section
    'about.title': 'Sobre Nossa Empresa',
    'about.subtitle': 'Excelência em serviços Apple há mais de 15 anos',
    'about.description1': 'Fundada em 2003, a Link TI é um centro de serviço autorizado Apple dedicado a fornecer reparos e manutenção de alta qualidade para todos os seus dispositivos Apple, desde 2010. Nossa equipe de técnicos certificados pela Apple tem anos de experiência e está comprometida em oferecer um serviço excepcional.',
    'about.highlight1': 'Primeiro Centro de Serviço Autorizado em MT, desde 2010.',
    'about.highlight2': 'Técnicos certificados pela Apple',
    'about.highlight3': 'Peças originais e garantia oficial',
    'about.highlight4': 'Laboratório com ferramentas homologadas pela Apple',
    'about.highlight5': 'Atendimento em garantia, Applecare e fora de garantia.',
    'about.highlight6': 'Diagnóstico preciso e transparente',
    'about.description2': 'Buscamos garantir que seus dispositivos Apple funcionem perfeitamente, proporcionando reparos rápidos e confiáveis com peças originais, sempre mantendo integridade e transparência em nossos diagnósticos e orçamentos.',
    'about.description3': 'Com mais de 65 mil reparos realizados com sucesso, somos a escolha confiável para cuidar dos seus dispositivos Apple.',
    'about.whatsappButton': 'Atendimento via WhatsApp',
    
    // CTA Section
    'cta.title': 'Precisando de reparo para seu dispositivo Apple?',
    'cta.description': 'Entre em contato conosco hoje mesmo. Nossos especialistas estão prontos para ajudar com qualquer problema no seu dispositivo.',
    'cta.contactButton': 'Entre em Contato',
    'cta.whatsappButton': 'Orçamento via WhatsApp',
    'cta.whatsappMessage': 'Olá, gostaria de solicitar um orçamento para reparo do meu dispositivo Apple.',
    
    // Blog Section
    'blog.title': 'Blog e Dicas',
    'blog.subtitle': 'Conteúdo exclusivo para você cuidar melhor dos seus dispositivos',
    'blog.readMore': 'Ler mais',
    'blog.viewAll': 'Ver Todos os Artigos',

    // Quiz Section
    'quiz.title': 'Quiz Interativo de iPhone',
    'quiz.subtitle': 'Teste seus conhecimentos sobre o uso do iPhone com este quiz interativo de 10 perguntas e ganhe descontos exclusivos em acessórios da Link TI!',
    'quiz.fastEasy': 'Rápido e Fácil',
    'quiz.fastEasyDesc': 'Apenas 10 perguntas sobre o uso básico do iPhone',
    'quiz.gainDiscounts': 'Ganhe Descontos',
    'quiz.gainDiscountsDesc': 'Até 15% de desconto em acessórios baseado na sua pontuação',
    'quiz.forEveryone': 'Para Todos',
    'quiz.forEveryoneDesc': 'Perguntas adequadas para usuários de todos os níveis',
    'quiz.discountSystem': 'Sistema de Descontos',
    'quiz.validInfo': 'Válido em qualquer acessório da Link TI - Apresente o print da tela de resultado em nossa recepção',
    'quiz.startQuiz': 'Começar Quiz 🚀',
    'quiz.questionOf': 'Pergunta {current} de {total}',
    'quiz.congratulations': 'Parabéns! Você é um expert em iPhone!',
    'quiz.veryGood': 'Muito Bom!',
    'quiz.greatWork': 'Ótimo Trabalho!',
    'quiz.goodPerformance': 'Bom Desempenho!',
    'quiz.almostThere': 'Quase lá!',
    'quiz.interesting': 'Interessante!',
    'quiz.keepStudying': 'Continue Estudando!',
    'quiz.youWon': 'Você ganhou {discount}% de desconto!',
    'quiz.validAccessories': 'Válido em qualquer acessório na Link TI',
    'quiz.printScreen': '📱 Dê um print nesta tela e apresente em nossa recepção',
    'quiz.dontGiveUp': 'Não desanime! Com mais prática você vai dominar o iPhone em pouco tempo.',
    'quiz.retakeQuiz': 'Refazer Quiz',
    'quiz.shareResult': 'Compartilhar Resultado',
    'quiz.shareText': 'Acabei de fazer o Quiz de iPhone da Link TI e acertei {score} de {total} perguntas ({percentage}%)! 📱✨',
    'quiz.copiedToClipboard': 'Resultado copiado para a área de transferência!',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.iphone': 'iPhone',
    'nav.ipad': 'iPad',
    'nav.mac': 'Mac',
    'nav.watch': 'Watch',
    'nav.airpods': 'AirPods',
    'nav.otherServices': 'Other Services',
    'nav.prices': 'Prices',
    'nav.faq': 'FAQ',
    'nav.appointment': 'Appointment',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'nav.toggleMenu': 'Toggle Menu',
    
    // Language selector
    'language.portuguese': 'Portuguese',
    'language.english': 'English',
    
    // Theme
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'theme.toggle': 'Toggle Theme',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.tryAgain': 'Try Again',
    
    // Hero Section
    'hero.welcome': 'Welcome to Link TI',
    'hero.subtitle': 'Apple Authorized Service Center',
    'hero.description1': 'Here, we bring Apple excellence to Mato Grosso! As an authorized service center, we use only original parts and have Apple-certified technicians to care for your iPhone, iPad, Mac, Apple Watch and more.',
    'hero.description2': 'Our commitment? Fast repairs, welcoming service and devices like new.',
    'hero.servicesButton': 'Our Services',
    'hero.whatsappButton': 'WhatsApp Support',
    'hero.whatsappMessage': 'Hello, I would like information about technical assistance for Apple devices.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Check out our range of services for your Apple devices',
    'services.iphone.description': 'Screen, battery, camera and other component repairs for all iPhone models.',
    'services.ipad.description': 'Repairs for all iPad models, including screens, batteries and software issues.',
    'services.mac.description': 'Services for MacBook, iMac and Mac mini, from upgrades to logic board repairs.',
    'services.watch.description': 'Specialized Apple Watch repair, including screens, batteries and connectivity issues.',
    'services.airpods.description': 'Specialized AirPods repair, including battery, connectivity and deep cleaning.',
    'services.learnMore': 'Learn More',
    
    // About Section
    'about.title': 'About Our Company',
    'about.subtitle': 'Excellence in Apple services for over 15 years',
    'about.description1': 'Founded in 2003, Link TI is an Apple authorized service center dedicated to providing high-quality repairs and maintenance for all your Apple devices since 2010. Our team of Apple-certified technicians has years of experience and is committed to providing exceptional service.',
    'about.highlight1': 'First Authorized Service Center in MT, since 2010.',
    'about.highlight2': 'Apple certified technicians',
    'about.highlight3': 'Original parts and official warranty',
    'about.highlight4': 'Laboratory with Apple-approved tools',
    'about.highlight5': 'In-warranty, AppleCare and out-of-warranty service.',
    'about.highlight6': 'Accurate and transparent diagnosis',
    'about.description2': 'We seek to ensure that your Apple devices work perfectly, providing fast and reliable repairs with original parts, always maintaining integrity and transparency in our diagnoses and quotes.',
    'about.description3': 'With over 65,000 successful repairs performed, we are the reliable choice to care for your Apple devices.',
    'about.whatsappButton': 'WhatsApp Support',
    
    // CTA Section
    'cta.title': 'Need repair for your Apple device?',
    'cta.description': 'Contact us today. Our specialists are ready to help with any problem on your device.',
    'cta.contactButton': 'Contact Us',
    'cta.whatsappButton': 'Quote via WhatsApp',
    'cta.whatsappMessage': 'Hello, I would like to request a quote for repairing my Apple device.',
    
    // Blog Section
    'blog.title': 'Blog & Tips',
    'blog.subtitle': 'Exclusive content to help you better care for your devices',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View All Articles',

    // Quiz Section
    'quiz.title': 'Interactive iPhone Quiz',
    'quiz.subtitle': 'Test your knowledge about iPhone usage with this interactive 10-question quiz and earn exclusive discounts on Link TI accessories!',
    'quiz.fastEasy': 'Fast and Easy',
    'quiz.fastEasyDesc': 'Just 10 questions about basic iPhone usage',
    'quiz.gainDiscounts': 'Earn Discounts',
    'quiz.gainDiscountsDesc': 'Up to 15% discount on accessories based on your score',
    'quiz.forEveryone': 'For Everyone',
    'quiz.forEveryoneDesc': 'Questions suitable for users of all levels',
    'quiz.discountSystem': '🎁 Discount System',
    'quiz.validInfo': 'Valid on any Link TI accessory - Present a screenshot of the result screen at our reception',
    'quiz.startQuiz': 'Start Quiz 🚀',
    'quiz.questionOf': 'Question {current} of {total}',
    'quiz.congratulations': 'Congratulations! You are an iPhone expert!',
    'quiz.veryGood': 'Very Good!',
    'quiz.greatWork': 'Great Work!',
    'quiz.goodPerformance': 'Good Performance!',
    'quiz.almostThere': 'Almost There!',
    'quiz.interesting': 'Interesting!',
    'quiz.keepStudying': 'Keep Studying!',
    'quiz.youWon': 'You earned {discount}% discount!',
    'quiz.validAccessories': 'Valid on any Link TI accessory',
    'quiz.printScreen': '📱 Take a screenshot of this screen and present it at our reception',
    'quiz.dontGiveUp': 'Don\'t give up! With more practice you will master the iPhone in no time.',
    'quiz.retakeQuiz': 'Retake Quiz',
    'quiz.shareResult': 'Share Result',
    'quiz.shareText': 'I just took the Link TI iPhone Quiz and got {score} out of {total} questions right ({percentage}%)! 📱✨',
    'quiz.copiedToClipboard': 'Result copied to clipboard!',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
