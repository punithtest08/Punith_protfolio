'use client';

import { motion } from 'framer-motion';
import {
  Users, Monitor, Building2, ShieldCheck, MapPin,
  BarChart3, TrendingUp, ClipboardList, Handshake, Globe,
} from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const teams = [
  {
    icon: Users,
    name: 'HR & People Teams',
    desc: 'Partnered on employee lifecycle, policy implementation, workforce planning, and people experience programs.',
    color: 'cyan',
  },
  {
    icon: Globe,
    name: 'Leadership & Executives',
    desc: 'Delivered workforce reports, headcount analysis, and operational intelligence directly to leadership.',
    color: 'violet',
  },
  {
    icon: Monitor,
    name: 'IT & Systems',
    desc: 'Coordinated HRMS integrations, system access management, onboarding tech setup, and IT operations readiness.',
    color: 'blue',
  },
  {
    icon: Building2,
    name: 'Facilities & Workplace',
    desc: 'Supported workplace planning, seating allocation, infrastructure readiness, and employee environment programs.',
    color: 'emerald',
  },
  {
    icon: ShieldCheck,
    name: 'Security & Compliance',
    desc: 'Managed access controls, visitor operations, compliance documentation, and statutory audit readiness.',
    color: 'amber',
  },
  {
    icon: Handshake,
    name: 'Business & Ops Teams',
    desc: 'Cross-functional coordination for workforce projects, operational reporting, and business process alignment.',
    color: 'cyan',
  },
];

const highlights = [
  { icon: MapPin,        label: 'Workforce Planning',       desc: 'Headcount forecasting and team structure coordination.'          },
  { icon: Building2,     label: 'Workplace Readiness',      desc: 'Facility planning, seating, and infrastructure operations.'      },
  { icon: Users,         label: 'Employee Experience',      desc: 'Onboarding quality, engagement, and lifecycle programs.'         },
  { icon: BarChart3,     label: 'Reporting & Analytics',    desc: 'Leadership dashboards, KPI tracking, and workforce insights.'     },
  { icon: TrendingUp,    label: 'Process Optimization',     desc: 'Workflow redesign, SOP documentation, and efficiency gains.'     },
  { icon: ClipboardList, label: 'Stakeholder Management',   desc: 'Cross-team alignment, communication, and project coordination.'  },
];

const colorMap: Record<string, { icon: string; border: string; glow: string }> = {
  cyan:    { icon: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',       border: 'hover:border-cyan-400/30',    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]'    },
  violet:  { icon: 'bg-violet-400/10 border-violet-400/20 text-violet-400', border: 'hover:border-violet-400/30',  glow: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.06)]'  },
  blue:    { icon: 'bg-blue-400/10 border-blue-400/20 text-blue-400',       border: 'hover:border-blue-400/30',    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]'    },
  emerald: { icon: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400', border: 'hover:border-emerald-400/30', glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]' },
  amber:   { icon: 'bg-amber-400/10 border-amber-400/20 text-amber-400',    border: 'hover:border-amber-400/30',   glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.06)]'   },
};

export default function LeadershipSection() {
  const ref = useScrollReveal();

  return (
    <section id="leadership" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Leadership Collaboration</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Cross-functional partnerships<br />
            <span className="grad-cyan">delivering workforce impact</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Worked with HR, Leadership, IT, Facilities, Security, Workplace, and Business teams to deliver employee experience and workplace initiatives at scale.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left: Team cards */}
          <div className="reveal reveal-delay-1">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Teams Collaborated With</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {teams.map((team, i) => {
                const Icon = team.icon;
                const c    = colorMap[team.color];
                return (
                  <motion.div
                    key={team.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`glass rounded-3xl border border-white/7 p-5 transition-all duration-300 ${c.border} ${c.glow}`}
                  >
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-3 ${c.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{team.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{team.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Key highlights */}
          <div className="reveal reveal-delay-2 space-y-4">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Key Contribution Areas</p>

            <div className="space-y-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="glass rounded-2xl border border-white/7 p-4 flex items-start gap-4 hover:border-white/12 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-cyan-400/8 border border-cyan-400/15 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Impact summary card */}
            <div className="glass rounded-3xl border border-violet-400/15 p-5 mt-4">
              <p className="text-xs font-mono text-violet-400/70 uppercase tracking-widest mb-3">Operational Impact</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '6+',   label: 'Teams'       },
                  { value: '1000+', label: 'Employees'  },
                  { value: '2+',   label: 'Years'       },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-black/25 border border-white/5 p-3 text-center">
                    <p className="text-xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
