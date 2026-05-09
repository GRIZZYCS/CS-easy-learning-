import { Tip, SkillPath } from '../types';

export const SKILL_PATHS: SkillPath[] = [
  {
    id: 'fundamentals',
    title: 'Beginner Fundamentals',
    description: 'Master crosshair placement, economy, and basic movement.',
    icon: 'Target',
    estimatedTime: '45 mins',
    color: 'orange'
  },
  {
    id: 'maps',
    title: 'Map-Specific',
    description: 'Learn essential smokes and flashbangs for active duty maps.',
    icon: 'Map',
    estimatedTime: '120 mins',
    color: 'green'
  },
  {
    id: 'aim',
    title: 'Aim Training',
    description: 'Daily drills to improve your flicking and spray control.',
    icon: 'Crosshair',
    estimatedTime: '30 mins',
    color: 'blue'
  },
  {
    id: 'gamesense',
    title: 'Game Sense',
    description: 'Understand rotations, timing, and mid-round decision making.',
    icon: 'Brain',
    estimatedTime: '60 mins',
    color: 'purple'
  }
];

export const MOCK_TIPS: Tip[] = [
  {
    id: '1',
    title: 'Mirage: Window Smoke from T-Spawn',
    description: 'The most essential smoke for any Mirage A-take or mid control.',
    map: 'Mirage',
    difficulty: 'Beginner',
    category: 'Utility',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400',
    duration: '0:30'
  },
  {
    id: '2',
    title: 'Dust2: Xbox Smoke from Lower Tunnels',
    description: 'Quickly block off mid vision to safely cross to short.',
    map: 'Dust2',
    difficulty: 'Beginner',
    category: 'Utility',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400',
    duration: '0:45'
  },
  {
    id: '3',
    title: 'Inferno: Moto Smoke from Banana',
    description: 'Execute A-site with this perfect smoke covering library/moto.',
    map: 'Inferno',
    difficulty: 'Intermediate',
    category: 'Utility',
    thumbnail: 'https://images.unsplash.com/photo-1614018424553-29cf189d9511?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1614018424553-29cf189d9511?auto=format&fit=crop&q=80&w=400',
    duration: '0:30'
  },
  {
    id: '4',
    title: 'Counter-Strafing Fundamentals',
    description: 'Learn how to stop instantly for perfect first-bullet accuracy.',
    map: 'Mirage',
    difficulty: 'Beginner',
    category: 'Movement',
    thumbnail: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=400',
    duration: '2:15'
  },
  {
    id: '5',
    title: 'Post-Plant Comms: 2v2 Scenarios',
    description: 'How to communicate effectively when the bomb is down.',
    map: 'Dust2',
    difficulty: 'Beginner',
    category: 'Comms',
    thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=400',
    duration: '5:00'
  },
  {
    id: '6',
    title: 'Spray Control: AK-47 Masterclass',
    description: 'The recoil pattern of the most iconic weapon in CS2.',
    map: 'Ancient',
    difficulty: 'Intermediate',
    category: 'Aim',
    thumbnail: 'https://images.unsplash.com/photo-1533134486753-c8176983533c?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    previewUrl: 'https://images.unsplash.com/photo-1533134486753-c8176983533c?auto=format&fit=crop&q=80&w=400',
    duration: '3:30'
  }
];
