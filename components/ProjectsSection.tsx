'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, ShieldCheck, MonitorCheck, TicketCheck, Workflow, DollarSign } from 'lucide-react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const projects = [
  {
    id: 'veribuddy',
    icon: ShieldCheck,
    title: 'VeriBuddy AI',
    category: 'QA & Verification Platform',
    tagline: 'Workflow verification with operational validation & process monitoring',
    color: 'cyan',
    stack: ['Node.js', 'MongoDB', 'Express', 'Telegram API', 'Geolocation'],
    description: 'An AI-assisted workflow verification platform focused on operational validation, process monitoring, and workflow accuracy. Implements admin-gated verification flows, trust scoring, anti-spam rate limiting, and automated re-verification — demonstrating QA-oriented system design.',
    metrics: [
      { label: 'Verification Type',  value: 'Admin-gated'       },
      { label: 'Validation System',  value: 'Trust Score'       },
      { label: 'Rate Limiting',      value: 'Anti-spam'         },
      { label: 'Re-verification',    value: 'Automated Flow'    },
    ],
    highlights: ['Step-by-step registration validation', 'Admin review & approval workflow', 'Report & auto-block system', 'Re-verification flow for flagged users', 'Rate limiting & spam prevention', 'Audit trail for all actions'],
    github: 'https://github.com/punithtest08',
    status: 'Deployed · Render',
  },
  {
    id: 'vms',
    icon: MonitorCheck,
    title: 'VMS — Visitor Management System',
    category: 'Workflow Monitoring System',
    tagline: 'Visitor tracking, approvals, monitoring & process coordination',
    color: 'violet',
    stack: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Nodemailer', 'QR Codes'],
    description: 'A workflow monitoring and operational coordination system for managing visitor lifecycles. Features role-based access control, QR-based check-in/out tracking, approval rules engine, blacklist management, attendance reporting, and automated cron-based cleanup — built with process validation at its core.',
    metrics: [
      { label: 'Access Roles',       value: '4 Role Types'      },
      { label: 'Check-in Method',    value: 'QR Tracking'       },
      { label: 'Approval Engine',    value: 'Rules-based'       },
      { label: 'Reporting',          value: 'Analytics Dashboard'},
    ],
    highlights: ['Role-based access control', 'QR check-in/out tracking', 'Configurable approval rules', 'Blacklist & access management', 'Attendance & analytics dashboard', 'Automated data cleanup'],
    github: 'https://github.com/punithtest08/VMS',
    status: 'Deployed · Render',
  },
  {
    id: 'ticketpro',
    icon: TicketCheck,
    title: 'Ticket Pro Controller',
    category: 'Issue Tracking Platform',
    tagline: 'Operational issue handling, session monitoring & process coordination',
    color: 'emerald',
    stack: ['React', 'TypeScript', 'Node.js', 'Playwright', 'WebSocket', 'Telegram Bot'],
    description: 'A ticket management and workflow tracking platform designed for operational issue handling and process coordination. Features real-time WebSocket status updates, multi-session monitoring, session health panels, live log tracking, and automated Telegram alerts — reflecting QA-style system observability.',
    metrics: [
      { label: 'Monitoring',         value: 'Real-time WS'      },
      { label: 'Sessions',           value: 'Up to 5'           },
      { label: 'Alerts',             value: 'Telegram Bot'      },
      { label: 'Automation',         value: 'Playwright CDP'    },
    ],
    highlights: ['Real-time WebSocket monitoring', 'Multi-session health panel', 'Live logs & status tracking', 'Automated alerts on state change', 'Session restart & recovery', 'Dynamic refresh intervals'],
    github: 'https://github.com/punithtest08',
    status: 'Local · macOS',
  },
  {
    id: 'nexticket',
    icon: Workflow,
    title: 'NexTicket',
    category: 'Workflow Coordination Platform',
    tagline: 'Task & workflow tracking with operational monitoring & execution management',
    color: 'blue',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS ECS', 'SQS', 'Terraform'],
    description: 'A workflow coordination and operational monitoring platform built for high-concurrency environments. Uses Redis for atomic state management, SQS FIFO queues for ordered task processing, and AWS ECS for scalable execution — demonstrating infrastructure-level operational thinking.',
    metrics: [
      { label: 'Concurrency',        value: '100K+ users'       },
      { label: 'State Management',   value: 'Redis Atomic'      },
      { label: 'Task Queue',         value: 'SQS FIFO'          },
      { label: 'Infrastructure',     value: 'Terraform IaC'     },
    ],
    highlights: ['Atomic inventory state management', 'FIFO task queue processing', 'Auto-scaling infrastructure', 'WAF & rate limiting', 'Payment workflow integration', 'Full infrastructure-as-code'],
    github: 'https://github.com/punithtest08',
    status: 'AWS · Production-ready',
  },
  {
    id: 'payroll',
    icon: DollarSign,
    title: 'Payroll Automation',
    category: 'Automation Workflow System',
    tagline: 'Automated payroll processing, validation & operational reporting',
    color: 'amber',
    stack: ['JavaScript', 'Node.js', 'React', 'APIs', 'Workflow Engine'],
    description: 'An automation-focused payroll and reporting workflow system designed to streamline operational coordination and validation processes. Automates payroll calculations, data validation checks, compliance reporting, and operational dashboards — directly applying HR operations knowledge to engineering.',
    metrics: [
      { label: 'Automation Type',    value: 'Payroll Workflow'  },
      { label: 'Validation',         value: 'Data Accuracy'     },
      { label: 'Reporting',          value: 'Ops Dashboard'     },
      { label: 'Compliance',         value: 'Audit-ready'       },
    ],
    highlights: ['Automated payroll calculations', 'Data validation & accuracy checks', 'Compliance reporting', 'Operational dashboard', 'Workflow coordination', 'Error detection & alerts'],
    github: 'https://github.com/punithtest08',
    status: 'In Development',
  },
];

