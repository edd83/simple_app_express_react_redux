import i18n from 'i18next';

i18n
  .init({
    whitelist: ['en', 'fr'],
    fallbackLng: 'fr',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false // not needed for react!!
    }
  });

export default i18n;
