import Image from "next/image";
import { Fragment } from "react";
import type { HeroContent } from "@/content";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./Hero.module.css";

export function Hero({ content }: { content: HeroContent }) {
  return (
    <header className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <div className="eyebrow">{content.eyebrow}</div>
          <h1 className={styles.title}>
            {content.titleLines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 ? <br /> : null}
                {line.accent ? <em>{line.text}</em> : line.text}
              </Fragment>
            ))}
          </h1>
          <p className={styles.copy}>{content.copy}</p>
          <div className={styles.actions}>
            <SmartLink className="btn-primary" href={content.primaryCta.href}>
              {content.primaryCta.label}
            </SmartLink>
            <SmartLink className="btn-secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </SmartLink>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 960px) min(620px, 100vw), 520px"
            loading="eager"
            fetchPriority="high"
            className={styles.portraitImg}
          />
        </div>
      </div>
    </header>
  );
}
