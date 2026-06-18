import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Punith S — HR Operations Analyst | People Operations | HR Analytics',
  description: 'HR Operations Analyst with 2+ years supporting 1000+ employees. Expertise in People Operations, HR Analytics, Workforce Planning, Employee Experience, HR Technology, and Process Excellence. Based in Bengaluru.',
  keywords: [
    'HR Operations Analyst',
    'People Operations',
    'HR Analytics',
    'HR Technology',
    'Workforce Planning',
    'Employee Experience',
    'HR Dashboard',
    'People Analytics',
    'HR Operations Consultant',
    'Workplace Operations',
    'HR Process Excellence',
    'Operational Intelligence',
    'HRMS',
    'Bengaluru',
  ],
  authors: [{ name: 'Punith S' }],
  openGraph: {
    title: 'Punith S — HR Operations Analyst | People Operations | HR Analytics',
    description: 'HR Operations Analyst supporting workforce operations, employee experience, and operational intelligence through data-driven decision making and scalable systems.',
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
