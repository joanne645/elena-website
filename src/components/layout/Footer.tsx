import { site } from "@/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const { legalName, title, dreLicense, brokerage, brokerageAddress, phone, email } = site.contact;
  const license = [legalName, title, dreLicense ? `DRE #${dreLicense}` : null].filter(Boolean).join(" · ");
  const address = brokerageAddress
    ? `${brokerageAddress.street}, ${brokerageAddress.city}, ${brokerageAddress.region} ${brokerageAddress.postalCode}`
    : null;
  const office = [brokerage, address].filter(Boolean).join(" · ");
  const reach = [phone, email].filter(Boolean).join(" · ");
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>© {year} {site.brand.fullName} · Bay Area Real Estate × Feng Shui</div>
        <div className={styles.legal}>
          {license ? <span>{license}</span> : null}
          {office ? <span>{office}</span> : null}
          {reach ? <span>{reach}</span> : null}
        </div>
      </div>
    </footer>
  );
}
