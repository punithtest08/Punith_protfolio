import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Punith S — People Operations | HR Business Partner | Workforce Planning | People Analytics',
  description: 'People Operations professional with 2+ years supporting 1000+ employees. Expertise in HR Business Partnering, Workforce Planning, People Analytics, Organizational Effectiveness, Social Network Analysis, and Leadership Collaboration. Based in Bengaluru.',
  keywords: [
    'HR Business Partner',
    'People Operations',
    'Workforce Planning',
    'People Analytics',
    'Organizational Effectiveness',
    'HRBP',
    'Workforce Intelligence',
    'Social Network Analysis',
    'Employee Experience',
    'Organizational Development',
    'Leadership Partnership',
    'HR Analytics',
    'HR Technology',
    'Bengaluru',
  ],
  authors: [{ name: 'Punith S' }],
  openGraph: {
    title: 'Punith S — People Operations | HR Business Partner | Workforce Planning | People Analytics',
    description: 'Helping organizations improve employee experience, workforce effectiveness, and business outcomes through people operations, workforce planning, organizational insights, and data-driven decision making.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-slate-100 antialiased">
        <div className="scan-line" />
        {children}
      </body>
    </html>
  );
}
