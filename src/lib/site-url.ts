/**
 * Absolute site URL used for canonical links, sitemap and Open Graph.
 * Production domain lives here; NEXT_PUBLIC_SITE_URL (Vercel env) can override it.
 * When a custom domain is connected, change PRODUCTION_URL below.
 */
export const PRODUCTION_URL = "https://elenacheng.vercel.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return PRODUCTION_URL;
}
