import type { NavContent } from "@/content";
import { site } from "@/content";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./Navbar.module.css";

export function Navbar({ nav }: { nav: NavContent }) {
  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={`wrap ${styles.inner}`}>
        <SmartLink href="/" className={styles.brand}>
          {site.brand.name}
          <small>{site.brand.tagline}</small>
        </SmartLink>
        <div className={styles.links}>
          {nav.links.map((link) => (
            <SmartLink key={link.href} href={link.href}>
              {link.label}
            </SmartLink>
          ))}
        </div>
        <SmartLink className={styles.cta} href={nav.cta.href}>
          {nav.cta.label}
        </SmartLink>
      </div>
    </nav>
  );
}
