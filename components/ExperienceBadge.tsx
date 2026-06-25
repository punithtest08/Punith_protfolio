'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { totalExperienceMonths, formatExperience } from '@/lib/experience';

export default function ExperienceBadge() {
  const { label } = formatExperience(totalExperienceMonths);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="inline-flex items-center gap-3 glass rounded-2xl border border-white/8 px-5 py-3"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex-shrink-0">
        <Briefcase className="h-4 w-4 text-cyan-400" />
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Professional Experience
        </span>
        <span className="text-sm font-bold text-white">{label}</span>
      </div>
      <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"
        style={{ boxShadow: '0 0 6px rgba(16,185,129,0.8)' }} />
    </motion.div>
  );
}
