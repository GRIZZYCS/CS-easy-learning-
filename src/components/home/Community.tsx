import { motion } from 'motion/react';
import { Star, MessageSquare, Upload, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Alex R.',
    from: 'Silver Elite',
    to: 'Gold Nova Master',
    text: "The Mirage utility guides changed my game. I used to just run in and die, now I'm the one setting up the site takes.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
  },
  {
    id: '2',
    name: 'Sarah K.',
    from: 'Unranked',
    to: 'Gold Nova I',
    text: "Clear, concise, and actually helpful. The aim drills are my daily routine now. Best decision I made for my CS2 rank.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  }
];

export default function Community() {
  return (
    <section className="py-24 bg-tactical-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Ranked Results</h2>
            <p className="text-tactical-muted mb-12">Hear from players who went from casual to competitive.</p>
            
            <div className="space-y-6">
              {TESTIMONIALS.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-tactical-card border border-tactical-border p-8 rounded-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tactical-accent text-tactical-accent" />
                    ))}
                  </div>
                  <p className="text-lg italic text-white/90 mb-6 italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-tactical-border/50">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-tactical-border" />
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wide">{t.name}</div>
                      <div className="text-[10px] font-mono text-tactical-accent uppercase tracking-widest flex items-center gap-2">
                        {t.from} <span className="text-tactical-muted">→</span> {t.to}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social & UGC */}
          <div className="space-y-8">
            <div className="bg-tactical-accent p-10 rounded-sm tactical-glow">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4">Join the Discord</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Get 24/7 support from veteran players, find teammates, and participate in weekly community 5v5s.</p>
              <button className="w-full py-4 bg-white text-tactical-accent font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                <MessageSquare className="w-5 h-5" />
                JOIN COMMUNITY
              </button>
            </div>

            <div className="bg-tactical-card border border-tactical-border p-8 rounded-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">Submit Your Clip</h3>
                <Upload className="w-5 h-5 text-tactical-muted" />
              </div>
              <p className="text-sm text-tactical-muted mb-6">Got a play you're proud of? Submit it for a chance to be featured in our weekly "Pro Breakdown" series.</p>
              <div className="border-2 border-dashed border-tactical-border p-8 rounded-sm text-center hover:border-tactical-accent transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-tactical-be border border-tactical-border rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tactical-accent group-hover:text-white transition-all">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest">Drop clip here (MP4/WebM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
