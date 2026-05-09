import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, FileText } from 'lucide-react';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 border-t border-tactical-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-tactical-accent/5 skew-x-[-12deg] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto bg-tactical-card border border-tactical-border p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          {/* Offer */}
          <div className="flex-1">
            <div className="w-16 h-16 bg-tactical-accent/10 border border-tactical-accent/20 flex items-center justify-center mb-8">
              <FileText className="w-8 h-8 text-tactical-accent" />
            </div>
            <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">Master the Basics</h2>
            <p className="text-tactical-muted mb-8 leading-relaxed">
              Get our exclusive guide: <span className="text-white font-bold italic">"Top 10 CS2 Mistakes New Players Make"</span> delivered to your inbox instantly.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Economy management secrets',
                'Perfect crosshair placement guide',
                'Essential bind scripts for beginners'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.05em] text-tactical-muted">
                  <CheckCircle2 className="w-4 h-4 text-tactical-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="w-full md:w-96">
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-tactical-muted group-focus-within:text-tactical-accent" />
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-tactical-bg border border-tactical-border outline-none focus:border-tactical-accent font-mono text-sm uppercase tracking-widest placeholder:text-tactical-muted/40 transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-tactical-accent text-white font-bold uppercase tracking-[0.2em] hover:bg-tactical-accent/90 transition-all tactical-glow flex items-center justify-center gap-2"
                >
                  GET THE GUIDE
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-tactical-muted uppercase tracking-widest leading-relaxed">
                  Join 12,000+ players. No spam. Level up your rank every Friday.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-tactical-green/10 border border-tactical-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-tactical-green" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Check Your Inbox!</h3>
                <p className="text-sm text-tactical-muted uppercase tracking-widest font-mono">Guide is on its way.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
