import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';// it's causing an odd behaviour 😂

i18n

  .use(Backend)


  .use(initReactI18next)

  .init({
    lng: 'ar',
    fallbackLng: 'ar',
    debug: true,
    ns:['myOrders', 'myService', 'navigation', 'userContent', 'login'],
    interpolation: {
      escapeValue: false, 
    },
    react: {
    wait: true,
    useSuspense: true
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
  });


export default i18n;