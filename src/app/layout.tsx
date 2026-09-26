import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/noto-serif-sc/400.css";
import "@fontsource/noto-serif-sc/600.css";
import "./globals.css";

import { getDictionary, site } from "@/content";
import { defaultLocale, htmlLang, ogLocale } from "@/i18n/config";
import { getSiteUrl } from "@/lib/site-url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: site.seo.title, template: site.seo.titleTemplate },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.brand.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.brand.fullName,
    locale: ogLocale[defaultLocale],
    title: site.seo.title,
    description: site.seo.description,
    url: "/",
    images: [{ ...site.seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage.src],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary(defaultLocale);
  return (
    <html lang={htmlLang[defaultLocale]} data-scroll-behavior="smooth">
      <body>
        <JsonLd />
        <Navbar nav={dict.navigation} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
