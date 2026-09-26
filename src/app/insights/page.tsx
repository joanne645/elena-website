import type { Metadata } from "next";
import { getDictionary } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { MultiLine } from "@/components/ui/SectionHeading";
import { InsightAccordion } from "@/components/insights/InsightAccordion";
import styles from "./insights.module.css";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: "风水知识库",
  description: dict.insightsPage.lead,
  alternates: { canonical: "/insights" },
};

export default function InsightsIndexPage() {
  const { insights, insightCategories, insightsPage, home } = dict;
  return (
    <main>
      <section className={styles.page}>
        <div className="wrap">
          <div className="kicker">{insightsPage.kicker}</div>
          <h1 className={styles.title}>
            <MultiLine lines={insightsPage.titleLines} />
          </h1>
          <p className="lead">{insightsPage.lead}</p>
          <InsightAccordion
            insights={insights}
            categories={insightCategories}
            articleCta={home.library.articleCta}
            readMore={home.library.readMore}
            emptyState={home.library.emptyState}
            consultHref="/#contact"
          />
        </div>
      </section>
    </main>
  );
}
