'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/useScrollReveal';

const skillGroups = [
  {
    label: 'People Operations',
    color: '#22d3ee',
    skills: [
      'HR Operations',
      'Employee Lifecycle Management',
      'Workforce Planning',
      'Employee Experience',
      'HR Compliance',
    ],
  },
  {
    label: 'Analytics & Reporting',
    color: '#a78bfa',
    skills: [
      'HR Analytics',
      'Workforce Reporting',
      'Dashboard Development',
      'KPI Tracking',
      'Data Visualization',
    ],
  },
  {
    label: 'Process Excellence',
    color: '#10b981',
    skills: [
      'Process Improvement',
      'Workflow Optimization',
      'UAT Testing',
      'Process Validation',
      'Documentation',
    ],
  },
  {
    label: 'Technology',
    color: '#f59e0b',
    skills: [
      'Google Sheets',
      'Advanced Excel',
      'Google Apps Script',
      'JavaScript',
      'Node.js',
      'APIs',
      'HRMS / HRIS',
    ],
  },
  {
    label: 'Business Skills',
    color: '#3b82f6',
    skills: [
      'Stakeholder Management',
      'Cross-functional Collaboration',
      'Vendor Management',
      'Project Coordination',
      'Communication',
    ],
  },
];

const hrProficiency = [
  { name: 'HR Operations',              level: 95 },
  { name: 'Employee Lifecycle Mgmt',    level: 92 },
  { name: 'HRMS / HRIS',                level: 90 },
  { name: 'Payroll Coordination',       level: 88 },
  { name: 'Workforce Analytics',        level: 85 },
  { name: 'Process Optimization',       level: 87 },
  { name: 'Compliance Management',      level: 90 },
  { name: 'Dashboard Reporting',        level: 83 },
];

const techProficiency = [
  { name: 'Google Sheets / Excel',      level: 92 },
  { name: 'HR Analytics & Reporting',   level: 88 },
  { name: 'Process Validation / UAT',   level: 85 },
  { name: 'JavaScript / Node.js',       level: 75 },
  { name: 'HRMS Systems',               level: 90 },
  { name: 'Workflow Automation',        level: 80 },
  { name: 'Dashboard Development',      level: 82 },
  { name: 'Documentation',              level: 95 },
];

const techStack = [
  { name: 'Google Sheets',  color: '#34a853', bg: 'rgba(52,168,83,0.1)',    border: 'rgba(52,168,83,0.2)'    },
  { name: 'Advanced Excel', color: '#217346', bg: 'rgba(33,115,70,0.1)',    border: 'rgba(33,115,70,0.2)'    },
  { name: 'JavaScript',     color: '#f7df1e', bg: 'rgba(247,223,30,0.1)',   border: 'rgba(247,223,30,0.2)'   },
  { name: 'Node.js',        color: '#68a063', bg: 'rgba(104,160,99,0.1)',   border: 'rgba(104,160,99,0.2)'   },
  { name: 'React',          color: '#61dafb', bg: 'rgba(97,218,251,0.1)',   border: 'rgba(97,218,251,0.2)'   },
  { name: 'Google Apps Script', color: '#4285f4', bg: 'rgba(66,133,244,0.1)', border: 'rgba(66,133,244,0.2)' },
  { name: 'REST APIs',      color: '#22d3ee', bg: 'rgba(34,211,238,0.1)',   border: 'rgba(34,211,238,0.2)'   },
  { name: 'PostgreSQL',     color: '#336791', bg: 'rgba(51,103,145,0.1)',   border: 'rgba(51,103,145,0.2)'   },
  { name: 'MongoDB',        color: '#47a248', bg: 'rgba(71,162,72,0.1)',    border: 'rgba(71,162,72,0.2)'    },
  { name: 'Git & GitHub',   color: '#f05032', bg: 'rgba(240,80,50,0.1)',    border: 'rgba(240,80,50,0.2)'    },
  { name: 'HRMS / HRIS',   color: '#a78bfa', bg: 'rgba(167,139,250,0.1)',  border: 'rgba(167,139,250,0.2)'  },
  { name: 'Data Viz',       color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',   border: 'rgba(245,158,11,0.2)'   },
];

const softSkills = [
  'Stakeholder Management',
  'Cross-team Collaboration',
  'Process Ownership',
  'Analytical Mindset',
  'Attention to Detail',
  'Systems Thinking',
  'Documentation',
  'Continuous Improvement',
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="text-slate-300 font-mono">{name}</span>
        <span className="text-cyan-400 font-mono font-semibold">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #22d3ee, #7c3aed)',
            boxShadow: level >= 90 ? '0 0 8px rgba(34,211,238,0.35)' : 'none',
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Skills</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Comprehensive skill set across<br />
            <span className="grad-violet">HR operations & people analytics</span>
          </h2>
        </div>

        {/* Skill group overview */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {skillGroups.map((cat) => (
            <div key={cat.label} className="glass rounded-3xl border border-white/7 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">{cat.label}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs rounded-full px-2 py-0.5 font-mono"
                    style={{ background: `${cat.color}14`, color: cat.color, border: `1px solid ${cat.color}28` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel reveal reveal-delay-2">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">HR & People Operations Proficiency</p>
            <div className="space-y-3.5">
              {hrProficiency.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
              ))}
            </div>
          </div>

          <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel reveal reveal-delay-3">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">Analytics & Technology Proficiency</p>
            <div className="space-y-3.5">
              {techProficiency.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack + soft skills */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel reveal reveal-delay-2">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Tech Stack & Tools</p>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ scale: 1.07, y: -3 }}
                  className="skill-pill rounded-full border px-3.5 py-1.5 text-sm font-mono font-medium cursor-default"
                  style={{ color: tech.color, background: tech.bg, borderColor: tech.border }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel reveal reveal-delay-3">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Professional Strengths</p>
            <div className="grid grid-cols-1 gap-2">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 rounded-2xl bg-black/20 border border-white/5 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                  <span className="text-xs text-slate-300 font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
