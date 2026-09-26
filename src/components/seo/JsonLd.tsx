import { site } from "@/content";
import { getSiteUrl } from "@/lib/site-url";

/** schema.org RealEstateAgent — only confirmed facts; null contact fields are omitted. */
export function JsonLd() {
  const url = getSiteUrl();
  const { phone, email } = site.contact;
  const sameAs = Object.values(site.social).filter((v): v is string => Boolean(v));
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.brand.fullName,
    alternateName: site.brand.chineseName,
    description: site.seo.description,
    url,
    image: `${url}${site.seo.ogImage.src}`,
    areaServed: site.seo.areaServed.map((name) => ({ "@type": "Place", name })),
    knowsAbout: ["Real Estate", "Feng Shui", "Environmental Psychology", "Home Environment Analysis"],
    ...(phone ? { telephone: phone } : {}),
    ...(email ? { email } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
