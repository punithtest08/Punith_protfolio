'use client';

import { motion } from 'framer-motion';
import { MapPin, Users, BarChart3, Network, Briefcase, Clock } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const stats = [
  { label: 'Years Experience',      value: '2+',    icon: Clock     },
  { label: 'Employees Supported',   value: '1000+', icon: Users     },
  { label: 'Analytics Dashboards',  value: '10+',   icon: BarChart3 },
  { label: 'Systems Built',         value: '5+',    icon: Network   },
];

const focuses = [
  {
    icon: Users,
    title: 'People Operations & HRBP',
    desc: 'Employee lifecycle management, HR business partnering, performance management support, talent reviews, succession planning, and employee relations across enterprise environments.',
    color: 'cyan',
  },
  {
    icon: BarChart3,
    title: 'People Analytics',
    desc: 'Workforce analytics dashboards, headcount analysis, diversity metrics, tenure reporting, organizational network analysis, and data-driven people decision support for leadership.',
    color: 'violet',
  },
  {
    icon: Network,
    title: 'Organizational Effectiveness',
    desc: 'Social network analysis, collaboration analytics, organizational design support, workforce intelligence, team effectiveness, and organizational insight generation.',
    color: 'emerald',
  },
  {
    icon: Briefcase,
    title: 'Workforce Planning & HR Technology',
    desc: 'Workforce planning initiatives, succession pipelines, HRMS/HRIS administration, automation tools, and scalable HR technology solutions for growing organizations.',
    color: 'blue',
  },
];

const colorMap: Record<string, { icon: string; border: string }> = {
  cyan:    { icon: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',          border: 'hover:border-cyan-400/25'    },
  violet:  { icon: 'bg-violet-400/10 border-violet-400/20 text-violet-400',    border: 'hover:border-violet-400/25'  },
  emerald: { icon: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400', border: 'hover:border-emerald-400/25' },
  blue:    { icon: 'bg-blue-400/10 border-blue-400/20 text-blue-400',          border: 'hover:border-blue-400/25'    },
};

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="px-6 lg:px-10 pb-24 pt-8">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">About</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight">
            Building Better Organizations<br />
            <span className="grad-cyan">Through People, Data & Strategy</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          <div className="space-y-5 reveal reveal-delay-1">
            <div className="glass rounded-4xl border border-white/7 p-8 shadow-panel">

              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/20 flex items-center justify-center">
                  <span className="text-2xl font-bold grad-cyan">PS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Punith S</h3>
                  <p className="text-sm text-slate-400 mt-0.5">People Operations · HR Business Partner · People Analytics</p>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm">
                People Operations professional with experience across HR Operations, HR Business Partnering, workforce planning, organizational effectiveness, employee lifecycle management, and people analytics.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mt-3">
                My work focuses on helping organizations create scalable people processes, improve employee experiences, strengthen workforce effectiveness, and enable data-driven people decisions. Currently supporting HR Operations and strategic people initiatives for a workforce of 1000+ employees while collaborating with business leaders, managers, HR teams, IT, Workplace Operations, Facilities, and Security teams.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mt-3">
                Particularly passionate about People Analytics, Organizational Effectiveness, Workforce Intelligence, and Social Network Analysis — leveraging technology to solve complex people challenges and create measurable business impact.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="rounded-2xl bg-black/30 border border-white/5 p-4">
                      <Icon className="h-4 w-4 text-cyan-400 mb-2" />
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-3xl border border-white/7 p-5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</p>
                <p className="mt-2 text-base font-semibold text-white">Bengaluru, India</p>
                <p className="text-xs text-slate-500 mt-1">Open to remote & hybrid</p>
              </div>
              <div className="glass rounded-3xl border border-emerald-400/15 p-5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Status</p>
                <p className="mt-2 text-base font-semibold text-emerald-400 status-online">Available</p>
                <p className="text-xs text-slate-500 mt-1">Open to new roles</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 reveal reveal-delay-2">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Expertise Areas</p>

            {focuses.map((item, i) => {
              const Icon = item.icon;
              const c    = colorMap[item.color];
              return (
                <motion.div key={item.title}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`glass rounded-3xl border border-white/7 p-5 transition-all duration-300 group ${c.border}`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-xl border flex items-center justify-center transition ${c.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="glass rounded-3xl border border-violet-400/15 p-5">
              <p className="text-xs font-mono text-violet-400/70 uppercase tracking-widest mb-2">Brand Statement</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Helping organizations improve <span className="text-cyan-400">employee experience</span>, <span className="text-violet-400">workforce effectiveness</span>, and <span className="text-emerald-400">business outcomes</span> through people operations, workforce planning, organizational insights, and data-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
