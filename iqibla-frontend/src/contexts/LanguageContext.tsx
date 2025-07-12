'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../locales/en.json';
import idTranslations from '../locales/id.json';

type Language = 'en' | 'id';

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translationsMap = {
  en: enTranslations,
  id: idTranslations,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('id'); // Default to Indonesian

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function with nested key support and interpolation
  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: unknown = translationsMap[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English if key not found in current language
        let fallbackValue: unknown = translationsMap.en;
        for (const fallbackKey of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
            fallbackValue = (fallbackValue as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Return key if not found in any language
          }
        }
        value = fallbackValue;
        break;
      }
    }
    
    let result = typeof value === 'string' ? value : key;
    
    // Handle interpolation if params are provided
    if (params && typeof result === 'string') {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        const placeholder = `{{${paramKey}}}`;
        result = result.replace(new RegExp(placeholder, 'g'), String(paramValue));
      });
    }
    
    return result;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translationsMap[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Convenience hook for just the translation function
export function useTranslation() {
  const { t } = useLanguage();
  return { t };
}

export default LanguageContext;