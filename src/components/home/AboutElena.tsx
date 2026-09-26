import Image from "next/image";
import type { AboutContent } from "@/content";
import { MultiLine } from "@/components/ui/SectionHeading";
import styles from "./AboutElena.module.css";

export function AboutElena({ content }: { content: AboutContent }) {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`wrap ${styles.grid}`}>
        <Image
          src={content.image.src}
          alt={content.image.alt}
          width={content.image.width}
          height={content.image.height}
          sizes="(max-width: 960px) 100vw, 480px"
          className={styles.image}
        />
        <div>
          <div className="kicker">{content.kicker}</div>
          <h2 id="about-title">
            <MultiLine lines={content.titleLines} />
          </h2>
          <blockquote className={styles.quote}>{content.quote}</blockquote>
          <p className={styles.bio}>{content.bio}</p>
          <div className={styles.roles}>
            {content.roles.map((role) => (
              <div key={role.title} className={styles.role}>
                <b>{role.title}</b>
                {role.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
