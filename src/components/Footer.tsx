export function Footer() {
  return (
    <footer className="border-t border-brand-border py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-brand-orange">
              小灰教育
            </span>
            <span className="text-xs text-brand-text-muted">
              上海初中数学 · 物理 · 1对1精准辅导
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#teacher"
              className="text-sm text-brand-text-muted hover:text-brand-orange transition-colors"
            >
              关于老师
            </a>
            <a
              href="#pricing"
              className="text-sm text-brand-text-muted hover:text-brand-orange transition-colors"
            >
              课程定价
            </a>
            <a
              href="#faq"
              className="text-sm text-brand-text-muted hover:text-brand-orange transition-colors"
            >
              常见问题
            </a>
            <a
              href="#contact"
              className="text-sm text-brand-text-muted hover:text-brand-orange transition-colors"
            >
              联系我们
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-brand-text-muted">
            &copy; {new Date().getFullYear()} 小灰教育 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
