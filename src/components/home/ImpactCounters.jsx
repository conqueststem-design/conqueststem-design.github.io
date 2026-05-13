import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 2, label: 'Countries Served', suffix: '' },
  { value: 98, label: 'Wellness Check Rate', suffix: '%' },
  { value: 100, label: 'Free of Charge', suffix: '%' },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactCounters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section className="py-24 md:py-36" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="text-accent font-heading font-medium text-sm uppercase tracking-[0.2em] mb-4">Our Impact</p>
          <h2 className="font-heading font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">Proof that calm minds learn better</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
              <p className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary mb-3"><AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} /></p>
              <p className="text-muted-foreground text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
