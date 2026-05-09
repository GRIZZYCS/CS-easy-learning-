import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SKILL_PATHS } from '../../data/mock';

export default function SkillPath() {
  return (
    <section className="py-24 bg-black/40 border-y border-tactical-border/50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight uppercase">Choose Your Training Track</h2>
          <p className="text-tactical-muted">Personalized learning paths designed to tackle your biggest weaknesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_PATHS.map((path, idx) => {
            const IconComponent = (Icons as any)[path.icon];
            
            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer"
              >
                <div className="h-full bg-tactical-card border border-tactical-border p-8 hover:border-tactical-accent transition-colors">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-tactical-accent transition-all" />
                  
                  <div className="w-12 h-12 rounded-sm bg-tactical-bg border border-tactical-border flex items-center justify-center mb-6 text-tactical-accent group-hover:bg-tactical-accent group-hover:text-white transition-all">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{path.title}</h3>
                  <p className="text-sm text-tactical-muted mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-tactical-accent uppercase tracking-widest bg-tactical-accent/10 px-2 py-1">
                      {path.estimatedTime}
                    </span>
                    <Icons.ArrowRight className="w-4 h-4 text-tactical-muted group-hover:text-tactical-accent transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
