import PageTransition from '@/components/layout/PageTransition'
import HeroSection from '@/components/home/HeroSection'
import SkillBadges from '@/components/home/SkillBadges'
import AboutSection from '@/components/home/AboutSection'
import FeaturedProjects from '@/components/home/FeaturedProjects'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <SkillBadges />
      <AboutSection />
      <FeaturedProjects />
    </PageTransition>
  )
}
