import Image from "next/image";
import type { ContactCtaContent } from "@/content";
import { MultiLine } from "@/components/ui/SectionHeading";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./ContactCTA.module.css";

export function ContactCTA({ content, href }: { content: ContactCtaContent; href: string }) {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="wrap">
        <div className={styles.box}>
          <div>
            <div className="kicker">{content.kicker}</div>
            <h2 id="contact-title">
              <MultiLine lines={content.titleLines} />
            </h2>
            <p>{content.copy}</p>
            <SmartLink className={`btn-secondary ${styles.button}`} href={href}>
              {content.buttonLabel}
            </SmartLink>
          </div>
          <div className={styles.brandImg}>
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              sizes="360px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
