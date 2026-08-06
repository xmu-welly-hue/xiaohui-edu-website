'use client';

import { useState } from 'react';
import { useSectionReveal } from '@/hooks/use-section-reveal';

const GRADE_OPTIONS = [
  { value: '六年级', label: '六年级' },
  { value: '七年级', label: '七年级' },
  { value: '八年级', label: '八年级' },
  { value: '九年级', label: '九年级' },
];

const SUBJECT_OPTIONS = [
  { value: '数学', label: '数学' },
  { value: '物理', label: '物理' },
  { value: '数学+物理', label: '数学+物理' },
];

const SOURCE_OPTIONS = [
  { value: '官网', label: '官网' },
  { value: '微信', label: '微信' },
  { value: '朋友推荐', label: '朋友推荐' },
  { value: '其他', label: '其他' },
];

const CLASS_TYPE_OPTIONS = [
  { value: '培优班', label: '培优班 - 基础薄弱·夯实校内' },
  { value: '进阶班', label: '进阶班 - 中等提分·突破瓶颈' },
  { value: '冲刺班', label: '冲刺班 - 冲刺满分·压轴突破' },
  { value: '超纲班', label: '超纲班 - 高阶方法·降维打击' },
];

interface FormData {
  name: string;
  phone: string;
  grade: string;
  subject: string;
  source: string;
  classType: string;
  remark: string;
}

export function Contact() {
  const ref = useSectionReveal();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    grade: '',
    subject: '',
    source: '官网',
    classType: '',
    remark: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/feishu/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitResult({ success: true, message: data.message || '报名信息已提交，小灰老师会尽快与您联系' });
        setFormData({ name: '', phone: '', grade: '', subject: '', source: '官网', classType: '', remark: '' });
      } else {
        setSubmitResult({ success: false, message: data.error || '提交失败，请稍后重试' });
      }
    } catch {
      setSubmitResult({ success: false, message: '网络错误，请稍后重试或直接联系小灰老师' });
    } finally {
      setSubmitting(false);
    }
  };

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

            {/* Registration form */}
            <div className="p-8 rounded-2xl border border-brand-border bg-brand-bg-card/50">
              <h3 className="text-xl font-semibold text-brand-text mb-6">
                预约报名
              </h3>

              {submitResult ? (
                <div className={`p-6 rounded-xl text-center ${
                  submitResult.success 
                    ? 'bg-green-500/10 border border-green-500/30' 
                    : 'bg-red-500/10 border border-red-500/30'
                }`}>
                  <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    submitResult.success ? 'bg-green-500/20' : 'bg-red-500/20'
                  }`}>
                    {submitResult.success ? (
                      <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-lg font-medium mb-2 ${submitResult.success ? 'text-green-400' : 'text-red-400'}`}>
                    {submitResult.success ? '提交成功' : '提交失败'}
                  </p>
                  <p className="text-sm text-brand-text-secondary mb-5">
                    {submitResult.message}
                  </p>
                  {submitResult.success && (
                    <button
                      onClick={() => setSubmitResult(null)}
                      className="text-sm text-brand-orange hover:underline"
                    >
                      继续提交
                    </button>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        学生姓名 <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="请输入学生姓名"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        联系电话 <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="请输入手机号码"
                        required
                        pattern="^1[3-9]\d{9}$"
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        当前年级 <span className="text-brand-orange">*</span>
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => handleInputChange('grade', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-orange/50 transition-colors appearance-none"
                      >
                        <option value="">请选择年级</option>
                        {GRADE_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        辅导科目
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-orange/50 transition-colors appearance-none"
                      >
                        <option value="">请选择科目</option>
                        {SUBJECT_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        意向班型
                      </label>
                      <select
                        value={formData.classType}
                        onChange={(e) => handleInputChange('classType', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-orange/50 transition-colors appearance-none"
                      >
                        <option value="">请选择班型</option>
                        {CLASS_TYPE_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-brand-text-secondary mb-1.5">
                        信息来源
                      </label>
                      <select
                        value={formData.source}
                        onChange={(e) => handleInputChange('source', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text focus:outline-none focus:border-brand-orange/50 transition-colors appearance-none"
                      >
                        {SOURCE_OPTIONS.map(opt => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-brand-text-secondary mb-1.5">
                      备注信息
                    </label>
                    <textarea
                      value={formData.remark}
                      onChange={(e) => handleInputChange('remark', e.target.value)}
                      placeholder="请描述学生目前学习情况与目标（选填）"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-brand-orange text-brand-bg font-semibold rounded-xl hover:bg-brand-orange-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? '提交中...' : '提交预约'}
                  </button>

                  <p className="text-xs text-brand-text-muted text-center pt-2">
                    信息仅用于课程咨询，不会外泄
                  </p>
                </form>
              )}
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-brand-orange font-medium">
            物理班同步招生中
          </p>
        </div>
      </div>
    </section>
  );
}
