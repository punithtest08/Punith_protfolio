export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
  isPrivate?: boolean;
};

export type GitHubSummary = {
  totalRepos: number;
  topLanguage: string;
  stars: number;
  lastUpdated: string;
};

const GITHUB_USER = 'punithtest08';

// Known repos — includes private ones that the public API cannot see.
// Public repos fetched from the API will override/supplement these.
const KNOWN_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'veribuddy',
    html_url: 'https://github.com/punithtest08/veribuddy',
    description: 'AI-assisted verification platform with Telegram bot, trust score engine, and location-based discovery.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-03-15T00:00:00Z',
    updated_at: '2025-03-15T00:00:00Z',
    isPrivate: true,
  },
  {
    id: 2,
    name: 'VMS',
    html_url: 'https://github.com/punithtest08/VMS',
    description: 'Full-stack visitor management system with QR check-in, role-based access, approval engine, and analytics dashboard.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-04-10T00:00:00Z',
    updated_at: '2025-04-10T00:00:00Z',
    isPrivate: true,
  },
  {
    id: 3,
    name: 'Ticket_pro',
    html_url: 'https://github.com/punithtest08/Ticket_pro',
    description: 'Real-time multi-session monitoring dashboard with WebSocket updates, CDP automation, and Telegram alerts.',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-02-20T00:00:00Z',
    updated_at: '2025-02-20T00:00:00Z',
    isPrivate: true,
  },
  {
    id: 4,
    name: 'Nexticket',
    html_url: 'https://github.com/punithtest08/Nexticket',
    description: 'High-traffic event ticketing platform for 100K+ concurrent users — Redis, SQS, AWS ECS Fargate, Terraform IaC.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2025-01-18T00:00:00Z',
    updated_at: '2025-01-18T00:00:00Z',
    isPrivate: true,
  },
  {
    id: 5,
    name: 'PayrollAutomation',
    html_url: 'https://github.com/punithtest08/PayrollAutomation',
    description: 'Automated payroll processing and reporting workflow system with validation, compliance tracking, and operational dashboards.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    pushed_at: '2026-04-02T00:00:00Z',
    updated_at: '2026-04-02T00:00:00Z',
    isPrivate: false,
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' });
}

export async function getGithubData() {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  // Start with known repos as the base
  let merged = [...KNOWN_REPOS];

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=20&sort=pushed&direction=desc`,
      { headers, next: { revalidate: 900 } }
    );

    if (response.ok) {
      const liveRepos = (await response.json()) as GitHubRepo[];
      if (Array.isArray(liveRepos) && liveRepos.length > 0) {
        // Merge: live data overrides known entries by name, extras are appended
        const knownNames = new Set(KNOWN_REPOS.map((r) => r.name.toLowerCase()));
        const extras = liveRepos.filter((r) => !knownNames.has(r.name.toLowerCase()));

        // Update known repos with live star/fork counts where available
        merged = KNOWN_REPOS.map((known) => {
          const live = liveRepos.find((r) => r.name.toLowerCase() === known.name.toLowerCase());
          if (live) {
            return {
              ...known,
              stargazers_count: live.stargazers_count,
              forks_count: live.forks_count,
              pushed_at: live.pushed_at,
              updated_at: live.updated_at,
              isPrivate: false,
            };
          }
          return known;
        });

        // Append any extra public repos not in our known list
        merged = [...merged, ...extras.slice(0, 2)];
      }
    }
  } catch {
    // Silently fall back to known repos — no error shown to user
  }

  const display = merged.slice(0, 6);
  const totalStars = display.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

  const langCount = display.reduce((acc, r) => {
    if (r.language) acc[r.language] = (acc[r.language] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const topLanguage = Object.entries(langCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'JavaScript';

  // Most recently pushed
  const sorted = [...display].sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  );

  return {
    repos: display,
    summary: {
      totalRepos: display.length,
      topLanguage,
      stars: totalStars,
      lastUpdated: formatDate(sorted[0].pushed_at),
    } as GitHubSummary,
  };
}
