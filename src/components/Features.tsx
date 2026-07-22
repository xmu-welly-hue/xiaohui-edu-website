'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const FEATURES = [
  {
    icon: '📚',
    title: '沪教版独立题库',
    desc: '针对沪教版（五四制）教材，精心整理历年真题、模考卷与自招题，按知识点分层归类，精准匹配考纲。',
  },
  {
    icon: '🎯',
    title: '分层定制教学',
    desc: '培优/进阶/冲刺/超纲4种班型，根据学生当前水平与目标精准匹配，不做无效重复，每一分钟都有价值。',
  },
  {
    icon: '👤',
    title: '1对1个性化辅导',
    desc: '全程1对1授课，根据学生学情实时调整节奏和难度，薄弱点重点突破，优势项持续强化。',
  },
  {
    icon: '💬',
    title: '作业当日答疑',
    desc: '校内作业遇到难题？当日拍照提问，小灰老师当天解答，不让问题过夜，知识盲区及时清零。',
  },
  {
    icon: '📝',
    title: '每日一题打卡',
    desc: '每天推送一道精选好题，保持手感与思维活跃度，积少成多，量变引发质变。',
  },
];

export function Features() {
  const ref = useSectionReveal();

  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg-card" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              教学特色
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              11年教学经验沉淀，形成系统化的提分方法论
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`group p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1 ${
                  i >= 3 ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Icon */}
                <div className="text-3xl mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/15 transition-colors">
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brand-text mb-3 group-hover:text-brand-orange transition-colors">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
