import type { QuestionStripContent } from "@/content";
import styles from "./QuestionStrip.module.css";

export function QuestionStrip({ content }: { content: QuestionStripContent }) {
  return (
    <div className={styles.strip}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>{content.intro}</div>
        {content.items.map((item) => (
          <div key={item.label} className={styles.item}>
            <b>{item.label}</b>
            <span>{item.question}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
