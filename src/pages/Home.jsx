import HeroSection from '../components/home/HeroSection';
import MissionStatement from '../components/home/MissionStatement';
import LearningIslands from '../components/home/LearningIslands';
import ImpactCounters from '../components/home/ImpactCounters';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MissionStatement />
      <LearningIslands />
      <ImpactCounters />
      <CTASection />
    </div>
  );
}
