import { motion } from 'framer-motion';

const WELLNESS_IMG = 'https://media.base44.com/images/public/69f01a6b6ef9fe5368af8998/a617b52a8_generated_fa8a314d.png';

export default function MissionStatement() {
  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Our Philosophy</p>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-6">Mental clarity is the prerequisite for genius.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">Traditional education pushes harder when students struggle. We do the opposite. Our wellness-first approach ensures every learner has the emotional and cognitive bandwidth to truly absorb and enjoy STEM concepts.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">From elementary math to advanced engineering—completely free, for everyone, regardless of background. Because knowledge should never be gated by economics.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="rounded-3xl overflow-hidden">
              <img src={WELLNESS_IMG} alt="Smooth river stones with mathematical golden ratio lines" className="w-full h-80 md:h-[480px] object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
