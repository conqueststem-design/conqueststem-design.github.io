import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const STEM_IMG = 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/c8f706597_generated_ac56f3db.png';

export default function CTASection() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={STEM_IMG} alt="Abstract STEM visualization" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-6">Join the Movement</p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-8">Whether you want to learn, teach, or give — there's a place for you here.</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">We're building a global community where STEM education meets emotional well-being. No cost. No judgment. Just growth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/schedule"><Button size="lg" className="rounded-full px-8 text-base transition-all duration-500 hover:scale-105 h-14">Start Free Tutoring<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            <Link to="/get-involved"><Button variant="outline" size="lg" className="rounded-full px-8 text-base transition-all duration-500 hover:scale-105 h-14"><Users className="w-4 h-4 mr-2" />Become a Volunteer</Button></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
