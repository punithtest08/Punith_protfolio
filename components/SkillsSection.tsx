'use client';

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/lib/useScrollReveal';

// ── Category overview ──────────────────────────────────────────────────────────
const categories = [
  {
    label: 'QA & Testing',
    color: '#22d3ee',
    skills: ['QA Fundamentals', 'Process Validation', 'Workflow Testing', 'Bug Tracking', 'System Monitoring'],
  },
  {
    label: 'Programming & Automation',
    color: '#a78bfa',
    skills: ['JavaScript', 'Python (Basics)', 'HTML/CSS', 'APIs', 'Automation Concepts'],
  },
  {
    label: 'DevOps & Systems',
    color: '#10b981',
    skills: ['Git & GitHub', 'CI/CD Basics', 'Linux Basics', 'Deployment Basics', 'Monitoring Concepts'],
  },
  {
    label: 'HR & Operations',
    color: '#f59e0b',
    skills: ['HR Operations', 'HRMS / HRIS', 'Payroll Coordination', 'Workforce Analytics', 'Process Optimization'],
  },
];

// ── QA & Testing proficiency ───────────────────────────────────────────────────
const qaSkills = [
  { name: 'Process Validation',    level: 90 },
  { name: 'Workflow Testing',      level: 82 },
  { name: 'QA Fundamentals',       level: 75 },
  { name: 'Bug Tracking',          level: 78 },
  { name: 'Documentation',         level: 92 },
  { name: 'Reporting & Analysis',  level: 88 },
  { name: 'System Monitoring',     level: 80 },
  { name: 'Operational Accuracy',  level: 95 },
];

// ── HR & Ops proficiency ───────────────────────────────────────────────────────
const hrSkills = [
  { name: 'HR Operations',         level: 95 },
  { name: 'HRMS / HRIS',           level: 92 },
  { name: 'Recruitment Operations',level: 90 },
  { name: 'Payroll Coordination',  level: 88 },
  { name: 'Workforce Analytics',   level: 85 },
  { name: 'Dashboard Reporting',   level: 83 },
  { name: 'Process Optimization',  level: 87 },
  { name: 'Compliance Management', level: 86 },
];

// ── Tech stack pills ───────────────────────────────────────────────────────────
const techStack = [
  { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.1)',  border: 'rgba(247,223,30,0.2)'  },
  { name: 'Python',     color: '#3572A5', bg: 'rgba(53,114,165,0.1)',  border: 'rgba(53,114,165,0.2)'  },
  { name: 'Node.js',    color: '#68a063', bg: 'rgba(104,160,99,0.1)',  border: 'rgba(104,160,99,0.2)'  },
  { name: 'React',      color: '#61dafb', bg: 'rgba(97,218,251,0.1)',  border: 'rgba(97,218,251,0.2)'  },
  { name: 'HTML/CSS',   color: '#e34c26', bg: 'rgba(227,76,38,0.1)',   border: 'rgba(227,76,38,0.2)'   },
  { name: 'Git',        color: '#f05032', bg: 'rgba(240,80,50,0.1)',   border: 'rgba(240,80,50,0.2)'   },
  { name: 'GitHub',     color: '#e2e8f0', bg: 'rgba(226,232,240,0.07)',border: 'rgba(226,232,240,0.14)'},
  { name: 'REST APIs',  color: '#22d3ee', bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.2)'  },
  { name: 'Playwright', color: '#2ead33', bg: 'rgba(46,173,51,0.1)',   border: 'rgba(46,173,51,0.2)'   },
  { name: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.1)',  border: 'rgba(51,103,145,0.2)'  },
  { name: 'MongoDB',    color: '#47a248', bg: 'rgba(71,162,72,0.1)',   border: 'rgba(71,162,72,0.2)'   },
  { name: 'Linux',      color: '#fcc624', bg: 'rgba(252,198,36,0.1)',  border: 'rgba(252,198,36,0.2)'  },
  { name: 'CI/CD',      color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)' },
  { name: 'Docker',     color: '#2496ed', bg: 'rgba(36,150,237,0.1)',  border: 'rgba(36,150,237,0.2)'  },
];

// ── Soft skills ────────────────────────────────────────────────────────────────
const softSkills = [
  'Systems Thinking',       'Analytical Mindset',
  'Cross-team Coordination','Process Ownership',
  'Attention to Detail',    'Problem Solving',
  'Documentation',          'Continuous Learning',
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
            Balanced skill set across<br />
            <span className="grad-violet">HR operations & QA engineering</span>
          </h2>
        </div>

        {/* Category overview */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => (
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
          {/* QA & Testing */}
          <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel reveal reveal-delay-2">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">QA & Testing Proficiency</p>
            <div className="space-y-3.5">
              {qaSkills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
              ))}
            </div>
          </div>

          {/* HR & Operations */}
          <div className="glass rounded-4xl border border-white/7 p-7 shadow-panel reveal reveal-delay-3">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5">HR & Operations Proficiency</p>
            <div className="space-y-3.5">
              {hrSkills.map((skill, i) => (
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
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Soft Skills & Mindset</p>
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
