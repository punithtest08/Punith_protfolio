import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Punith S — HR Specialist | Aspiring QA Engineer',
  description: 'HR Operations professional transitioning into QA Engineering. Experienced in workflow coordination, process validation, operational systems, and automation. Based in Bengaluru.',
  keywords: ['HR Operations', 'QA Engineer', 'Workflow Automation', 'Process Validation', 'Operations Analyst', 'QA Testing', 'Bengaluru'],
  authors: [{ name: 'Punith S' }],
  openGraph: {
    title: 'Punith S — HR Specialist | Aspiring QA Engineer',
    description: 'HR Operations professional transitioning into QA Engineering. Workflow coordination, process validation, and automation systems.',
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
