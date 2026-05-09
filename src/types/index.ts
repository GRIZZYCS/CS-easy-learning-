export type MapName = 'Mirage' | 'Dust2' | 'Inferno' | 'Overpass' | 'Ancient' | 'Anubis' | 'Nuke' | 'Vertigo';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'Aim' | 'Utility' | 'Movement' | 'Comms' | 'Fundamentals';

export interface Tip {
  id: string;
  title: string;
  description: string;
  map: MapName;
  difficulty: Difficulty;
  category: Category;
  thumbnail: string;
  videoUrl: string;
  previewUrl: string;
  duration: string;
}

export interface SkillPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  estimatedTime: string;
  color: string;
}

export interface UserStats {
  rank: string;
  xp: number;
  streak: number;
  completedTips: string[];
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}
