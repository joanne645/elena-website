import type { PerspectiveSectionContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PerspectiveSection.module.css";

export function PerspectiveSection({ content }: { content: PerspectiveSectionContent }) {
  return (
    <section id="perspectives" className={styles.perspectives} aria-labelledby="perspectives-title">
      <div className="wrap">
        <SectionHeading id="perspectives-title" {...content} />
        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
