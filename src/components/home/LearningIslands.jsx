import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Zap } from 'lucide-react';

const SUBJECTS = [
  { title: 'Science', description: 'Biology, Chemistry, Physics — explore the natural world through curiosity, not pressure.', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/dc42fdf01_generated_eed71edb.png', intensity: 'gentle', duration: '30-45 min', color: 'bg-accent/20' },
  { title: 'Technology', description: 'Coding, robotics, and digital literacy — building the future one calm step at a time.', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/7f788378e_generated_e6ba4f74.png', intensity: 'moderate', duration: '45-60 min', color: 'bg-primary/10' },
  { title: 'Engineering', description: 'Design, build, and problem-solve — where creativity meets structural thinking.', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/84b15c05d_generated_44f42b62.png', intensity: 'moderate', duration: '45-60 min', color: 'bg-accent/15' },
  { title: 'Mathematics', description: 'Numbers tell stories. From arithmetic to calculus, we make math feel like a language, not a test.', image: 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/212e1ff75_generated_4a30c882.png', intensity: 'gentle', duration: '30-45 min', color: 'bg-primary/10' },
];

const intensityLevels = {
  gentle: { label: 'Gentle Pace', dots: 1 },
  moderate: { label: 'Moderate Pace', dots: 2 },
  intensive: { label: 'Intensive', dots: 3 },
};

function CognitiveLoadMeter({ intensity }) {
  const config = intensityLevels[intensity];
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Zap className="w-3.5 h-3.5" />
      <span>{config.label}</span>
      <div className="flex gap-1 ml-1">{[1,2,3].map((dot) => (<div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot <= config.dots ? 'bg-accent' : 'bg-border'}`} />))}</div>
    </div>
  );
}

export default function LearningIslands() {
  return (
    <section className="py-24 md:py-36 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="text-center mb-16 md:mb-20">
          <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Curriculum</p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">Choose your learning path</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Each island is designed to match your current energy and curiosity level. No rush, no judgment.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUBJECTS.map((subject, i) => (
            <motion.div key={subject.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Link to="/programs" className="block group">
                <div className={`${subject.color} rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-lg hover:shadow-accent/10`}>
                  <div className="flex flex-col gap-6">
                    <div className="w-full h-48 rounded-2xl overflow-hidden">
                      <img src={subject.image} alt={`Abstract representation of ${subject.title}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-2xl mb-3">{subject.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed mb-4">{subject.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <CognitiveLoadMeter intensity={subject.intensity} />
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" /><span>{subject.duration}</span></div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-0 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
