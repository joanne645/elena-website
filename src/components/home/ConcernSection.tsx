import type { ConcernSectionContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ConcernSection.module.css";

export function ConcernSection({ content }: { content: ConcernSectionContent }) {
  return (
    <section id="concerns" className={styles.concerns} aria-labelledby="concerns-title">
      <div className="wrap">
        <SectionHeading id="concerns-title" {...content} />
        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.number} className={styles.card}>
              <div className={styles.num}>
                {card.number} · {card.category}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
