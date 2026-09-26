import Image from "next/image";
import type { ContactCtaContent } from "@/content";
import { site } from "@/content";
import { MultiLine } from "@/components/ui/SectionHeading";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./ContactCTA.module.css";

export function ContactCTA({ content }: { content: ContactCtaContent }) {
  const { consultationUrl, phone, phoneHref, email, wechatQr } = site.contact;
  const mailto = email ? `mailto:${email}?subject=${encodeURIComponent(content.emailSubject)}` : null;

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

            <div className={styles.actions}>
              {consultationUrl ? (
                <SmartLink className={`btn-secondary ${styles.button}`} href={consultationUrl}>
                  {content.bookingLabel}
                </SmartLink>
              ) : null}
              {phone ? (
                <a
                  className={`btn-secondary ${consultationUrl ? styles.ghost : styles.button}`}
                  href={`tel:${phoneHref}`}
                >
                  {content.phoneLabel} {phone}
                </a>
              ) : null}
              {mailto ? (
                <a className={`btn-secondary ${styles.ghost}`} href={mailto}>
                  {content.emailLabel}
                </a>
              ) : null}
            </div>

            {wechatQr ? (
              <div className={styles.wechat}>
                <Image
                  src={wechatQr.src}
                  alt={wechatQr.alt}
                  width={wechatQr.width}
                  height={wechatQr.height}
                  sizes="96px"
                  className={styles.qr}
                />
                <div>
                  <b>{content.wechatTitle}</b>
                  <span>{content.wechatNote}</span>
                  {email ? <span className={styles.email}>{email}</span> : null}
                </div>
              </div>
            ) : null}
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
