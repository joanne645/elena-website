import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getCategoryLabel, getDictionary, getInsightBySlug } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { SmartLink } from "@/components/ui/SmartLink";
import styles from "../insights.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getDictionary(defaultLocale).insights.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
    keywords: insight.tags,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      publishedTime: insight.publishDate,
      ...(insight.image
        ? {
            images: [
              {
                url: insight.image.src,
                width: insight.image.width,
                height: insight.image.height,
                alt: insight.image.alt,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();
  const { insightsPage } = getDictionary(defaultLocale);
  const paragraphs = insight.content?.length ? insight.content : [insight.excerpt];

  return (
    <main>
      <article className={styles.page}>
        <div className={`wrap ${styles.article}`}>
          <SmartLink href="/insights" className={styles.back}>
            {insightsPage.backToLibrary}
          </SmartLink>
          <div className="kicker">{getCategoryLabel(insight.category)}</div>
          <h1 className={styles.title}>{insight.title}</h1>
          {insight.image ? (
            <Image
              src={insight.image.src}
              alt={insight.image.alt}
              width={insight.image.width}
              height={insight.image.height}
              sizes="(max-width: 820px) 100vw, 760px"
              className={styles.image}
            />
          ) : null}
          <div className={styles.body}>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={styles.actions}>
            {insight.videoUrl ? (
              <SmartLink href={insight.videoUrl}>{insightsPage.videoLabel}</SmartLink>
            ) : null}
            {insight.youtubeUrl ? (
              <SmartLink href={insight.youtubeUrl}>{insightsPage.youtubeLabel}</SmartLink>
            ) : null}
            <SmartLink href="/#contact">{insightsPage.consultCta}</SmartLink>
          </div>
        </div>
      </article>
    </main>
  );
}
