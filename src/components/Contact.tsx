'use client';

import { useSectionReveal } from '@/hooks/use-section-reveal';

export function Contact() {
  const ref = useSectionReveal();

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              联系小灰老师
            </h2>
            <p className="text-brand-text-secondary">
              预约试听或咨询课程详情，随时欢迎联系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              {/* Phone / WeChat */}
              <div className="p-6 rounded-2xl border border-brand-border bg-brand-bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-brand-text font-semibold mb-1">
                      电话 / 微信
                    </h4>
                    <p className="text-brand-orange text-lg font-medium">
                      18559689449
                    </p>
                    <p className="text-xs text-brand-text-muted mt-1">
                      微信同号，添加请备注「学生年级+姓名」
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl border border-brand-border bg-brand-bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-brand-text font-semibold mb-1">
                      上课地点
                    </h4>
                    <p className="text-brand-text-secondary">
                      上海临港 · 滴水湖
                    </p>
                    <p className="text-xs text-brand-text-muted mt-1">
                      具体地址咨询时告知
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl border border-brand-border bg-brand-bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-brand-orange"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-brand-text font-semibold mb-1">
                      可约时间
                    </h4>
                    <p className="text-brand-text-secondary">
                      周末全天 / 工作日晚间
                    </p>
                    <p className="text-xs text-brand-text-muted mt-1">
                      具体时间协商安排
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration form placeholder */}
            <div className="p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50">
              <h3 className="text-xl font-semibold text-brand-text mb-6">
                预约报名
              </h3>
              <form
                action="https://bcncx6oe0mh4.feishu.cn/share/base/shrcnDxfxTZp8dM9BxYmQ9B6VLb"
                method="get"
                target="_blank"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm text-brand-text-secondary mb-1.5">
                    学生姓名
                  </label>
                  <input
                    type="text"
                    placeholder="请输入学生姓名"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-text-secondary mb-1.5">
                    当前年级
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-orange/50 transition-colors appearance-none">
                    <option value="">请选择年级</option>
                    <option value="6">六年级</option>
                    <option value="7">七年级</option>
                    <option value="8">八年级</option>
                    <option value="9">九年级</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-brand-text-secondary mb-1.5">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    placeholder="请输入联系电话"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-text-secondary mb-1.5">
                    备注信息
                  </label>
                  <textarea
                    placeholder="请描述学生目前学习情况与目标（选填）"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-orange text-brand-bg font-semibold rounded-xl hover:bg-brand-orange-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20"
                >
                  提交预约
                </button>
                <p className="text-xs text-brand-text-muted text-center">
                  提交后小灰老师会尽快与您联系确认
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
