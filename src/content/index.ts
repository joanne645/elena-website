import { defaultLocale, type Locale } from "@/i18n/config";
import * as zhHome from "./zh/home";
import * as zhInsights from "./zh/insights";
import type { Insight } from "./types";

/**
 * Single entry point for localized content.
 * Components receive content via props from here — never import zh/* directly
 * inside components, so a second language can be dropped in later.
 */
const dictionaries = {
  zh: {
    navigation: zhHome.navigation,
    home: zhHome.home,
    insights: zhInsights.insights,
    insightCategories: zhInsights.insightCategories,
    insightsPage: zhInsights.insightsPage,
  },
};

export type Dictionary = (typeof dictionaries)["zh"];

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale as keyof typeof dictionaries] ?? dictionaries.zh;
}

export function getInsightBySlug(slug: string, locale: Locale = defaultLocale): Insight | undefined {
  return getDictionary(locale).insights.find((item) => item.slug === slug);
}

export function getCategoryLabel(id: Insight["category"], locale: Locale = defaultLocale): string {
  return getDictionary(locale).insightCategories.find((c) => c.id === id)?.label ?? id;
}

export { site, getConsultationHref } from "./site";
export type * from "./types";
