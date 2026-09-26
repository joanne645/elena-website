import type { ClientFlowContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ClientFlow.module.css";

export function ClientFlow({ content }: { content: ClientFlowContent }) {
  return (
    <section className={styles.clientFlow} aria-labelledby="flow-title">
      <div className="wrap">
        <SectionHeading id="flow-title" {...content} />
        <ol className={styles.grid}>
          {content.steps.map((step) => (
            <li key={step.step} className={styles.flow}>
              <div className={styles.step}>{step.step}</div>
              <h3>{step.title}</h3>
              <p>
                {step.emphasis ? <strong>{step.emphasis}</strong> : null}
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
