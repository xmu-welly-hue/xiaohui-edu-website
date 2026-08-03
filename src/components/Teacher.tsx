'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const TAGS = ['沪教版', '中考', '一模二模', '四校八大自招'];

export function Teacher() {
  const ref = useSectionReveal();

  return (
    <section id="teacher" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              About Teacher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
              关于小灰老师
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Avatar / Brand mark */}
            <div className="relative flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-brand-bg-card border border-brand-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-brand-orange mb-2">
                    灰
                  </div>
                  <div className="text-xs text-brand-text-muted tracking-wider">
                    XIAO HUI
                  </div>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-brand-orange/30 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-brand-orange/30 rounded-bl-lg" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
                小灰老师
              </h3>
              <p className="text-lg text-brand-orange mb-6 font-medium">
                厦大毕业 · 11年一线教学
              </p>
              <p className="text-brand-text-secondary leading-relaxed mb-8 max-w-xl">
                深耕初中数学与物理教学11年，精通沪教版（五四制）教材体系与中考命题规律。
                累计辅导数百名学生，熟悉一模二模考点分布及四校八大自招选拔标准。
                擅长根据学生学情制定个性化提分方案，注重思维方法训练而非机械刷题。
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm rounded-full border border-brand-border text-brand-text-secondary bg-brand-bg-card/50 hover:border-brand-orange/30 hover:text-brand-orange transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
