import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Play, Bookmark, Clock, MapPin } from 'lucide-react';
import { MOCK_TIPS } from '../../data/mock';
import { MapName, Difficulty, Category } from '../../types';

export default function TipsLibrary() {
  const [search, setSearch] = useState('');
  const [selectedMap, setSelectedMap] = useState<MapName | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  const filteredTips = useMemo(() => {
    return MOCK_TIPS.filter(tip => {
      const matchesSearch = tip.title.toLowerCase().includes(search.toLowerCase()) || 
                           tip.description.toLowerCase().includes(search.toLowerCase());
      const matchesMap = selectedMap === 'All' || tip.map === selectedMap;
      const matchesCategory = selectedCategory === 'All' || tip.category === selectedCategory;
      return matchesSearch && matchesMap && matchesCategory;
    });
  }, [search, selectedMap, selectedCategory]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  return (
    <section className="py-24" id="library">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 uppercase tracking-tight">Tactical Library</h2>
            <p className="text-tactical-muted">Filter through our high-performance utility and movement guides.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-1 sm:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-tactical-muted group-focus-within:text-tactical-accent transition-colors" />
              <input
                type="text"
                placeholder="Search tips, maps, or utility..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-tactical-card border border-tactical-border rounded-sm outline-none focus:border-tactical-accent font-mono text-sm uppercase tracking-wider"
              />
            </div>
            <div className="flex gap-2">
               <select 
                value={selectedMap}
                onChange={(e) => setSelectedMap(e.target.value as any)}
                className="px-4 py-3 bg-tactical-card border border-tactical-border rounded-sm outline-none focus:border-tactical-accent font-mono text-xs uppercase tracking-wider cursor-pointer h-full"
              >
                <option value="All">All Maps</option>
                <option value="Mirage">Mirage</option>
                <option value="Dust2">Dust2</option>
                <option value="Inferno">Inferno</option>
                <option value="Ancient">Ancient</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTips.map((tip, idx) => (
              <motion.div
                key={tip.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group bg-tactical-card border border-tactical-border hover:border-tactical-accent/50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tip.thumbnail}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-tactical-accent flex items-center justify-center tactical-glow">
                      <Play className="w-6 h-6 text-white ml-1 fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white border border-white/20 uppercase tracking-widest">
                      {tip.category}
                    </span>
                    <span className={`px-2 py-1 bg-black/60 backdrop-blur-sm text-[10px] font-mono border uppercase tracking-widest ${
                      tip.difficulty === 'Beginner' ? 'text-tactical-green border-tactical-green/50' : 'text-tactical-accent border-tactical-accent/50'
                    }`}>
                      {tip.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-[10px] font-mono text-white flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {tip.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold uppercase tracking-wide leading-tight group-hover:text-tactical-accent transition-colors">
                      {tip.title}
                    </h3>
                    <button 
                      onClick={() => toggleBookmark(tip.id)}
                      className={`shrink-0 p-2 rounded-sm border transition-all ${
                        bookmarks.includes(tip.id) 
                        ? 'bg-tactical-accent border-tactical-accent text-white' 
                        : 'bg-tactical-bg border-tactical-border text-tactical-muted hover:border-tactical-accent'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarks.includes(tip.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <p className="text-sm text-tactical-muted mb-6 line-clamp-2 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-tactical-border/50 text-[10px] font-mono text-tactical-muted uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {tip.map}
                    </div>
                    <span>•</span>
                    <button className="hover:text-tactical-accent transition-colors ml-auto">
                      View full guide
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredTips.length === 0 && (
          <div className="py-20 text-center border border-dashed border-tactical-border">
            <p className="text-tactical-muted font-mono uppercase tracking-widest">No tactics found matching your filters.</p>
            <button 
              onClick={() => {setSearch(''); setSelectedMap('All'); setSelectedCategory('All');}}
              className="mt-4 text-tactical-accent hover:underline text-sm uppercase tracking-widest font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
