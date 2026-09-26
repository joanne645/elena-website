"use client";

import { useState } from "react";
import type { Insight, InsightCategory, InsightCategoryId } from "@/content";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./InsightAccordion.module.css";

/**
 * Knowledge Library list: category chips (click to filter, click again to
 * show all) + native <details> accordion. All article text stays in the HTML
 * for SEO; filtering only hides rows.
 */
export function InsightAccordion({
  insights,
  categories,
  articleCta,
  readMore,
  emptyState,
  consultHref,
}: {
  insights: Insight[];
  categories: InsightCategory[];
  articleCta: string;
  readMore: string;
  emptyState: string;
  consultHref: string;
}) {
  const [active, setActive] = useState<InsightCategoryId | null>(null);
  const labelOf = (id: InsightCategoryId) => categories.find((c) => c.id === id)?.label ?? id;
  const visible = active ? insights.filter((i) => i.category === active) : insights;

  return (
    <>
      <div className={styles.toolbar} role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={styles.chip}
            aria-pressed={active === cat.id}
            onClick={() => setActive((cur) => (cur === cat.id ? null : cat.id))}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visible.map((item) => (
          <details key={item.slug} className={styles.article} id={`insight-${item.slug}`}>
            <summary>
              <span className={styles.cat}>{labelOf(item.category)}</span>
              <h3>{item.title}</h3>
              <span className={styles.plus} aria-hidden="true">
                ＋
              </span>
            </summary>
            <div className={styles.body}>
              <p>{item.excerpt}</p>
              <div className={styles.links}>
                <SmartLink href={consultHref}>{articleCta}</SmartLink>
                {item.content?.length ? (
                  <SmartLink href={`/insights/${item.slug}`}>{readMore}</SmartLink>
                ) : null}
              </div>
            </div>
          </details>
        ))}
        {visible.length === 0 ? <p className={styles.empty}>{emptyState}</p> : null}
      </div>
    </>
  );
}
