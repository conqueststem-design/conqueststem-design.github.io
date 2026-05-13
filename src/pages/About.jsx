import { motion } from 'framer-motion';
import { Heart, Brain, Users, Shield } from 'lucide-react';

const WELLNESS_IMG = 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/a617b52a8_generated_fa8a314d.png';

const values = [
  { icon: Heart, title: 'Wellness First', description: "Every session begins with a mental wellness check. We never push beyond a student's emotional capacity." },
  { icon: Brain, title: 'Cognitive Freedom', description: 'Learning should feel like exploration, not obligation. Our tutors cultivate curiosity over compliance.' },
  { icon: Users, title: 'Radical Inclusion', description: 'From rural communities to urban centers, every socioeconomic status, every background — no exceptions.' },
  { icon: Shield, title: 'Safe Spaces', description: 'Our tutoring environments are built on trust, confidentiality, and zero-judgment pedagogy.' },
];

export default function About() {
  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">About ConquestSTEM</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">We're rewriting the rules of education.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed">ConquestSTEM was founded on a simple truth: you can't pour knowledge into an overwhelmed mind. We're a non-profit that provides completely free STEM tutoring to students of all ages and backgrounds, while making mental health the cornerstone of every learning interaction.</motion.p>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <img src={WELLNESS_IMG} alt="Natural textures with mathematical lines" className="w-full h-64 md:h-96 object-cover" />
          </div>
        </div>
      </section>
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16">
            <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Our Values</p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.15] tracking-tight max-w-2xl">Four pillars that guide every tutoring session</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-secondary/40 rounded-3xl p-8 md:p-10">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-6"><value.icon className="w-5 h-5 text-accent" /></div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 md:py-36 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-6">Our Story</p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.2] tracking-tight mb-8">"We started because we saw too many brilliant minds dimmed by burnout."</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">Our founders witnessed firsthand how the pressure of academic achievement was crushing the very curiosity it was supposed to nurture. ConquestSTEM was born from the belief that STEM education can be rigorous, accessible, and gentle — all at once. We're just getting started, and every mind we reach proves that when you prioritize the person, the grades follow.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
