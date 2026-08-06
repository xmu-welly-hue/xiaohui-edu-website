'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const GRADES = [
  {
    period: '八年级上',
    tag: '声光热 · 入门',
    topics: ['声现象', '光现象', '透镜及其应用', '物态变化'],
    note: '物理启蒙阶段，建立物理思维与答题规范',
  },
  {
    period: '八年级下',
    tag: '力学 · 核心',
    topics: ['质量与密度', '运动与力', '压强', '浮力'],
    note: '力学重难点集中区，承上启下关键',
  },
  {
    period: '九年级上',
    tag: '电学 · 起步',
    topics: ['内能与热机', '电路基础', '欧姆定律'],
    note: '电路基础决定电学高度，必须扎实',
  },
  {
    period: '九年级下',
    tag: '电学 · 进阶',
    topics: ['电功率', '家庭电路', '电与磁'],
    note: '中考冲刺阶段，综合题型集中训练',
  },
];

export function PhysicsCurriculum() {
  const ref = useSectionReveal();

  return (
    <section id="physics" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg-card" />

      {/* Floating physics symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {['⚡', 'Δ', 'ρ', 'F', 'V', 'm'].map((sym, i) => (
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
              Physics Curriculum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              🔬 物理课程体系
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              沪教版物理 · 八年级至九年级 · 同步中考考纲
            </p>
          </div>

          {/* Grade cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GRADES.map((g) => (
              <div
                key={g.period}
                className="group p-7 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Period + tag */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-orange transition-colors">
                    {g.period}
                  </h3>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-brand-orange/10 text-brand-orange font-medium">
                    {g.tag}
                  </span>
                </div>

                {/* Topics */}
                <ul className="space-y-2.5 flex-1">
                  {g.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2.5 text-sm text-brand-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/40 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="mt-5 pt-4 border-t border-brand-border text-xs text-brand-text-muted leading-relaxed">
                  {g.note}
                </p>
              </div>
            ))}
          </div>

          {/* Key points banner */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/[0.05] p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-brand-orange mb-1">
                    压强浮力
                  </div>
                  <p className="text-sm text-brand-text-secondary">
                    物理第一道坎，力学思维的试金石
                  </p>
                </div>
                <div className="hidden md:block w-px h-10 bg-brand-border" />
                <div>
                  <div className="text-2xl font-bold text-brand-orange mb-1">
                    电学 ≈ 35%
                  </div>
                  <p className="text-sm text-brand-text-secondary">
                    电学占中考约35%，得电学者得物理
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
