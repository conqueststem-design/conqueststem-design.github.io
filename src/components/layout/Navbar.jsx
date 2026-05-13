import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PeacefulMenu from './PeacefulMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-lg border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="font-heading font-semibold text-xl tracking-tight text-foreground">ConquestSTEM</Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/about" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-500">About</Link>
            <Link to="/programs" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-500">Programs</Link>
            <Link to="/get-involved" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-500">Get Involved</Link>
            <Link to="/schedule"><Button className="rounded-full px-6 transition-all duration-500 hover:scale-105">Schedule Tutoring</Button></Link>
          </nav>
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors duration-500"><Menu className="w-6 h-6" /></button>
        </div>
      </header>
      <PeacefulMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
