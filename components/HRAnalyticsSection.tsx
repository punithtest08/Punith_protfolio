'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle, BarChart3, Activity, Database, FileCheck, Clock } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const kpis = [
  { label: 'Workforce Coverage', value: 100, unit: '%', color: '#22d3ee', icon: Users },
  { label: 'HRMS Accuracy', value: 100, unit: '%', color: '#10b981', icon: CheckCircle },
  { label: 'Onboarding Speed', value: 50, unit: '% faster', color: '#a78bfa', icon: TrendingUp },
  { label: 'Payroll Validation', value: 98, unit: '%', color: '#f59e0b', icon: FileCheck },
];

const pipelineItems = [
  { label: 'Recruitment Pipeline', value: 87, color: '#22d3ee' },
  { label: 'Attendance Monitoring', value: 100, color: '#10b981' },
  { label: 'Employee Lifecycle', value: 92, color: '#a78bfa' },
  { label: 'HRMS Health', value: 100, color: '#22d3ee' },
  { label: 'Compliance Score', value: 95, color: '#f59e0b' },
  { label: 'Payroll Accuracy', value: 100, color: '#10b981' },
];

const ALL_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// Accuracy values for each month index (0=Jan … 11=Dec). Current month is always 100.
const MONTHLY_ACCURACY = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

function getChartData() {
  const now          = new Date();
  const currentMonth = now.getMonth();
  const currentYear  = now.getFullYear();
  // All rendered months are 100% — every bar is HIGH
  const bars = MONTHLY_ACCURACY.slice(0, currentMonth + 1).map((val, idx) => ({
    value: val,
    month: ALL_MONTHS[idx],
    isCurrent: idx === currentMonth,
  }));
  return { bars, year: currentYear };
}

function CircularKPI({ value, unit, label, color, icon: Icon }: {
  value: number; unit: string; label: string; color: string; icon: React.ElementType;
}) {
  const [animated, setAnimated] = useState(0);
  const circumference = 2 * Math.PI * 36;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(value), 400);
    return () => clearTimeout(timer);
  }, [value]);

  const offset = circumference - (animated / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <svg width="88" height="88" className="-rotate-90">
          <circle cx="44" cy="44" r="36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <circle
            cx="44" cy="44" r="36"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 6px ${color}60)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-white">{value}{unit}</p>
        <p className="text-xs text-slate-500 font-mono mt-0.5 max-w-[80px] text-center leading-tight">{label}</p>
      </div>
    </div>
  );
}

function BarChart() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { bars, year } = getChartData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="flex items-end gap-1.5 h-32">
        {bars.map((bar, i) => (
          <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 relative">
            {/* "HIGH" label on every bar */}
            {visible && (
              <span
                className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold font-mono text-emerald-400 whitespace-nowrap"
                style={{ textShadow: '0 0 8px rgba(16,185,129,0.7)' }}
              >
                HIGH
              </span>
            )}
            <div
              className="w-full rounded-t-sm"
              style={{
                height: visible ? `${bar.value}%` : '0%',
                background: 'linear-gradient(180deg, #10b981, #22d3ee)',
                transition: `height 1s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`,
                opacity: 1,
                boxShadow: '0 0 14px rgba(16,185,129,0.5), 0 0 4px rgba(34,211,238,0.3)',
              }}
            />
            <span className="text-[9px] font-mono text-emerald-400 font-bold">
              {bar.month}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-right text-[10px] text-slate-600 font-mono">{year}</p>
    </>
  );
}

export default function HRAnalyticsSection() {
  const ref = useScrollReveal();

  return (
    <section id="analytics" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">HR Analytics Command Center</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Enterprise-grade workforce analytics<br />
            <span className="grad-emerald">& operational intelligence</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Left: Main dashboard */}
          <div className="space-y-5 reveal reveal-delay-1">
            {/* KPI circles */}
            <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Live KPI Dashboard</p>
                  <h3 className="text-lg font-bold text-white mt-1">Workforce Performance Metrics</h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <Activity className="h-3.5 w-3.5" />
                  Live
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {kpis.map((kpi) => (
                  <CircularKPI key={kpi.label} {...kpi} />
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">HRMS Accuracy Trend</p>
                  <h3 className="text-base font-bold text-white mt-1">12-Month Performance</h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-1">
                  {new Date().getFullYear()}
                </span>
              </div>
              <BarChart />
            </div>
          </div>

          {/* Right: Pipeline + metrics */}
          <div className="space-y-5 reveal reveal-delay-2">
            {/* Pipeline */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">HR Pipeline Health</p>
              <div className="space-y-4">
                {pipelineItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-400 font-mono">{item.label}</span>
                      <span className="font-bold" style={{ color: item.color }}>{item.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`, boxShadow: `0 0 8px ${item.color}40` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Database, label: 'HRMS Systems', value: 'Managed', color: 'text-cyan-400' },
                { icon: BarChart3, label: 'Dashboards', value: '10+ Built', color: 'text-violet-400' },
                { icon: Clock, label: 'Onboarding', value: '50% faster', color: 'text-emerald-400' },
                { icon: CheckCircle, label: 'Compliance', value: 'PF/ESI/A+', color: 'text-amber-400' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass rounded-3xl border border-white/7 p-4">
                    <Icon className={`h-4 w-4 ${s.color} mb-2`} />
                    <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{s.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
