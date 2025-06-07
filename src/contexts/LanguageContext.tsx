
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
