import type { Insight, InsightCategory, LibrarySectionContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InsightAccordion } from "@/components/insights/InsightAccordion";
import styles from "./KnowledgeLibrary.module.css";

export function KnowledgeLibrary({
  content,
  insights,
  categories,
  consultHref,
}: {
  content: LibrarySectionContent;
  insights: Insight[];
  categories: InsightCategory[];
  consultHref: string;
}) {
  return (
    <section id="library" className={styles.library} aria-labelledby="library-title">
      <div className="wrap">
        <SectionHeading id="library-title" {...content} />
        <InsightAccordion
          insights={insights}
          categories={categories}
          articleCta={content.articleCta}
          readMore={content.readMore}
          emptyState={content.emptyState}
          consultHref={consultHref}
        />
      </div>
    </section>
  );
}
