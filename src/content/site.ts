/**
 * Site-wide facts: brand, contact info, social links, SEO defaults.
 *
 * ⚠️ Only put REAL, confirmed information here. Leave `null` until Elena
 * provides it — components hide anything that is null. Never invent a phone
 * number, email, DRE license, testimonial or sales figure.
 */

export const site = {
  brand: {
    name: "ELENA CHENG",
    fullName: "Elena Cheng",
    chineseName: "程瑛",
    tagline: "BAY AREA REAL ESTATE × FENG SHUI",
  },

  contact: {
    /** Where every「咨询 Elena」button points: Calendly / form / WeChat page. */
    consultationUrl: null as string | null,
    phone: null as string | null,
    email: null as string | null,
    wechatId: null as string | null,
    dreLicense: null as string | null,
    brokerage: null as string | null,
  },

  social: {
    youtube: null as string | null,
    xiaohongshu: null as string | null,
    wechatChannels: null as string | null,
  },

  seo: {
    title: "Elena Cheng | 湾区地产 × 风水看宅",
    titleTemplate: "%s | Elena Cheng",
    description:
      "从客户正在看的具体房子出发，理解道路、地势、采光、噪音、格局、传统风水与家庭适配问题。",
    keywords: [
      "Bay Area Realtor",
      "Bay Area Feng Shui",
      "Silicon Valley Real Estate",
      "湾区房地产",
      "湾区风水",
      "硅谷买房",
      "风水看宅",
    ],
    areaServed: [
      "San Francisco Bay Area",
      "Silicon Valley",
      "Palo Alto",
      "Los Altos",
      "Mountain View",
      "Sunnyvale",
      "Cupertino",
      "Santa Clara",
      "Saratoga",
      "Los Gatos",
      "San Jose",
    ],
    ogImage: {
      src: "/images/elena-portrait.jpg",
      width: 1254,
      height: 1254,
      alt: "Elena Cheng",
    },
  },
} as const;

/** Resolve the consultation link; falls back to the on-page contact section. */
export function getConsultationHref(): string {
  const { consultationUrl, email } = site.contact;
  if (consultationUrl) return consultationUrl;
  if (email) return `mailto:${email}`;
  return "/#contact";
}
