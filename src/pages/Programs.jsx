import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Zap, BookOpen, Microscope, FlaskConical, Calculator, Atom } from 'lucide-react';

const programs = [
  { icon: BookOpen, title: 'Foundations of Science', ages: 'Ages 6–12', description: 'An introductory journey through biology, earth science, and basic chemistry. We spark wonder and build a lifelong love of discovery — gently and at your own pace.', topics: ['Life sciences', 'Earth & space', 'Chemistry basics', 'Scientific method'], intensity: 'gentle', duration: '30-45 min sessions', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/dc42fdf01_generated_eed71edb.png' },
  { icon: Microscope, title: 'Biology & Life Sciences', ages: 'Ages 13 and up', description: 'Dive deep into cellular biology, genetics, ecology, and human physiology. Understand life at every scale — from DNA to ecosystems.', topics: ['Cell biology', 'Genetics & heredity', 'Human anatomy', 'Ecology & evolution'], intensity: 'moderate', duration: '45-60 min sessions', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/dc42fdf01_generated_eed71edb.png' },
  { icon: FlaskConical, title: 'Chemistry & Biochemistry', ages: 'Ages 14 and up', description: 'From atomic structure to organic reactions and biochemical pathways — chemistry made approachable, intuitive, and deeply fascinating.', topics: ['Atomic theory', 'Stoichiometry', 'Organic chemistry', 'Biochemistry & enzymes'], intensity: 'intensive', duration: '60 min sessions', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/7f788378e_generated_e6ba4f74.png' },
  { icon: Atom, title: 'Physics & Astrophysics', ages: 'Ages 14 and up', description: 'Mechanics, electromagnetism, thermodynamics, and the wonders of the cosmos. We make the laws of the universe feel like a conversation, not a lecture.', topics: ['Newtonian mechanics', 'Electromagnetism', 'Thermodynamics', 'Cosmology & relativity'], intensity: 'intensive', duration: '60 min sessions', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/84b15c05d_generated_44f42b62.png' },
  { icon: Calculator, title: 'Mathematics', ages: 'All ages', description: 'We turn math from a source of anxiety into a language of patterns and beauty. Every level, from arithmetic to calculus and beyond.', topics: ['Arithmetic & algebra', 'Geometry', 'Statistics & probability', 'Pre-calculus & calculus'], intensity: 'gentle', duration: '30-45 min sessions', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/212e1ff75_generated_4a30c882.png' },
];

const intensityConfig = {
  gentle: { label: 'Gentle Pace', dots: 1 },
  moderate: { label: 'Moderate Pace', dots: 2 },
  intensive: { label: 'Intensive', dots: 3 },
};

export default function Programs() {
  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Our Programs</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">STEM pathways designed for every mind.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed">Each program includes built-in wellness checkpoints and cognitive load monitoring. Choose the path that resonates with your energy today.</motion.p>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          {programs.map((program, i) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7 }} className="bg-secondary/30 rounded-3xl overflow-hidden">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img src={program.image} alt={`Abstract ${program.title} visualization`} className="w-full h-64 md:h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center"><program.icon className="w-5 h-5 text-accent" /></div>
                    <span className="text-muted-foreground text-sm">{program.ages}</span>
                  </div>
                  <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-4">{program.title}</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.topics.map((topic) => (<span key={topic} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">{topic}</span>))}
                  </div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{intensityConfig[program.intensity].label}</span>
                      <div className="flex gap-1 ml-1">{[1,2,3].map((d) => (<div key={d} className={`w-1.5 h-1.5 rounded-full ${d <= intensityConfig[program.intensity].dots ? 'bg-accent' : 'bg-border'}`} />))}</div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" /><span>{program.duration}</span></div>
                  </div>
                  <Link to="/schedule">
                    <Button className="rounded-full px-6 w-fit transition-all duration-500 hover:scale-105">Schedule a Session<ArrowRight className="w-4 h-4 ml-2" /></Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
