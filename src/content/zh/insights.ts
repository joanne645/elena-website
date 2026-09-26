import type { Insight, InsightCategory, InsightsPageContent } from "../types";

/**
 * 风水知识库 Knowledge Library
 * ------------------------------------------------------------
 * 新增一篇：在 `insights` 数组里加一个对象即可，首页知识库、/insights 列表、
 * /insights/<slug> 文章页和 sitemap 会自动更新。
 *
 * - slug：英文小写 + 连字符，作为网址，发布后不要再改
 * - category：必须是下面 insightCategories 里的 id
 * - excerpt：首页折叠展开后显示的那一段
 * - content：完整文章段落（可选，不填则文章页显示 excerpt）
 * - videoUrl / youtubeUrl：对应短视频链接（可选）
 * 数组顺序 = 首页显示顺序。
 */

export const insightCategories: InsightCategory[] = [
  { id: "road", label: "道路与路口" },
  { id: "terrain", label: "地势与山景" },
  { id: "light", label: "光线与睡眠" },
  { id: "trees", label: "树木与庭院" },
  { id: "facilities", label: "外部设施" },
  { id: "lot", label: "户型与地块" },
  { id: "traditional", label: "传统玄学" },
];

export const insights: Insight[] = [
  {
    slug: "road-facing-house",
    title: "路冲房真的不能买吗",
    category: "road",
    excerpt:
      "不是看到一条路正对房子就直接否定。真正要看道路宽度、车速、车流量、房屋退缩、前院植被和门窗朝向。传统风水说“气直冲”，现代居住体验里对应的是车灯、噪音、视觉冲击和隐私压力。",
    publishDate: "2026-09-26",
    featured: true,
    tags: ["路冲", "T-intersection", "车灯", "噪音"],
  },
  {
    slug: "reverse-bow-road",
    title: "反弓路为什么更需要看弯道位置",
    category: "road",
    excerpt:
      "弯道外侧的房子更容易直接承受车辆转弯、灯光和视线。影响强弱取决于弧度、车流、房屋高度和前院缓冲。微弯、退缩充分、植被成熟的房子，实际影响可能远小于标签本身。",
    publishDate: "2026-09-26",
    tags: ["反弓", "弯道"],
  },
  {
    slug: "cul-de-sac-position",
    title: "Cul-de-sac 哪个位置更值得选",
    category: "road",
    excerpt:
      "同一个 Cul-de-sac，不同位置体验完全不同。尽头正中可能承受灯光和视线直冲；圆弧两侧往往更安静、私密；中段通常更稳定。看的是位置，不是名字。",
    publishDate: "2026-09-26",
    tags: ["Cul-de-sac"],
  },
  {
    slug: "intersection-house",
    title: "十字路口的房子影响到底在哪里",
    category: "road",
    excerpt:
      "十字路口意味着更多方向的车流、灯光、噪音和视觉刺激。若房屋离路口较远，中间有绿化、建筑退缩或围墙缓冲，影响会明显降低。",
    publishDate: "2026-09-26",
    tags: ["十字路口"],
  },
  {
    slug: "y-x-intersection-scissors",
    title: "Y/X 字路口什么才是真正的剪刀煞",
    category: "road",
    excerpt:
      "关键不是看到分叉就紧张，而是判断夹角、车流方向和房屋所处位置。越靠尖角、夹角越小、门窗越正对高流速带，环境压力通常越明显。",
    publishDate: "2026-09-26",
    tags: ["剪刀煞", "Y字路口", "X字路口"],
  },
  {
    slug: "downslope-backyard-view-home",
    title: "后院下坡的山景房到底能不能买",
    category: "terrain",
    excerpt:
      "后院大下坡不仅是传统意义上的“后空”，还可能带来排水、挡土墙、地基和长期维护成本。心理层面上，后方缺少承托也可能影响安全感。",
    publishDate: "2026-09-26",
    tags: ["后院下坡", "山景房", "挡土墙", "排水"],
  },
  {
    slug: "bedroom-facing-streetlight",
    title: "卧室正对路灯会不会影响睡眠",
    category: "light",
    excerpt:
      "夜间持续光线可能影响生物钟和睡眠质量。传统风水把这种持续性的夜间光刺激称为“光煞”，现代环境科学则更关注光污染、遮光能力和卧室朝向。",
    publishDate: "2026-09-26",
    tags: ["光煞", "路灯", "卧室", "睡眠"],
  },
  {
    slug: "house-near-power-lines",
    title: "高压电塔旁的房子最该担心什么",
    category: "facilities",
    excerpt:
      "除了视觉和心理接受度，还要看噪音、景观、距离以及未来市场接受程度。对房地产来说，很关键的问题是它会不会明显缩小未来的买家池。",
    publishDate: "2026-09-26",
    tags: ["高压电塔", "Power Lines", "转售"],
  },
  {
    slug: "large-tree-in-front-of-door",
    title: "门前有大树到底是加分还是挡气",
    category: "trees",
    excerpt:
      "成熟大树可以遮阴、提升街景和生活品质，但如果正挡大门、长期遮光、离房屋过近，也可能带来采光、湿气、根系和维护问题。树本身不是问题，位置才是。",
    publishDate: "2026-09-26",
    tags: ["门前大树", "采光"],
  },
  {
    slug: "flag-lot",
    title: "Flag Lot 旗子房安静之外还要看什么",
    category: "lot",
    excerpt:
      "旗子房常有更强的私密性，但细长车道可能带来进出不便、消防与停车限制、视觉狭窄感，以及 easement 和使用权问题。",
    publishDate: "2026-09-26",
    tags: ["Flag Lot", "旗子房", "Easement"],
  },
];

export const insightsPage: InsightsPageContent = {
  kicker: "Knowledge Library",
  titleLines: ["风水知识库"],
  lead: "把常见湾区买房问题整理成可以随时查询的文章，不用在几十条短视频里慢慢翻",
  backToLibrary: "← 返回风水知识库",
  consultCta: "这个问题和我看的房子很像，咨询 Elena →",
  videoLabel: "观看相关视频 →",
  youtubeLabel: "在 YouTube 观看 →",
};
