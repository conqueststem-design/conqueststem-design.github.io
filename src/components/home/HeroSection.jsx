import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/d2bf8a748_generated_d8a67d57.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Abstract geometric shapes floating in misty atmosphere" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-6">Where STEM meets serenity</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-heading font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">Every mind deserves<br /><span className="text-primary">brilliance without</span><br />burnout.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mb-12">Free STEM tutoring for kids and adults of all backgrounds. We put mental wellness first because a calm mind learns best.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
            <Link to="/schedule"><Button size="lg" className="rounded-full px-8 text-base transition-all duration-500 hover:scale-105 h-14">Start Learning<ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            <Link to="/get-involved"><Button variant="outline" size="lg" className="rounded-full px-8 text-base transition-all duration-500 hover:scale-105 h-14"><Heart className="w-4 h-4 mr-2" />Support Our Mission</Button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
