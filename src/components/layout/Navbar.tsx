import { useState, useEffect } from 'react';
import { Target, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Training', href: '#library' },
    { name: 'Pathways', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Upgrade', href: '#', highlighted: true }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tactical-bg/80 backdrop-blur-xl border-b border-tactical-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-tactical-accent rounded-sm flex items-center justify-center tactical-glow transition-transform group-hover:scale-110">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-lg leading-tight uppercase tracking-tight">Global Elite</div>
            <div className="text-[9px] font-mono text-tactical-accent font-bold uppercase tracking-[0.3em] leading-none">Academy</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-mono uppercase tracking-[0.2em] hover:text-tactical-accent transition-colors ${
                link.highlighted ? 'text-tactical-accent' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-6 pl-6 border-l border-tactical-border">
             <button className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-tactical-muted hover:text-white transition-colors">
                <User className="w-4 h-4" />
                SIGN IN
             </button>
             <button className="px-5 py-2.5 bg-tactical-accent text-white font-bold text-[10px] uppercase tracking-widest rounded-sm tactical-glow hover:bg-tactical-accent/90 transition-all">
                ENROLL NOW
             </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-tactical-card border-b border-tactical-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-mono uppercase tracking-[0.2em] ${
                link.highlighted ? 'text-tactical-accent' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 bg-tactical-accent text-white font-bold uppercase tracking-widest">
            ENROLL NOW
          </button>
        </div>
      )}
    </nav>
  );
}
