import { FloatingSymbols } from './FloatingSymbols';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg to-brand-bg-card" />

      {/* Floating math symbols */}
      <FloatingSymbols />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-orange/[0.03] rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-border bg-brand-bg-card/50 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-xs text-brand-text-secondary tracking-wide">
            沪教版 · 五四制 · 中考/模考/四校八大自招
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100">
          <span className="text-brand-text">小灰</span>
          <span className="text-brand-orange">教育</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-brand-text-secondary mb-4 animate-fade-in-up delay-200 leading-relaxed">
          上海初中数学 · 物理
        </p>
        <p className="text-base sm:text-lg text-brand-text-muted mb-6 animate-fade-in-up delay-300">
          厦大毕业 · 11年一线教学 · 1对1精准辅导
        </p>

        {/* Subject entries */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up delay-350">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-border bg-brand-bg-card/50 text-sm text-brand-text hover:border-brand-orange/50 hover:text-brand-orange transition-colors duration-200"
          >
            📐 数学课程
          </a>
          <a
            href="#physics"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-border bg-brand-bg-card/50 text-sm text-brand-text hover:border-brand-orange/50 hover:text-brand-orange transition-colors duration-200"
          >
            🔬 物理课程
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-orange text-brand-bg font-semibold rounded-xl hover:bg-brand-orange-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20"
          >
            了解课程定价
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 border border-brand-border text-brand-text rounded-xl hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200 hover:-translate-y-0.5"
          >
            立即报名
          </a>
        </div>

        {/* Scroll hint */}
        <p className="mt-8 text-sm text-brand-text-muted animate-fade-in-up delay-500">
          下滑可了解更多
        </p>
      </div>
    </section>
  );
}
