import { Target, Youtube, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-tactical-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tactical-accent rounded-sm flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-lg uppercase tracking-tight">Global Elite Academy</div>
            </div>
            <p className="text-sm text-tactical-muted leading-relaxed">
              The premier CS2 training platform for non-rankers and silver players. Build your path to Global Elite today.
            </p>
            <div className="flex gap-4">
              {[Youtube, Twitter, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-tactical-card border border-tactical-border flex items-center justify-center hover:border-tactical-accent hover:text-tactical-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-tactical-accent mb-8">Curriculum</h4>
            <ul className="space-y-4">
              {['Fundamentals', 'Utilities', 'Movement', 'Aim Training'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-tactical-muted hover:text-white transition-colors flex items-center justify-between group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-tactical-accent mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Map Guides', 'Patch Notes', 'Pro Breakdowns', 'Rank Calculator'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-tactical-muted hover:text-white transition-colors flex items-center justify-between group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-tactical-accent mb-8">Quick Digest</h4>
            <p className="text-sm text-tactical-muted mb-6">Weekly pro tips and rank-up notifications.</p>
            <form className="relative group">
               <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-tactical-card border border-tactical-border py-4 px-4 outline-none focus:border-tactical-accent font-mono text-[10px] uppercase tracking-widest"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-tactical-accent flex items-center justify-center text-white">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-tactical-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-tactical-muted uppercase tracking-widest">
            © 2026 GLOBAL ELITE ACADEMY. NOT AFFILIATED WITH VALVE CORP.
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-tactical-muted uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
