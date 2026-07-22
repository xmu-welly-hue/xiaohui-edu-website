import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '小灰教育 | 上海初中数学物理 · 1对1精准辅导',
  description:
    '小灰老师，厦大毕业，11年一线教学经验。专注沪教版（五四制）初中数学/物理1对1辅导，覆盖中考、模考、四校八大自招。',
  keywords: [
    '小灰教育',
    '上海初中数学',
    '初中物理辅导',
    '1对1辅导',
    '沪教版',
    '中考数学',
    '四校八大',
    '自招辅导',
    '临港滴水湖',
  ],
  openGraph: {
    title: '小灰教育 | 上海初中数学物理 · 1对1精准辅导',
    description:
      '厦大毕业 · 11年一线教学 · 沪教版独立题库 · 分层定制教学',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
