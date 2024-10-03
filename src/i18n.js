import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "description": "This is a simple multilingual app",
    }
  },
  ua: {
    translation: {
      "welcome": "Ласкаво просимо",
      "description": "Це простий багатомовний додаток",
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать",
      "description": "Это простое многоязычное приложение",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
