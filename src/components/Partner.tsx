'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

export function Partner() {
  const ref = useSectionReveal();

  return (
    <section id="partner" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg-card" />

      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {['∫', 'π', '∑', '√', 'Δ', '∞'].map((sym, i) => (
          <span
            key={sym}
            className="absolute text-brand-orange/[0.06] font-serif"
            style={{
              fontSize: `${28 + i * 8}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${6 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {sym}
          </span>
        ))}
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              Referral
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              学习伙伴计划
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              推荐好友一起进步，双方均可获得专属福利
            </p>
          </div>

          {/* Dual cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Left card - Referrer */}
            <div className="group relative p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                推荐人福利
              </div>

              {/* Icon */}
              <div className="text-4xl mb-5 w-16 h-16 flex items-center justify-center rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/15 transition-colors">
                🎁
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brand-text mb-4 group-hover:text-brand-orange transition-colors">
                每推荐 1 人
              </h3>

              {/* Reward */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-orange text-2xl font-bold">→</span>
                <span className="text-brand-text text-lg font-medium">
                  送 1 节专属定制专题课
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                推荐好友报名成功，即可获得一节由小灰老师精心准备的专属定制专题课，针对你的薄弱知识点进行强化突破。
              </p>
            </div>

            {/* Right card - Referred */}
            <div className="group relative p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                新学员福利
              </div>

              {/* Icon */}
              <div className="text-4xl mb-5 w-16 h-16 flex items-center justify-center rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/15 transition-colors">
                🎓
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-brand-text mb-4 group-hover:text-brand-orange transition-colors">
                新学员专属
              </h3>

              {/* Rewards */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-brand-orange text-2xl font-bold">→</span>
                  <span className="text-brand-text text-lg font-medium">
                    送 60 分钟学情诊断课
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-orange text-2xl font-bold">→</span>
                  <span className="text-brand-text text-lg font-medium">
                    送诊断报告 + 学习规划书
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                通过推荐加入的新学员，可免费获得一次完整的学情诊断课程，并由小灰老师出具详细的诊断报告与个性化学习规划书。
              </p>
            </div>
          </div>

          {/* Bottom notes */}
          <div className="mt-12 text-center space-y-2">
            <p className="text-sm text-brand-text-secondary">
              📌 推荐满 <span className="text-brand-orange font-medium">3 人</span>，排课优先权升级
            </p>
            <p className="text-xs text-brand-text-secondary/70">
              * 推荐成功标准：被推荐学员完成首次付费并正式排课
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
