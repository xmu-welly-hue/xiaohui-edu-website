'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const SERVICES = [
  {
    icon: '📝',
    title: '课后作业批改',
    desc: '每周作业拍照发我，详细批改 + 错题讲解，不放过任何一个知识漏洞。',
  },
  {
    icon: '💬',
    title: '日常答疑',
    desc: '学校不会的题随时问，小灰老师及时回复讲解，不让问题积压。',
  },
  {
    icon: '📅',
    title: '每日一题打卡',
    desc: '精选沪教版高频考点，每天 1 题精批 + 语音讲解，保持手感不断档。',
  },
  {
    icon: '📊',
    title: '阶段测评',
    desc: '每 6 次课一次阶段测评，量化评估进步情况，及时调整教学策略。',
  },
  {
    icon: '📋',
    title: '月度学情复盘',
    desc: '每月向家长汇报学习进展，透明可见，共同调整学习方案。',
  },
];

export function TutoringService() {
  const ref = useSectionReveal();

  return (
    <section id="tutoring" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg-card" />

      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {['÷', '×', '±', '≈', '∝', 'θ'].map((sym, i) => (
          <span
            key={sym}
            className="absolute text-brand-orange/[0.06] font-serif"
            style={{
              fontSize: `${26 + i * 7}px`,
              left: `${8 + i * 16}%`,
              top: `${15 + (i % 3) * 28}%`,
              animation: `float ${7 + i * 1.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
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
              Tutoring Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              📚 课后答疑服务
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              不止上课，更陪你解决每一道难题
            </p>
          </div>

          {/* Services grid - 3+2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`group p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1 ${
                  i >= 3 ? 'lg:col-start-auto' : ''
                }`}
              >
                {/* Icon */}
                <div className="text-3xl mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/15 transition-colors">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brand-text mb-3 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              本服务针对已报名学生，不另外收费
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
