module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeDetection: false,
  },
  fallbackLng: "en",
  ns: ["common"],
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
