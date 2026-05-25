'use client';

import { motion } from 'framer-motion';
import { Github, Code2, Star, GitFork, Clock, Activity, ExternalLink, Lock } from 'lucide-react';
import type { GitHubRepo, GitHubSummary } from '@/lib/github';
import { useScrollReveal } from '@/lib/useScrollReveal';

interface GithubSectionProps {
  repos: GitHubRepo[];
  summary: GitHubSummary;
}

const langColors: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python:     '#3572A5',
  Go:         '#00ADD8',
  Rust:       '#dea584',
  Java:       '#b07219',
  'C#':       '#178600',
  CSS:        '#563d7c',
  HTML:       '#e34c26',
  Shell:      '#89e051',
};

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const langColor = langColors[repo.language ?? ''] ?? '#22d3ee';
  const isPrivate = repo.isPrivate ?? false;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group glass rounded-3xl border border-white/7 p-5 hover:border-cyan-400/25 transition-all duration-300 block"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20 transition">
            <Code2 className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition" />
          </div>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition">{repo.name}</p>
            {isPrivate && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-500 mt-0.5">
                <Lock className="h-2.5 w-2.5" />
                Private
              </span>
            )}
          </div>
        </div>
        <ExternalLink className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 transition flex-shrink-0 mt-1" />
      </div>

      {/* Description */}
      <p className="text-xs text-slate-400 leading-relaxed mb-4">{repo.description ?? 'Workflow and operations repository.'}</p>

      {/* Meta row */}
      <div className="flex items-center gap-3 text-xs text-slate-500 font-mono flex-wrap">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="h-3 w-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          {repo.forks_count}
        </span>
        <span className="flex items-center gap-1 ml-auto">
          <Clock className="h-3 w-3" />
          {new Date(repo.pushed_at).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: '2-digit' })}
        </span>
      </div>
    </motion.a>
  );
}

export default function GithubSection({ repos, summary }: GithubSectionProps) {
  const ref = useScrollReveal();

  const langDist = repos.reduce((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const totalLang = Object.values(langDist).reduce((a, b) => a + b, 0);

  const privateCount = repos.filter((r) => r.isPrivate).length;
  const publicCount  = repos.length - privateCount;

  return (
    <section id="github" className="px-6 lg:px-10 pb-24">
      <div className="mx-auto max-w-7xl" ref={ref}>

        <div className="reveal mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/70">GitHub</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Repository overview &<br />
            <span className="grad-cyan">project portfolio</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl">
            {privateCount > 0
              ? `${repos.length} repositories total — ${publicCount} public, ${privateCount} private. Private repos are shown with real metadata.`
              : `${repos.length} repositories covering workflow automation, QA systems, and operational platforms.`}
          </p>
        </div>

        {/* Summary stats */}
        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Github, label: 'Repositories',  value: String(summary.totalRepos) },
            { icon: Code2,  label: 'Top Language',   value: summary.topLanguage        },
            { icon: Star,   label: 'Total Stars',    value: String(summary.stars)      },
            { icon: Clock,  label: 'Last Push',      value: summary.lastUpdated        },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass rounded-3xl border border-white/7 p-5 text-center">
                <Icon className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 font-mono mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">

          {/* Repo grid */}
          <div className="reveal reveal-delay-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {repos.map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-5 reveal reveal-delay-3">

            {/* Language breakdown */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Language Distribution</p>
              {totalLang > 0 ? (
                <div className="space-y-3">
                  {Object.entries(langDist)
                    .sort((a, b) => b[1] - a[1])
                    .map(([lang, count]) => {
                      const pct   = Math.round((count / totalLang) * 100);
                      const color = langColors[lang] ?? '#22d3ee';
                      return (
                        <div key={lang}>
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="flex items-center gap-1.5 text-slate-300 font-mono">
                              <span className="h-2 w-2 rounded-full" style={{ background: color }} />
                              {lang}
                            </span>
                            <span className="font-mono font-semibold" style={{ color }}>{pct}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                              className="h-full rounded-full"
                              style={{ background: color }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <p className="text-xs text-slate-500 font-mono">Calculating distribution…</p>
              )}
            </div>

            {/* Visibility breakdown */}
            <div className="glass rounded-3xl border border-white/7 p-5">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Visibility</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/25 border border-white/5 p-3 text-center">
                  <p className="text-xl font-bold text-cyan-400">{publicCount}</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Public</p>
                </div>
                <div className="rounded-2xl bg-black/25 border border-white/5 p-3 text-center">
                  <p className="text-xl font-bold text-violet-400">{privateCount}</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Private</p>
                </div>
              </div>
            </div>

            {/* Profile card */}
            <div className="glass rounded-4xl border border-white/7 p-6 shadow-panel">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">punithtest08</p>
                  <p className="text-xs text-slate-500 font-mono">github.com/punithtest08</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Building workflow automation systems, QA-oriented operational platforms, and HR engineering tools.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono mb-4">
                <Activity className="h-3.5 w-3.5" />
                Active contributor
              </div>
              <a
                href="https://github.com/punithtest08"
                target="_blank"
                rel="noreferrer"
                className="btn-magnetic w-full flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-2.5 text-sm text-slate-200 hover:border-cyan-400/30 hover:bg-white/8 transition"
              >
                <Github className="h-4 w-4" />
                View Full Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
