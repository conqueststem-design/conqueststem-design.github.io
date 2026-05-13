import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/schedule', label: 'Schedule Tutoring' },
];

export default function PeacefulMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }} className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
          <button onClick={onClose} className="absolute top-8 right-8 p-3 text-foreground/60 hover:text-foreground transition-colors duration-500"><X className="w-7 h-7" /></button>
          <nav className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}>
                <Link to={link.to} onClick={onClose} className="font-heading text-3xl md:text-5xl font-medium text-foreground/70 hover:text-foreground transition-all duration-700">{link.label}</Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
