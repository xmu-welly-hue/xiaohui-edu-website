# AGENTS.md - 小灰教育品牌官网

## 项目概览
小灰教育品牌官网，深色数学风单页滚动网站。上海初中数学/物理1对1精准辅导。

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui + Tailwind CSS 4
- **Styling**: 自定义品牌色系（深色背景 #0f0f14 + 暖橙强调 #f0883e）

## 目录结构
```
src/
├── app/
│   ├── layout.tsx          # 全局布局，metadata 配置
│   ├── page.tsx            # 主页面，组装所有板块
│   └── globals.css         # 全局样式、品牌色变量、动画
├── components/
│   ├── Navbar.tsx           # 固定导航栏（毛玻璃效果）
│   ├── Hero.tsx             # Hero 首屏
│   ├── FloatingSymbols.tsx  # 浮动数学符号装饰
│   ├── Teacher.tsx          # 老师介绍板块
│   ├── Features.tsx         # 教学特色（5卡片）
│   ├── Pricing.tsx          # 班型与定价
│   ├── FAQ.tsx              # FAQ 手风琴
│   ├── Contact.tsx          # 联系板块 + 报名表单
│   ├── Footer.tsx           # 页脚
│   └── ui/                  # shadcn/ui 组件库
├── hooks/
│   └── use-section-reveal.ts # 滚动进入动画 Hook
└── lib/
    └── utils.ts             # 通用工具
```

## 开发命令
- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm start` - 启动生产服务器
- `pnpm lint` - ESLint 检查
- `pnpm ts-check` - TypeScript 类型检查

## 品牌色
- 背景主色：`#0f0f14` (brand-bg)
- 卡片底色：`#16161d` (brand-bg-card)
- 暖橙强调：`#f0883e` (brand-orange)
- 主文字：`#e8e8ed` (brand-text)
- 次级文字：`#8b8b9e` (brand-text-secondary)

## 页面板块
1. **Hero** - 品牌首屏 + 浮动数学符号
2. **Teacher** - 小灰老师介绍
3. **Features** - 5个教学特色卡片
4. **Pricing** - 4种班型 + 课时定价表
5. **FAQ** - 8个常见问题手风琴
6. **Contact** - 联系方式 + 预约表单