const colorMap: Record<string, { border: string; badge: string; icon: string; glow: string; bar: string }> = {
  cyan:    { border: 'border-cyan-400/20 hover:border-cyan-400/40',    badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',       icon: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',       glow: 'shadow-[0_0_50px_rgba(34,211,238,0.07)]',    bar: 'from-cyan-500/60 to-violet-500/40'    },
  violet:  { border: 'border-violet-400/20 hover:border-violet-400/40', badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20', icon: 'bg-violet-400/10 text-violet-400 border-violet-400/20', glow: 'shadow-[0_0_50px_rgba(124,58,237,0.07)]',    bar: 'from-violet-500/60 to-cyan-500/40'    },
  emerald: { border: 'border-emerald-400/20 hover:border-emerald-400/40', badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20', icon: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20', glow: 'shadow-[0_0_50px_rgba(16,185,129,0.07)]', bar: 'from-emerald-500/60 to-cyan-500/40'   },
  blue:    { border: 'border-blue-400/20 hover:border-blue-400/40',    badge: 'bg-blue-400/10 text-blue-300 border-blue-400/20',       icon: 'bg-blue-400/10 text-blue-400 border-blue-400/20',       glow: 'shadow-[0_0_50px_rgba(59,130,246,0.07)]',    bar: 'from-blue-500/60 to-violet-500/40'    },
  amber:   { border: 'border-amber-400/20 hover:border-amber-400/40',  badge: 'bg-amber-400/10 text-amber-300 border-amber-400/20',    icon: 'bg-amber-400/10 text-amber-400 border-amber-400/20',    glow: 'shadow-[0_0_50px_rgba(251,191,36,0.07)]',    bar: 'from-amber-500/60 to-orange-500/40'   },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const c    = colorMap[project.color];
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09 }}
      className={`project-card glass rounded-4xl border ${c.border} ${c.glow} overflow-hidden`}
    >
      <div className={`h-0.5 w-full bg-gradient-to-r ${c.bar}`} />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${c.icon}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{project.tagline}</p>
            </div>
          </div>
          <span className={`flex-shrink-0 rounded-full border px-2.5 py-1 text-xs font-mono ${c.badge}`}>
            {project.status}
          </span>
        </div>

        {/* Category badge */}
        <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-mono mb-4 ${c.badge}`}>
          {project.category}
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl bg-black/25 border border-white/5 p-3">
              <p className="text-xs text-slate-500 font-mono">{m.label}</p>
              <p className="text-sm font-semibold text-white mt-0.5">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/5 border border-white/8 px-2.5 py-1 text-xs text-slate-400 font-mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable highlights */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Key Features</p>
              <ul className="grid grid-cols-2 gap-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition font-mono"
          >
            {expanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            {expanded ? 'Less' : 'More details'}
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-mono transition hover:scale-105 ${c.badge}`}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="reveal mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">Projects</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Operational systems & workflow<br />
            <span className="grad-violet">platforms built with QA thinking</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Real projects demonstrating workflow coordination, process validation, system monitoring, and operational automation — bridging HR operations with engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
