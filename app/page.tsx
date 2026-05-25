import { getGithubData } from '@/lib/github';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import HRAnalyticsSection from '@/components/HRAnalyticsSection';
import QAJourneySection from '@/components/QAJourneySection';
import SkillsSection from '@/components/SkillsSection';
import GithubSection from '@/components/GithubSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export const revalidate = 900;

export default async function Home() {
  const githubData = await getGithubData();

  return (
    <main className="relative min-h-screen bg-surface overflow-x-hidden">
      {/* Global ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="blob-cyan w-[600px] h-[600px] -top-40 -left-40 opacity-60" />
        <div className="blob-violet w-[500px] h-[500px] top-1/3 -right-40 opacity-50" />
        <div className="blob-blue w-[400px] h-[400px] bottom-1/4 left-1/4 opacity-40" />
        <div className="absolute inset-0 grid-overlay opacity-100" style={{ backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <HRAnalyticsSection />
        <QAJourneySection />
        <SkillsSection />
        <GithubSection repos={githubData.repos} summary={githubData.summary} />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
