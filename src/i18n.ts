import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import trTranslations from './locales/tr.json';
import enTranslations from './locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: trTranslations },
      en: { translation: enTranslations }
    },
    lng: 'tr', // default language
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
