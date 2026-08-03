'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

const FEATURES = [
  {
    icon: '🔗',
    title: '免注册即看',
    desc: '不用下载 App、不用注册账号，专属链接 + 验证码随时查看。',
  },
  {
    icon: '📖',
    title: '上课留痕',
    desc: '每节课的上课内容、课堂表现都有记录，孩子的成长轨迹随时回看。',
  },
  {
    icon: '📝',
    title: '作业进度',
    desc: '老师布置了什么作业、完成没有，一目了然。',
  },
  {
    icon: '📈',
    title: '成绩趋势',
    desc: '历次考试成绩完整记录，进步退步一眼看清。',
  },
  {
    icon: '📸',
    title: '错题沉淀',
    desc: '孩子错题拍照归档、按知识点分类，复习时随时翻看。',
  },
  {
    icon: '🔒',
    title: '隐私安心',
    desc: '每个孩子独立验证码，家长只能看到自家孩子，只读模式不可修改。',
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
              📱 家长专属 · 孩子学情随时看
            </h2>
            <p className="text-brand-text-secondary max-w-lg mx-auto">
              免注册、扫码即看，孩子的学习进展透明可见
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50 hover:border-brand-orange/30 hover:bg-brand-bg-card transition-all duration-300 hover:-translate-y-1"
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
              小灰教育家长端 · 免注册 · 只读 · 专属验证码 · 隐私安心
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
