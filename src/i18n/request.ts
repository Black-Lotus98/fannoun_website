import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ar"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    // Fallback to default locale instead of calling notFound()
    locale = "en";
  }

  // Load all translation namespaces
  const [common, home, about, contact, team, header] = await Promise.all([
    import(`../../messages/${locale}/common.json`),
    import(`../../messages/${locale}/pages/home.json`),
    import(`../../messages/${locale}/pages/about.json`),
    import(`../../messages/${locale}/pages/contact.json`),
    import(`../../messages/${locale}/pages/team.json`),
    import(`../../messages/${locale}/components/header.json`),
  ]);

  return {
    locale: locale as Locale,
    messages: {
      common: common.default,
      home: home.default,
      about: about.default,
      contact: contact.default,
      team: team.default,
      header: header.default,
    },
  };
});
