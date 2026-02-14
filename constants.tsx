
import React from 'react';
import { Room, User } from './types';

export const COLORS = {
  bg: '#111',
  neon: '#39FF14',
  gray: '#222',
  lightGray: '#444',
  white: '#FFFFFF',
};

export const INITIAL_ROOMS: Room[] = [
  { id: 'general', name: 'General', description: 'The hub for global sync communication.', userCount: 1240, messages: [], category: 'public', isVerified: true },
  { id: 'dev-talk', name: 'Dev-Talk', description: 'Binary discussions and neural link debugging.', userCount: 452, messages: [], category: 'dev' },
  { id: 'design-sync', name: 'Design-Sync', description: 'Vector alignments and aesthetic synchronization.', userCount: 210, messages: [], category: 'design' },
  { id: 'ai-lab', name: 'AI-Lab', description: 'Testing the boundaries of @SyncBot intelligence.', userCount: 89, messages: [], category: 'dev', isVerified: true },
];

export const MOCK_USERS: User[] = [
  { 
    id: 'user-1', 
    username: 'CyberPunk', 
    email: 'cyber@sync.io',
    avatar: 'https://picsum.photos/seed/user1/100', 
    status: 'online', 
    accentColor: '#39FF14',
    bio: 'Lost in the digital ether. Architect of the neon skyline.',
    stats: { messagesSent: 1240, roomsJoined: 12, uptimeMinutes: 4500, reputation: 98 }
  },
  { 
    id: 'user-2', 
    username: 'NeonGhost', 
    email: 'ghost@sync.io',
    avatar: 'https://picsum.photos/seed/user2/100', 
    status: 'online', 
    accentColor: '#00D1FF',
    bio: 'I only exist in the cache.',
    stats: { messagesSent: 890, roomsJoined: 5, uptimeMinutes: 1200, reputation: 75 }
  },
  { 
    id: 'user-3', 
    username: 'SynthWave', 
    email: 'synth@sync.io',
    avatar: 'https://picsum.photos/seed/user3/100', 
    status: 'away', 
    accentColor: '#FF00E5',
    bio: 'Retro-futurism is the only way forward.',
    stats: { messagesSent: 45, roomsJoined: 2, uptimeMinutes: 150, reputation: 12 }
  },
];
