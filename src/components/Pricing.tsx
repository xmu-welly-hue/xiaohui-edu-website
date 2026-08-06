'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const CLASS_TYPES = [
  {
    name: '培优班',
    tagline: '基础夯实 · 校内同步',
    desc: '数学/物理校内同步辅导，回归课本夯实基础，目标校内85+，稳步建立学科自信。',
    highlight: false,
    href: null,
  },
  {
    name: '进阶班',
    tagline: '中档突破 · 思维提升',
    desc: '数学/物理中档题专项突破，提升解题思维，目标校内95+，从容应对区统考。',
    highlight: false,
    href: null,
  },
  {
    name: '冲刺班',
    tagline: '中考/模考实战 · 压轴拆解',
    desc: '围绕中考与模考实战训练，拆解压轴题解题套路，数学物理双科冲刺满分。',
    highlight: false,
    href: null,
  },
  {
    name: '超纲班',
    tagline: '高阶方法 · 降维打击',
    desc: '四校八大自招方向，普通学生也能学，常规解法vs高阶解法对比教学，从容应考。',
    highlight: true,
    href: 'https://xiaohui-advanced.netlify.app/',
  },
];

const PRICE_TABLE = [
  { grade: '六年级', price: '200', unit: '元/小时' },
  { grade: '七年级', price: '220', unit: '元/小时' },
  { grade: '八年级', price: '220', unit: '元/小时' },
  { grade: '九年级', price: '260', unit: '元/小时' },
  { grade: '超纲班', price: '300', unit: '元/小时' },
];

export function Pricing() {
  const ref = useSectionReveal();

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              班型与定价
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              4种班型精准匹配，每次2小时，每周1次
            </p>
          </div>

          {/* Class type cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CLASS_TYPES.map((ct) => {
              const content = (
                <div
                  className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
                    ct.highlight
                      ? 'border-brand-orange/50 bg-brand-orange/[0.05] shadow-lg shadow-brand-orange/5'
                      : 'border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30'
                  }`}
                >
                  {ct.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-orange text-brand-bg text-xs font-semibold rounded-full">
                      热门
                    </div>
                  )}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      ct.highlight ? 'text-brand-orange' : 'text-brand-text'
                    }`}
                  >
                    {ct.name}
                  </h3>
                  <p className="text-sm text-brand-orange/80 mb-4 font-medium">
                    {ct.tagline}
                  </p>
                  <p className="text-sm text-brand-text-secondary leading-relaxed flex-1">
                    {ct.desc}
                  </p>
                  {ct.href && (
                    <span className="mt-4 text-xs text-brand-text-muted underline underline-offset-2">
                      查看详情 →
                    </span>
                  )}
                </div>
              );

              if (ct.href) {
                return (
                  <a
                    key={ct.name}
                    href={ct.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                );
              }

              return <div key={ct.name}>{content}</div>;
            })}
          </div>

          {/* Price table */}
          <div className="rounded-2xl border border-brand-border bg-brand-bg-card/50 overflow-hidden">
            <div className="p-6 border-b border-brand-border">
              <h3 className="text-lg font-semibold text-brand-text">
                课时定价
              </h3>
              <p className="text-sm text-brand-text-secondary mt-1">
                每次课2小时 · 每周1次 · 具体费用按年级与班型确定
              </p>
            </div>
            <div className="divide-y divide-brand-border">
              {PRICE_TABLE.map((row) => (
                <div
                  key={row.grade}
                  className="flex items-center justify-between px-6 py-4 hover:bg-brand-orange/[0.03] transition-colors"
                >
                  <span className="text-brand-text font-medium">
                    {row.grade}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-brand-orange">
                      ¥{row.price}
                    </span>
                    <span className="text-sm text-brand-text-muted">
                      {row.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
