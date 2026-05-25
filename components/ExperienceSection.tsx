'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const timeline = [
  {
    company: 'Juspay Technologies Pvt Ltd',
    title: 'HR Admin Associate (Consultant)',
    period: '2024 – Present',
    type: 'Fintech · Enterprise',
    color: 'cyan',
    impact: '1000+ employees coordinated',
    bullets: [
      'Coordinated operational workflows for 1000+ employees across departments',
      'Maintained 100% data accuracy across HRMS systems with zero discrepancies',
      'Reduced onboarding process delays by 20% through workflow redesign',
      'Built operational dashboards for real-time workforce reporting',
      'Managed cross-functional coordination between HR, IT, and Facilities',
      'Standardized process documentation and SOPs for scalable operations',
      'Validated payroll data and ensured compliance with reporting standards',
    ],
  },
  {
    company: 'Dream Aluminium Interior',
    title: 'HR Executive',
    period: '2023 – 2024',
    type: 'Startup · Operations',
    color: 'violet',
    impact: '50% faster onboarding process',
    bullets: [
      'Built operational processes and tracking systems from the ground up',
      'Redesigned onboarding workflows, reducing delays by 50%',
      'Managed end-to-end recruitment coordination and candidate tracking',
      'Designed attendance and performance monitoring systems',
      'Coordinated payroll processing and operational reporting',
    ],
  },
  {
    company: 'Saphire Motors Pvt Ltd',
    title: 'HR Executive',
    period: '2022 – 2023',
    type: 'Automotive · Operations',
    color: 'emerald',
    impact: 'Full statutory compliance',
    bullets: [
      'Managed full recruitment lifecycle from sourcing through onboarding',
      'Maintained employee records and system data with high accuracy',
      'Ensured PF/ESI statutory compliance and audit-ready documentation',
      'Optimized hiring coordination for faster time-to-fill',
    ],
  },
  {
    company: 'Varun Motors Pvt Ltd',
    title: 'HR Recruiter (Contract)',
    period: '2021 – 2022',
    type: 'Automotive · Coordination',
    color: 'blue',
    impact: 'Candidate pipeline built',
    bullets: [
      'Executed full-cycle recruitment coordination across multiple roles',
      'Built and maintained structured candidate pipeline tracking',
      'Coordinated interview scheduling and hiring logistics',
    ],
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; bar: string }> = {
  cyan:    { dot: 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]',    border: 'border-cyan-400/20',    badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',       bar: 'from-cyan-400/50'    },
  violet:  { dot: 'bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.7)]', border: 'border-violet-400/20',  badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20', bar: 'from-violet-400/50'  },
  emerald: { dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]', border: 'border-emerald-400/20', badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20', bar: 'from-emerald-400/50' },
  blue:    { dot: 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]',    border: 'border-blue-400/20',    badge: 'bg-blue-400/10 text-blue-300 border-blue-400/20',       bar: 'from-blue-400/50'    },
};

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-5xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Experience</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Workflow coordination &<br />
            <span className="grad-cyan">operational systems experience</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            1.7+ years of process management, workflow coordination, and operational reporting across fintech, automotive, and startup environments.
          </p>
        </div>

        <div className="relative reveal reveal-delay-1">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/25 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const c = colorMap[item.color];
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative pl-16"
                >
                  <div className={`absolute left-4 top-6 h-4 w-4 rounded-full ${c.dot} -translate-x-1/2`} />

                  <div className={`glass rounded-4xl border ${c.border} p-6 transition-all duration-300 group relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.bar} to-transparent`} />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="h-4 w-4 text-slate-500" />
                          <p className="text-xs text-slate-500 font-mono">{item.company}</p>
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 flex-shrink-0">
                        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono ${c.badge}`}>
                          <Calendar className="h-3 w-3" />
                          {item.period}
                        </span>
                        <span className={`rounded-full border px-3 py-1 text-xs font-mono ${c.badge}`}>
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-2xl bg-black/25 border border-white/5 px-3 py-1.5">
                      <span className="text-xs text-slate-500 font-mono">Key Impact:</span>
                      <span className="text-xs font-bold text-white font-mono">{item.impact}</span>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-xs text-slate-300">
                          <ChevronRight className="h-3.5 w-3.5 text-cyan-400/60 flex-shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
