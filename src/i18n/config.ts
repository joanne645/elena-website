/**
 * Locale configuration.
 * v1 ships Chinese only at the root URL ("/").
 * To add English later: add "en" to `locales`, create src/content/en/*,
 * register it in src/content/index.ts, and add an /en route segment.
 */
export const locales = ["zh"] as const;
export type Locale = (typeof locales)[number] | "en";

export const defaultLocale: Locale = "zh";

export const htmlLang: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en-US",
};

export const ogLocale: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_US",
};
