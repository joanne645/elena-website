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
    /** Online booking link (Calendly etc.). When set, it becomes the primary button. */
    consultationUrl: null as string | null,
    phone: "408-420-7495" as string | null,
    phoneHref: "+14084207495",
    email: "elenachengrealty@gmail.com" as string | null,
    wechatQr: {
      src: "/images/wechat-qr.png",
      width: 348,
      height: 348,
      alt: "Elena 微信二维码",
    } as { src: string; width: number; height: number; alt: string } | null,
    /** License display — California DRE advertising requirement. */
    legalName: "Ying Cheng (Elena)",
    title: "Realtor®",
    dreLicense: "02231442" as string | null,
    brokerage: "BQ Realty" as string | null,
    brokerageAddress: {
      street: "1631 North First Street #100",
      city: "San Jose",
      region: "CA",
      postalCode: "95112",
    } as { street: string; city: string; region: string; postalCode: string } | null,
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
  return site.contact.consultationUrl ?? "/#contact";
}
