'use client';

import { motion } from 'framer-motion';
import { Network, Users, BarChart3, GitBranch, Activity, Layers, TrendingUp, Eye } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const capabilities = [
  { icon: Network,    title: 'Social Network Analysis',       desc: 'Mapping informal networks, influence patterns, and collaboration structures within organizations.',         color: 'cyan'    },
  { icon: GitBranch,  title: 'Organizational Network Mapping', desc: 'Visualizing how teams connect, communicate, and collaborate beyond the formal hierarchy.',                color: 'violet'  },
  { icon: Users,      title: 'Collaboration Analytics',        desc: 'Understanding cross-functional collaboration patterns to improve organizational effectiveness.',            color: 'emerald' },
  { icon: Activity,   title: 'Team Effectiveness',             desc: 'Analyzing team dynamics, cohesion metrics, and performance enablers at the team level.',                   color: 'blue'    },
  { icon: Eye,        title: 'Employee Connectivity',          desc: 'Tracking how employees connect across departments, functions, and geographies.',                            color: 'cyan'    },
  { icon: BarChart3,  title: 'Workforce Intelligence',         desc: 'Combining quantitative workforce data with network insights to create a holistic organizational picture.',  color: 'violet'  },
  { icon: Layers,     title: 'Organizational Insights',        desc: 'Translating complex organizational data into actionable leadership insights and strategic recommendations.', color: 'emerald' },
  { icon: TrendingUp, title: 'Org Design Support',             desc: 'Supporting organizational structure discussions with data on spans, layers, and collaboration networks.',   color: 'blue'    },
];

const colorMap: Record<string, { icon: string; border: string }> = {
  cyan:    { icon: 'bg-cyan-400/10 border-cyan-400/20 text-cyan-400',          border: 'border-cyan-400/15 hover:border-cyan-400/35'    },
  violet:  { icon: 'bg-violet-400/10 border-violet-400/20 text-violet-400',    border: 'border-violet-400/15 hover:border-violet-400/35'  },
  emerald: { icon: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400', border: 'border-emerald-400/15 hover:border-emerald-400/35' },
  blue:    { icon: 'bg-blue-400/10 border-blue-400/20 text-blue-400',          border: 'border-blue-400/15 hover:border-blue-400/35'    },
};

export default function OrgEffectivenessSection() {
  const ref = useScrollReveal();

  return (
    <section id="org-effectiveness" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Organizational Effectiveness</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Understanding How Organizations<br />
            <span className="grad-cyan">Truly Operate</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            Passionate about analyzing employee interactions, collaboration networks, and workforce dynamics — going beyond reporting structures to understand how organizations truly function and how to make them more effective.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">

          {/* Left: capability grid */}
          <div className="reveal reveal-delay-1 grid gap-3 sm:grid-cols-2 content-start">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              const c    = colorMap[cap.color];
              return (
                <motion.div key={cap.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className={`glass rounded-3xl border ${c.border} p-5 transition-all duration-300 hover:-translate-y-1`}>
                  <div className={`h-9 w-9 rounded-xl border flex items-center justify-center mb-3 ${c.icon}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{cap.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: SNA visual + narrative */}
          <div className="reveal reveal-delay-2 space-y-5">

            {/* Network visualization card */}
            <div className="glass rounded-4xl border border-cyan-400/15 p-7 shadow-panel relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Social Network Analysis</p>

                {/* Abstract network nodes */}
                <div className="relative h-48 mb-6">
                  {[
                    { x: '50%', y: '20%', size: 'h-8 w-8', color: 'bg-cyan-400/80', label: 'Hub' },
                    { x: '25%', y: '50%', size: 'h-6 w-6', color: 'bg-violet-400/70', label: 'Bridge' },
                    { x: '75%', y: '45%', size: 'h-6 w-6', color: 'bg-emerald-400/70', label: 'Connector' },
                    { x: '15%', y: '80%', size: 'h-4 w-4', color: 'bg-blue-400/60', label: '' },
                    { x: '40%', y: '75%', size: 'h-5 w-5', color: 'bg-cyan-400/50', label: '' },
                    { x: '65%', y: '80%', size: 'h-4 w-4', color: 'bg-violet-400/50', label: '' },
                    { x: '85%', y: '25%', size: 'h-4 w-4', color: 'bg-emerald-400/50', label: '' },
                    { x: '30%', y: '25%', size: 'h-4 w-4', color: 'bg-blue-400/50', label: '' },
                  ].map((node, i) => (
                    <motion.div key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                      className={`absolute ${node.size} ${node.color} rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2`}
                      style={{ left: node.x, top: node.y, boxShadow: '0 0 12px currentColor' }}>
                      {node.label && <span className="text-[8px] font-bold text-white">{node.label}</span>}
                    </motion.div>
                  ))}
                  {/* Connection lines SVG */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    {[
                      ['50%','20%','25%','50%'],['50%','20%','75%','45%'],['50%','20%','30%','25%'],
                      ['50%','20%','85%','25%'],['25%','50%','15%','80%'],['25%','50%','40%','75%'],
                      ['75%','45%','65%','80%'],['75%','45%','85%','25%'],
                    ].map(([x1,y1,x2,y2], i) => (
                      <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(34,211,238,0.15)" strokeWidth="1"
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.05 }} />
                    ))}
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Hubs',      value: 'Key influencers', color: 'text-cyan-400'    },
                    { label: 'Bridges',   value: 'Cross-team links', color: 'text-violet-400'  },
                    { label: 'Clusters',  value: 'Team groups',      color: 'text-emerald-400' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-black/25 border border-white/5 p-3 text-center">
                      <p className={`text-xs font-bold font-mono ${item.color}`}>{item.label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why OE matters */}
            <div className="glass rounded-4xl border border-violet-400/15 p-6 shadow-panel">
              <p className="text-xs font-mono text-violet-400/70 uppercase tracking-widest mb-3">Why It Matters</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Formal org charts show <span className="text-white font-medium">reporting lines</span>. Social network analysis reveals <span className="text-cyan-400 font-medium">how work actually gets done</span> — who influences decisions, where collaboration breaks down, and how to design organizations that perform.
              </p>
            </div>

            {/* Impact metrics */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Collaboration Patterns',  value: 'Mapped',    color: 'text-cyan-400'    },
                { label: 'Influence Networks',       value: 'Analyzed',  color: 'text-violet-400'  },
                { label: 'Team Effectiveness',       value: 'Measured',  color: 'text-emerald-400' },
                { label: 'Org Insights',             value: 'Delivered', color: 'text-blue-400'    },
              ].map((s) => (
                <div key={s.label} className="glass rounded-3xl border border-white/7 p-4">
                  <p className={`text-base font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
