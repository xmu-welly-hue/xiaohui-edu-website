'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const CAPABILITIES = [
  {
    icon: '🗂️',
    title: '学生档案 · 一人一档',
    desc: '从报名起每个孩子建专属档案，上课记录、作业反馈、阶段测评全部沉淀，学情翻档案一目了然。',
  },
  {
    icon: '💳',
    title: '课时账本 · 透明可查',
    desc: '每次课自动记入课时账本，剩余课时、未结清课时费家长随时可查，费用结算明明白白。',
  },
  {
    icon: '📝',
    title: '错题本 · 错题不白错',
    desc: '孩子做错的题全部进错题本按知识点归类，阶段复习对着错题本查漏补缺，错过的题不再错第二遍。',
  },
];

export function StudentSystem() {
  const ref = useSectionReveal();

  return (
    <section id="student-system" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg-card" />

      {/* Floating math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {['√', '∑', 'π', 'Δ', '∞', '∫'].map((sym, i) => (
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
              Student System
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              📊 学情数据化管理
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              每个孩子的学习轨迹，都看得见
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="group p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="text-3xl mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/15 transition-colors">
                  {c.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-brand-text mb-3 group-hover:text-brand-orange transition-colors">
                  {c.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-text-secondary leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Entry button */}
          <div className="mt-12 text-center">
            <a
              href="https://xiaohui-student.coze.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-brand-bg font-semibold rounded-xl hover:bg-brand-orange-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20"
            >
              查看学生系统
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-6 text-xs text-brand-text-muted">
              小灰教育专属学生管理系统 · 课时透明 · 学情留痕 · 错题沉淀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
