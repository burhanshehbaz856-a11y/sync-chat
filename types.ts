
export enum Page {
  LANDING = 'landing',
  AUTH = 'auth',
  DASHBOARD = 'dashboard',
  PROTOCOL = 'protocol',
  NETWORK = 'network',
  SECURITY = 'security',
  ENCRYPTION = 'encryption',
  API_SPECS = 'api-specs',
  NODES = 'nodes',
  WHITEPAPER = 'whitepaper'
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  banner?: string;
  status: 'online' | 'offline' | 'away' | 'busy';
  customStatus?: string;
  accentColor: string;
  bio?: string;
  socials?: {
    github?: string;
    twitter?: string;
    website?: string;
  };
  stats: {
    messagesSent: number;
    roomsJoined: number;
    uptimeMinutes: number;
    reputation: number;
  };
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: number;
  roomId: string;
  isAi?: boolean;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  userCount: number;
  messages: Message[];
  category: 'public' | 'private' | 'dev' | 'design';
  isVerified?: boolean;
}
