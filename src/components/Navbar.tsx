'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: '首页', href: '#hero' },
  { label: '老师', href: '#teacher' },
  { label: '特色', href: '#features' },
  { label: '定价', href: '#pricing' },
  { label: '学习伙伴', href: '#partner' },
  { label: '答疑服务', href: '#tutoring' },
  { label: '学情管理', href: '#student-system' },
  { label: 'FAQ', href: '#faq' },
  { label: '联系', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl font-bold text-brand-orange tracking-tight">
            小灰教育
          </span>
          <span className="hidden sm:inline text-xs text-brand-text-muted border-l border-brand-border pl-2">
            数学 · 物理 · 1对1
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-brand-text-secondary hover:text-brand-orange rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 text-sm font-medium bg-brand-orange text-brand-bg rounded-xl hover:bg-brand-orange-hover transition-all duration-200 hover:-translate-y-0.5"
          >
            预约试听
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="菜单"
        >
          <span
            className={`block w-5 h-0.5 bg-brand-text transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brand-text transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-brand-text transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 nav-glass ${
          mobileOpen ? 'max-h-96 border-b border-brand-border' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="px-3 py-2.5 text-sm text-brand-text-secondary hover:text-brand-orange rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 px-4 py-2.5 text-sm font-medium bg-brand-orange text-brand-bg rounded-xl text-center hover:bg-brand-orange-hover transition-colors"
          >
            预约试听
          </a>
        </div>
      </div>
    </nav>
  );
}
