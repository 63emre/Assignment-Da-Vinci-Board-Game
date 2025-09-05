import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, getSavedLanguage, saveLanguage, getTranslations } from '../i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage());
  const [t, setTranslations] = useState<Translations>(getTranslations(language));

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
    setTranslations(getTranslations(lang));
  };

  useEffect(() => {
    setTranslations(getTranslations(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
