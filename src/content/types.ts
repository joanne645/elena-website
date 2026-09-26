/**
 * Content types for the Elena website.
 * Every piece of copy lives in src/content/<locale>/ and is typed here,
 * so components stay presentation-only and a future English version
 * only needs a parallel content folder.
 */

export type ImageAsset = {
  src: string; // path under /public, e.g. "/images/elena-portrait.jpg"
  width: number;
  height: number;
  alt: string;
};

export type Link = {
  label: string;
  href: string;
};

export type NavContent = {
  links: Link[];
  cta: Link;
};

export type HeroContent = {
  eyebrow: string;
  /** Title lines; the line flagged `accent` renders in Forest Green. */
  titleLines: { text: string; accent?: boolean }[];
  copy: string;
  primaryCta: Link;
  secondaryCta: Link;
  image: ImageAsset;
};

export type QuestionStripContent = {
  intro: string;
  items: { label: string; question: string }[];
};

export type ConcernCard = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
};

export type SectionHeading = {
  kicker: string;
  /** Rendered with a line break between items (matches the demo's <br>). */
  titleLines: string[];
  lead?: string;
};

export type ConcernSectionContent = SectionHeading & {
  cards: ConcernCard[];
};

export type LibrarySectionContent = SectionHeading & {
  articleCta: string;
  emptyState: string;
  readMore: string;
};

export type PerspectiveCard = {
  icon: string;
  title: string;
  description: string;
};

export type PerspectiveSectionContent = SectionHeading & {
  cards: PerspectiveCard[];
};

export type FlowStep = {
  step: string;
  title: string;
  description: string;
  /** Optional bold lead-in rendered before the description (demo STEP 04). */
  emphasis?: string;
};

export type ClientFlowContent = SectionHeading & {
  steps: FlowStep[];
};

export type AboutContent = {
  kicker: string;
  titleLines: string[];
  quote: string;
  bio: string;
  roles: { title: string; description: string }[];
  image: ImageAsset;
};

export type ContactCtaContent = {
  kicker: string;
  titleLines: string[];
  copy: string;
  /** Shown when site.contact.consultationUrl (Calendly etc.) is set. */
  bookingLabel: string;
  phoneLabel: string;
  emailLabel: string;
  emailSubject: string;
  wechatTitle: string;
  wechatNote: string;
  image: ImageAsset;
};

export type HomeContent = {
  hero: HeroContent;
  questionStrip: QuestionStripContent;
  concerns: ConcernSectionContent;
  library: LibrarySectionContent;
  perspectives: PerspectiveSectionContent;
  clientFlow: ClientFlowContent;
  about: AboutContent;
  contact: ContactCtaContent;
};

/* ---------- Knowledge Library ---------- */

export type InsightCategoryId =
  | "road"
  | "terrain"
  | "light"
  | "trees"
  | "facilities"
  | "lot"
  | "traditional";

export type InsightCategory = {
  id: InsightCategoryId;
  label: string;
};

export type Insight = {
  slug: string; // URL: /insights/<slug>
  title: string;
  category: InsightCategoryId;
  /** Short answer shown when the accordion opens on the homepage. */
  excerpt: string;
  /** Full article paragraphs for /insights/<slug>. Falls back to excerpt. */
  content?: string[];
  image?: ImageAsset;
  videoUrl?: string; // 视频号 / 小红书 / 其他视频链接
  youtubeUrl?: string;
  publishDate: string; // ISO date, e.g. "2026-09-26"
  featured?: boolean;
  tags?: string[];
};

export type InsightsPageContent = {
  kicker: string;
  titleLines: string[];
  lead: string;
  backToLibrary: string;
  consultCta: string;
  videoLabel: string;
  youtubeLabel: string;
};
