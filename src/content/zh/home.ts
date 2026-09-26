import type { HomeContent, NavContent } from "../types";

/**
 * 首页中文文案 —— 与已批准的 Demo（reference/Elena_Website_Demo_Standalone.html）逐字一致。
 * 改文案只改这里，不要改组件。
 */

export const navigation: NavContent = {
  links: [
    { label: "我在担心什么", href: "/#concerns" },
    { label: "风水知识库", href: "/#library" },
    { label: "怎么看这套房", href: "/#perspectives" },
    { label: "关于 Elena", href: "/#about" },
  ],
  cta: { label: "咨询具体房源", href: "/#contact" },
};

export const home: HomeContent = {
  hero: {
    eyebrow: "Bay Area Real Estate × Feng Shui",
    titleLines: [{ text: "你正在看的这套房" }, { text: "到底适不适合你", accent: true }],
    copy: "买房不只是价格、学区和户型。道路、地势、采光、噪音、格局、传统风水与家庭本身，都可能影响住进去之后的体验，也可能影响房子的长期价值。",
    primaryCta: { label: "先查我担心的问题", href: "/#library" },
    secondaryCta: { label: "我已经有具体房源", href: "/#contact" },
    image: {
      src: "/images/elena-portrait.jpg",
      width: 1254,
      height: 1254,
      alt: "Elena Cheng",
    },
  },

  questionStrip: {
    intro: "你可能正在问这些问题",
    items: [
      { label: "道路", question: "路冲、反弓、十字路口能买吗" },
      { label: "地势", question: "后院下坡、山景房风险大不大" },
      { label: "居住", question: "采光、噪音、路灯会不会影响生活" },
      { label: "玄学", question: "朝向、五行、格局适不适合家庭" },
    ],
  },

  concerns: {
    kicker: "Start With Your Concern",
    titleLines: ["买房时，你最担心的是哪一种问题"],
    lead: "不用先理解所有风水名词，先从你正在看的这套房出发",
    cards: [
      {
        number: "01",
        category: "风水格局",
        title: "这套房是不是有明显的风水问题",
        description:
          "先看道路、路口、地势、门前环境和房屋位置，再判断传统风水里所谓的“煞”到底严重不严重",
        tags: ["路冲", "反弓", "剪刀煞", "Cul-de-sac", "环岛"],
      },
      {
        number: "02",
        category: "居住体验",
        title: "这个房子住进去以后会不会不舒服",
        description: "很多问题不是“吉凶”，而是长期的光线、噪音、隐私、压迫感和睡眠体验",
        tags: ["采光", "路灯", "噪音", "隐私", "门窗朝向"],
      },
      {
        number: "03",
        category: "房屋风险",
        title: "有没有我第一眼没有看到的房屋问题",
        description:
          "有些环境问题同时也是房地产问题，需要一起看维护成本、使用限制和未来转售接受度",
        tags: ["后院下坡", "排水", "挡土墙", "Flag Lot", "Easement", "高压塔"],
      },
      {
        number: "04",
        category: "家庭适配",
        title: "这套房到底适不适合我们家",
        description:
          "同一套房对不同家庭的答案可能完全不同，生活习惯、家庭成员、朝向与传统五行判断都可能进入个性化分析",
        tags: ["家庭成员", "朝向", "五行", "格局", "个人适配"],
      },
    ],
  },

  library: {
    kicker: "Knowledge Library",
    titleLines: ["按你正在看的房子", "直接查对应问题"],
    lead: "把常见湾区买房问题整理成可以随时查询的文章，不用在几十条短视频里慢慢翻",
    articleCta: "这个问题和我看的房子很像，咨询 Elena →",
    emptyState: "这个分类的内容正在整理中，很快更新。",
    readMore: "阅读完整文章 →",
  },

  perspectives: {
    kicker: "Choose Your Perspective",
    titleLines: ["你想从哪个角度", "看这套房"],
    lead: "不是所有客户都需要同样深度的分析，你可以从自己最关心的一层开始",
    cards: [
      {
        icon: "⌂",
        title: "房地产角度",
        description: "位置、维护、使用限制、市场接受度和未来 resale 会不会受影响",
      },
      {
        icon: "◌",
        title: "环境风水角度",
        description: "道路、地势、光线、噪音、气流和空间关系带来的真实居住体验",
      },
      {
        icon: "⌖",
        title: "传统风水角度",
        description: "明堂、靠山、藏风聚气、路冲、反弓、缺角等传统判断怎么看",
      },
      {
        icon: "☯",
        title: "个人玄学角度",
        description: "朝向、五行、家庭成员与住宅适配，需要时再进入更个性化的分析",
      },
    ],
  },

  clientFlow: {
    kicker: "From Question to Decision",
    titleLines: ["从一个担心的问题", "走到真正的买房判断"],
    lead: "先自己理解共性问题，再把真正需要结合具体房源判断的部分交给专业分析",
    steps: [
      {
        step: "STEP 01",
        title: "找到和你房子相似的问题",
        description: "从道路、地势、采光、格局或传统风水里找到最接近的情况",
      },
      {
        step: "STEP 02",
        title: "先判断问题到底严不严重",
        description: "理解哪些只是标签，哪些会真正影响居住、维护或转售",
      },
      {
        step: "STEP 03",
        title: "再回到你正在看的具体房源",
        description: "同样的问题，因为距离、位置、缓冲和房屋条件不同，答案可能完全不同",
      },
      {
        step: "STEP 04",
        title: "需要时再找 Elena 深入判断",
        emphasis: "有具体地址、准备下 Offer、或多个因素叠加时",
        description: "，再做一对一分析",
      },
    ],
  },

  about: {
    kicker: "About Elena",
    titleLines: ["不是把风水讲得更玄", "而是把房子看得更完整"],
    quote: "房地产回答市场价值与交易风险，环境与风水观察补上长期居住体验和家庭适配这一层",
    bio: "Elena Cheng 程瑛，湾区房地产经纪、风水顾问。她把房地产实务、真实看房经验、环境观察与传统风水结合，帮助买家理解哪些问题值得接受，哪些问题值得议价，哪些问题可能应该放弃。",
    roles: [
      { title: "Real Estate", description: "市场、交易与资产判断" },
      { title: "Feng Shui", description: "传统空间经验的现代解读" },
      { title: "Environment", description: "环境心理与居住体验" },
    ],
    image: {
      src: "/images/elena-about-garden.jpg",
      width: 1000,
      height: 1000,
      alt: "Elena Cheng 程瑛",
    },
  },

  contact: {
    kicker: "1V1 Home Review",
    titleLines: ["文章解决共性问题", "咨询解决你这套房的问题"],
    copy: "如果你已经有具体地址、准备写 Offer、或正在两三套房之间犹豫，可以把房源和你最担心的问题带来，从房地产、环境与家庭适配三个维度一起判断。",
    bookingLabel: "在线预约咨询",
    phoneLabel: "致电 / 短信",
    emailLabel: "邮件咨询",
    emailSubject: "房源咨询",
    wechatTitle: "微信扫码咨询",
    wechatNote: "发来房源地址和你最担心的问题",
    image: {
      src: "/images/elena-contact-white.jpg",
      width: 760,
      height: 760,
      alt: "Elena Cheng",
    },
  },
};
