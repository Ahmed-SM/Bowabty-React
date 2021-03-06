import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n

  .use(Backend)

  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    lng:'ar',
    fallbackLng: 'ar',
    debug: false,
    ns:['TestComponent','myOrders', 'myService', 'navigation', 'userContent', 'login', 'IncomingRequest', 'LegalAffairs', 'myDesk', 'customFile', 'AdministrativeServicesDeptOrders', 'Services', 'departement', 'userType', 'myUers','Request'],
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