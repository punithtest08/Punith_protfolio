'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code2, GitBranch, Terminal, CheckCircle2, Circle, Clock, Layers } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

// ── Learning roadmap ───────────────────────────────────────────────────────────
const roadmap = [
  {
    phase: '01',
    title: 'QA Fundamentals',
    status: 'in-progress',
    items: [
      { label: 'Software testing concepts',       done: true  },
      { label: 'Test case design & documentation', done: true  },
      { label: 'Bug lifecycle & tracking',         done: true  },
      { label: 'Manual testing workflows',         done: true  },
      { label: 'QA process integration',           done: false },
    ],
  },
  {
    phase: '02',
    title: 'Automation Basics',
    status: 'in-progress',
    items: [
      { label: 'Python scripting basics',        done: false },
      { label: 'Playwright (hands-on projects)',  done: true  },
      { label: 'API testing concepts',            done: false },
      { label: 'Test automation frameworks',      done: false },
      { label: 'Selenium basics',                 done: false },
    ],
  },
  {
    phase: '03',
    title: 'DevOps & Systems',
    status: 'learning',
    items: [
      { label: 'Git & GitHub workflows',           done: true  },
      { label: 'Linux command line basics',        done: false },
      { label: 'CI/CD pipeline concepts',          done: false },
      { label: 'Docker basics',                    done: false },
      { label: 'Deployment & monitoring basics',   done: false },
    ],
  },
  {
    phase: '04',
    title: 'QA Engineering Role',
    status: 'goal',
    items: [
      { label: 'QA Engineer position',             done: false },
      { label: 'Automation test engineer',         done: false },
      { label: 'Operations QA analyst',            done: false },
      { label: 'QA-focused startup role',          done: false },
      { label: 'DevOps / QA hybrid role',          done: false },
    ],
  },
];

// ── Applied QA in projects ─────────────────────────────────────────────────────
const appliedQA = [
  {
    project: 'VMS',
    application: 'Role-based access validation, approval rules engine, QR check-in/out flow testing',
    icon: CheckCircle2,
    color: 'violet',
  },
  {
    project: 'Ticket Pro',
    application: 'Real-time session monitoring, state machine validation, automated alert testing',
    icon: Terminal,
    color: 'emerald',
  },
  {
    project: 'VeriBuddy',
    application: 'Verification flow validation, trust score logic, anti-spam rate limit testing',
    icon: Layers,
    color: 'cyan',
  },
  {
    project: 'NexTicket',
    application: 'Atomic state management, queue processing validation, infrastructure monitoring',
    icon: GitBranch,
    color: 'blue',
  },
];

// ── Learning resources ─────────────────────────────────────────────────────────
const learningAreas = [
  { label: 'QA Principles',        progress: 72, color: '#22d3ee' },
  { label: 'JavaScript / Node.js', progress: 78, color: '#f7df1e' },
  { label: 'Python Basics',        progress: 35, color: '#3572A5' },
  { label: 'Playwright / Testing', progress: 65, color: '#2ead33' },
  { label: 'Git & GitHub',         progress: 80, color: '#f05032' },
  { label: 'CI/CD Concepts',       progress: 30, color: '#a78bfa' },
  { label: 'Linux Basics',         progress: 28, color: '#fcc624' },
];

const statusStyle: Record<string, { badge: string; dot: string }> = {
  'in-progress': { badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',       dot: 'bg-cyan-400'    },
  'learning':    { badge: 'bg-amber-400/10 text-amber-300 border-amber-400/20',    dot: 'bg-amber-400'   },
  'goal':        { badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20', dot: 'bg-violet-400'  },
};

const colorMap: Record<string, string> = {
  cyan:    'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  violet:  'text-violet-400 bg-violet-400/10 border-violet-400/20',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  blue:    'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

export default function QAJourneySection() {
  const ref = useScrollReveal();

  return (
    <section id="qa-journey" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">QA Engineering Journey</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Transitioning from operations<br />
            <span className="grad-cyan">to QA engineering</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            A structured learning path combining hands-on project experience with QA fundamentals, automation basics, and DevOps concepts — building toward a QA engineering role.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left: Roadmap */}
          <div className="space-y-4 reveal reveal-delay-1">
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Learning Roadmap</p>

            {roadmap.map((phase, pi) => {
              const s = statusStyle[phase.status];
              const doneCount = phase.items.filter((i) => i.done).length;
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pi * 0.1 }}
                  className="glass rounded-3xl border border-white/7 p-5 hover:border-white/12 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500 font-mono">{phase.phase}</span>
                      <h4 className="text-sm font-semibold text-white">{phase.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-mono">{doneCount}/{phase.items.length}</span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-mono ${s.badge}`}>
                        {phase.status === 'in-progress' ? 'In Progress' : phase.status === 'learning' ? 'Learning' : 'Goal'}
                      </span>
                    </div>
                  </div>

                  {/* Mini progress bar */}
                  <div className="h-1 rounded-full bg-white/5 overflow-hidden mb-3">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${(doneCount / phase.items.length) * 100}%`, background: 'linear-gradient(90deg, #22d3ee, #7c3aed)' }}
                    />
                  </div>

                  <ul className="grid grid-cols-2 gap-1.5">
                    {phase.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-2 text-xs">
                        {item.done
                          ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                          : <Circle className="h-3.5 w-3.5 text-slate-600 flex-shrink-0" />
                        }
                        <span className={item.done ? 'text-slate-300' : 'text-slate-600'}>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Learning progress + applied QA */}
          <div className="space-y-5 reveal reveal-delay-2">

            {/* Learning progress */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="h-4 w-4 text-cyan-400" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Learning Progress</p>
              </div>
              <div className="space-y-3.5">
                {learningAreas.map((area, i) => (
                  <div key={area.label}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-300 font-mono">{area.label}</span>
                      <span className="font-mono font-semibold" style={{ color: area.color }}>{area.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                        className="h-full rounded-full"
                        style={{ background: area.color, opacity: 0.85 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applied QA in projects */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-4 w-4 text-violet-400" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">QA Applied in Projects</p>
              </div>
              <div className="space-y-3">
                {appliedQA.map((item) => {
                  const Icon = item.icon;
                  const c    = colorMap[item.color];
                  return (
                    <div key={item.project} className="flex items-start gap-3 rounded-2xl bg-black/20 border border-white/5 p-3">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-xl border flex items-center justify-center ${c}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white font-mono">{item.project}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.application}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline note */}
            <div className="glass rounded-3xl border border-cyan-400/12 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Transition Timeline</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Actively building QA engineering skills through hands-on projects, structured learning, and applying testing principles to real operational systems. Targeting QA, automation, and operations-focused engineering roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
