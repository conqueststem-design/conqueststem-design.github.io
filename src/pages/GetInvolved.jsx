import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ways = [
  { icon: Users, title: 'Volunteer as a Tutor', description: 'Share your STEM knowledge in a low-pressure, wellness-focused environment. We provide training in our unique pedagogical approach.', action: 'Apply to Volunteer' },
  { icon: Heart, title: 'Make a Donation', description: 'Every dollar directly funds free tutoring sessions and mental health resources for students who need them most.', action: 'Donate Now' },
  { icon: BookOpen, title: 'Partner With Us', description: 'Schools, libraries, and community centers can bring ConquestSTEM programs to their local communities at no cost.', action: 'Start a Partnership' },
  { icon: MessageCircle, title: 'Spread the Word', description: 'Know a student, parent, or educator who could benefit? Share our mission and help us reach every mind that needs us.', action: 'Share Our Story' },
];

export default function GetInvolved() {
  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Get Involved</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8">Be part of something that heals while it teaches.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed">Whether you have time, resources, or just a voice — you can help us make STEM education accessible and humane for everyone.</motion.p>
          </div>
        </div>
      </section>
      <section className="pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((way, i) => (
              <motion.div key={way.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-secondary/40 rounded-3xl p-8 md:p-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><way.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="font-heading font-semibold text-xl md:text-2xl mb-3">{way.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">{way.description}</p>
                <Button variant="outline" className="rounded-full w-fit px-6 transition-all duration-500 hover:scale-105">{way.action}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 md:py-36 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl leading-[1.15] tracking-tight mb-6">100% of donations go directly to student support.</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">We maintain radical transparency. Every dollar funds tutoring sessions, mental health resources, and educational materials for students in need.</p>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center"><p className="font-heading font-semibold text-3xl md:text-4xl text-primary">60%</p><p className="text-muted-foreground text-sm mt-1">Direct Tutoring</p></div>
              <div className="text-center"><p className="font-heading font-semibold text-3xl md:text-4xl text-primary">25%</p><p className="text-muted-foreground text-sm mt-1">Wellness Programs</p></div>
              <div className="text-center"><p className="font-heading font-semibold text-3xl md:text-4xl text-primary">15%</p><p className="text-muted-foreground text-sm mt-1">Materials & Tech</p></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
