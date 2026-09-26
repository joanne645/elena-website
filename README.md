# Elena Cheng — Bay Area Real Estate × Feng Shui

Elena Cheng 个人品牌网站。Next.js (App Router) + TypeScript + CSS Modules，部署到 Vercel。

视觉与文案的唯一基准（Source of Truth）是 `reference/Elena_Website_Demo_Standalone.html`（已批准的 Demo）。

## 本地运行

```bash
npm install
npm run dev        # http://localhost:3000
```

## 上线前检查

```bash
npm run lint
npm run typecheck
npm run build
# 或一次跑完：
npm run check
```

需要 Node.js 20.9 或更高版本。

## 常见修改 → 改哪个文件

| 想改什么 | 文件 |
| --- | --- |
| 电话 / 邮箱 / 微信 / DRE / 咨询预约链接 | `src/content/site.ts` → `contact` |
| YouTube / 小红书 / 视频号链接 | `src/content/site.ts` → `social` |
| SEO 标题、描述、关键词 | `src/content/site.ts` → `seo` |
| 首页所有中文文案（Hero、担心的问题、角度、流程、About、CTA） | `src/content/zh/home.ts` |
| 导航菜单 | `src/content/zh/home.ts` → `navigation` |
| 风水知识库文章 / 分类 | `src/content/zh/insights.ts` |
| 颜色、字体、间距等 Design Tokens | `src/app/globals.css` → `:root` |
| 图片 | `public/images/` |

### 新增一篇风水知识库文章

在 `src/content/zh/insights.ts` 的 `insights` 数组里加一个对象：

```ts
{
  slug: "trash-bins-at-front-door",   // 网址 /insights/trash-bins-at-front-door
  title: "门口垃圾桶到底影响什么",
  category: "facilities",             // road | terrain | light | trees | facilities | lot | traditional
  excerpt: "首页展开后显示的一段话……",
  content: ["完整文章第一段", "第二段"], // 可选；填了之后首页会出现「阅读完整文章」
  videoUrl: "https://…",              // 可选
  youtubeUrl: "https://…",            // 可选
  publishDate: "2026-10-01",
  tags: ["垃圾桶"],
},
```

首页知识库、`/insights` 列表、文章页和 `sitemap.xml` 会自动更新。

## 项目结构

```
src/
  app/                    路由（App Router）
    page.tsx              首页（按 Demo 顺序组装各 Section）
    insights/             /insights 与 /insights/[slug]
    sitemap.ts, robots.ts SEO
    globals.css           Design tokens + 全站基础样式
  components/
    layout/               Navbar, Footer
    home/                 Hero, QuestionStrip, ConcernSection, KnowledgeLibrary,
                          PerspectiveSection, ClientFlow, AboutElena, ContactCTA
    insights/             InsightAccordion（分类筛选 + 折叠文章）
    ui/                   SectionHeading, SmartLink
    seo/                  JsonLd (schema.org RealEstateAgent)
  content/
    site.ts               品牌、联系方式、社媒、SEO
    zh/home.ts            首页中文文案
    zh/insights.ts        风水知识库
    types.ts              内容类型定义
    index.ts              getDictionary(locale) 内容入口
  i18n/config.ts          语言配置（目前 zh，已为 en 预留）
public/images/            从 Demo 提取的正式图片
reference/                已批准的 Demo HTML（设计基准，不参与构建）
```

## 部署（Vercel）

1. 把仓库推到 GitHub。
2. Vercel → Add New Project → 导入该仓库（Framework 自动识别为 Next.js，无需额外配置）。
3. 绑定正式域名后，在 Vercel → Settings → Environment Variables 添加
   `NEXT_PUBLIC_SITE_URL=https://你的域名`，然后 Redeploy（用于 canonical / sitemap / Open Graph）。

## 添加英文版（未来）

1. `src/i18n/config.ts` 的 `locales` 加入 `"en"`。
2. 新建 `src/content/en/home.ts`、`src/content/en/insights.ts`（结构与 zh 相同）。
3. 在 `src/content/index.ts` 注册 `en`。
4. 新增 `src/app/en/` 路由，复用同一套组件。
