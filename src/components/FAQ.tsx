'use client';

import { useState } from 'react';
import { useSectionReveal } from '@/hooks/use-section-reveal';

const FAQ_ITEMS = [
  {
    q: '班型怎么选？孩子适合哪个？',
    a: '小灰老师会根据学生的校内成绩、试卷分析和学习目标进行综合评估，推荐最匹配的班型。也可以先预约一次试听课，课后给出针对性建议。',
  },
  {
    q: '试听课怎么约？',
    a: '直接微信或电话联系小灰老师（18559689449），沟通学生情况后安排试听时间。试听课为1对1形式，时长约1小时。',
  },
  {
    q: '怎么收费？可以按次付费吗？',
    a: '按课时收费，每次2小时。支持按月付费，具体费用根据年级和班型确定，详情可咨询小灰老师。',
  },
  {
    q: '上课时间怎么安排？',
    a: '根据学生和小灰老师的空闲时间协商确定，通常安排在周末或工作日晚间。固定时间段上课，保证学习节奏的连贯性。',
  },
  {
    q: '超纲班适合什么样的学生？',
    a: '适合校内成绩稳定在90分以上、学有余力且目标是四校八大自招的学生。超纲班会涉及竞赛思维和高中前置知识，帮助学生建立降维打击的优势。',
  },
  {
    q: '跟着小灰老师能提多少分？',
    a: '提分幅度因人而异，取决于学生基础、学习态度和配合度。根据过往经验，认真配合的学生在一个学期内通常能提升15-30分（百分制）。',
  },
  {
    q: '课后有问题可以答疑吗？',
    a: '当然可以。小灰老师提供课后作业答疑服务，学生遇到难题可以拍照微信提问，小灰老师会及时回复讲解。',
  },
  {
    q: '现在才开始辅导，会不会太晚？',
    a: '不会。每个阶段都有对应的提分策略。即使是初三，只要方法对、效率高，依然有显著的提升空间。关键是立刻行动，越早开始越从容。',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useSectionReveal();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-card via-brand-bg to-brand-bg" />

      <div className="relative mx-auto max-w-[800px] px-6">
        <div ref={ref} className="section-reveal">
          {/* Section title */}
          <div className="text-center mb-16">
            <span className="text-brand-orange text-sm font-medium tracking-widest uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
              常见问题
            </h2>
            <p className="text-brand-text-secondary">
              家长和同学最关心的问题
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-brand-border bg-brand-bg-card/50 overflow-hidden transition-colors hover:border-brand-orange/20"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-brand-text font-medium pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-brand-border text-brand-text-muted transition-all duration-300 ${
                      openIndex === i
                        ? 'rotate-45 border-brand-orange text-brand-orange'
                        : ''
                    }`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-sm text-brand-text-secondary leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
