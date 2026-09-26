import { site } from "@/content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const { dreLicense, brokerage } = site.contact;
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        © {year} {site.brand.fullName} · Bay Area Real Estate × Feng Shui
        {brokerage ? ` · ${brokerage}` : null}
        {dreLicense ? ` · DRE #${dreLicense}` : null}
      </div>
    </footer>
  );
}
