import { motion } from 'motion/react';
import { Zap, Trophy, Target, Award, TrendingUp, Calendar } from 'lucide-react';

export default function Dashboard() {
  const stats = {
    rank: 'Gold Nova II',
    xp: 2450,
    maxXp: 5000,
    streak: 5,
    rankIcon: 'https://www.csgo.com.cn/images/rank/rank9.png', // Generic rank icon placeholder
  };

  const recentAchievements = [
    { id: '1', name: 'First Smoke Landed', date: '2 days ago', icon: 'Target' },
    { id: '2', name: '10 Tips Done', date: 'Yesterday', icon: 'Award' },
    { id: '3', name: 'Utility Master', date: 'Today', icon: 'Zap' },
  ];

  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: User Profile & Rank */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-tactical-card border border-tactical-border/80 p-8 rounded-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2">
                <div className="w-2 h-2 rounded-full bg-tactical-green animate-pulse" />
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-tactical-bg border-4 border-tactical-border flex items-center justify-center overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=tactical" alt="Avatar" className="w-full h-full" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-tactical-accent px-2 py-0.5 text-[10px] font-mono font-bold">LVL 14</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">Recruit_One</h3>
                  <p className="text-tactical-muted font-mono text-[10px] uppercase tracking-widest">Enrolled 12 days ago</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                   <span className="text-tactical-muted">Current Rank</span>
                   <span className="text-white">{stats.rank}</span>
                </div>
                <div className="h-24 bg-tactical-bg/50 border border-tactical-border flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tactical-accent font-mono mb-1">GN-2</div>
                    <div className="w-full h-1 bg-tactical-border overflow-hidden mt-2">
                      <div className="w-2/3 h-full bg-tactical-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tactical-card border border-tactical-border/80 p-8 rounded-sm">
               <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-tactical-accent" />
                Achievement Unlocks
              </h4>
              <div className="space-y-4">
                {recentAchievements.map((ach) => (
                  <div key={ach.id} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-sm bg-tactical-bg border border-tactical-border flex items-center justify-center group-hover:border-tactical-accent transition-colors">
                      <Award className="w-5 h-5 text-tactical-muted group-hover:text-tactical-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-bold uppercase tracking-wide">{ach.name}</div>
                      <div className="text-[10px] text-tactical-muted font-mono">{ach.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Progress & Tree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* XP and Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-tactical-card border border-tactical-border/60 p-6 flex items-center gap-4">
                <Zap className="w-8 h-8 text-tactical-accent" />
                <div>
                  <div className="text-2xl font-bold font-mono tracking-tighter">{stats.xp}</div>
                  <div className="text-[10px] text-tactical-muted uppercase tracking-widest">Total XP Earned</div>
                </div>
              </div>
              <div className="bg-tactical-card border border-tactical-border/60 p-6 flex items-center gap-4">
                <Calendar className="w-8 h-8 text-tactical-green" />
                <div>
                  <div className="text-2xl font-bold font-mono tracking-tighter">{stats.streak} Days</div>
                  <div className="text-[10px] text-tactical-muted uppercase tracking-widest">Current Streak</div>
                </div>
              </div>
              <div className="bg-tactical-card border border-tactical-border/60 p-6 flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-tactical-accent" />
                <div>
                  <div className="text-2xl font-bold font-mono tracking-tighter">72%</div>
                  <div className="text-[10px] text-tactical-muted uppercase tracking-widest">Course Completion</div>
                </div>
              </div>
            </div>

            {/* Skill Tree Visual Mock */}
            <div className="bg-tactical-card border border-tactical-border/80 p-8 rounded-sm relative">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Evolution Skill Tree</h4>
              <div className="flex flex-col items-center gap-12 py-8 relative">
                 {/* Connection Lines (Visual SVG) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <line x1="50%" y1="20%" x2="30%" y2="50%" stroke="white" strokeWidth="2" strokeDasharray="4" />
                    <line x1="50%" y1="20%" x2="70%" y2="50%" stroke="white" strokeWidth="2" strokeDasharray="4" />
                    <line x1="30%" y1="50%" x2="30%" y2="80%" stroke="white" strokeWidth="2" strokeDasharray="4" />
                 </svg>

                 {/* Root */}
                 <div className="w-16 h-16 rounded-full bg-tactical-accent border-4 border-black tactical-glow flex items-center justify-center z-10">
                    <Target className="w-8 h-8 text-white" />
                 </div>
                 
                 {/* Tier 1 */}
                 <div className="flex justify-center gap-24 sm:gap-40 w-full z-10">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-14 h-14 rounded-full bg-tactical-bg border-4 border-tactical-accent flex items-center justify-center">
                          <Zap className="w-6 h-6 text-tactical-accent" />
                       </div>
                       <span className="text-[10px] font-mono uppercase tracking-tighter">Aim I</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-14 h-14 rounded-full bg-tactical-bg border-2 border-tactical-border flex items-center justify-center opacity-50">
                          <Zap className="w-6 h-6 text-tactical-muted" />
                       </div>
                       <span className="text-[10px] font-mono uppercase tracking-tighter text-tactical-muted">Utility I</span>
                    </div>
                 </div>

                 {/* Tier 2 */}
                 <div className="flex justify-center w-full z-10">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-14 h-14 rounded-full bg-tactical-bg border-2 border-tactical-border flex items-center justify-center opacity-30">
                          <Trophy className="w-6 h-6 text-tactical-muted" />
                       </div>
                       <span className="text-[10px] font-mono uppercase tracking-tighter text-tactical-muted underline decoration-tactical-accent decoration-2 underline-offset-4">Advanced Tactics</span>
                    </div>
                 </div>
              </div>
              <div className="text-center mt-6">
                <button className="text-[10px] font-mono text-tactical-accent uppercase tracking-widest hover:underline">View Roadmap</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
