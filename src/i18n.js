import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/i18n/en.json'; // Example for English
import fr from './assets/i18n/fr.json'; // Example for French
import hi from './assets/i18n/hi.json'; // Example for Hindi

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      },
      hi: {
        translation: hi
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;