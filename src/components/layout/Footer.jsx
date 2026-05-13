import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          <div className="md:col-span-1">
            <h3 className="font-heading font-semibold text-2xl mb-4">ConquestSTEM</h3>
            <p className="text-background/60 text-base leading-relaxed max-w-sm">Free STEM tutoring for every mind. We believe mental wellness is the foundation of learning.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-medium text-sm uppercase tracking-widest text-background/40 mb-2">Navigate</h4>
            <Link to="/about" className="text-background/70 hover:text-background transition-colors duration-500 text-base">About Us</Link>
            <Link to="/programs" className="text-background/70 hover:text-background transition-colors duration-500 text-base">Programs</Link>
            <Link to="/schedule" className="text-background/70 hover:text-background transition-colors duration-500 text-base">Schedule Tutoring</Link>
            <Link to="/get-involved" className="text-background/70 hover:text-background transition-colors duration-500 text-base">Get Involved</Link>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-medium text-sm uppercase tracking-widest text-background/40 mb-2">Support Our Mission</h4>
            <p className="text-background/60 text-base">Every contribution helps us reach another student.</p>
            <Link to="/get-involved">
              <Button variant="outline" className="rounded-full border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-500 w-fit px-8">
                <Heart className="w-4 h-4 mr-2" />Donate Now
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-sm">© {new Date().getFullYear()} ConquestSTEM. Education is a right, not a privilege.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@luminouslogic.org" className="text-background/40 hover:text-background/70 transition-colors duration-500 text-sm flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
