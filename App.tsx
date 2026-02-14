
import React, { useState } from 'react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import AuthHub from './components/AuthHub';
import ChatDashboard from './components/ChatDashboard';
import SettingsPage from './components/SettingsPage';
import { 
  ProtocolPage, NetworkPage, SecurityPage, 
  EncryptionPage, ApiSpecsPage, NodesPage, 
  WhitepaperPage 
} from './components/InfoPages';
import { Page, User } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [user, setUser] = useState<User | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleAuthSuccess = (authenticatedUser: User) => {
    setUser(authenticatedUser);
    setCurrentPage(Page.DASHBOARD);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage(Page.LANDING);
    setShowSettings(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.LANDING:
        return (
          <LandingPage 
            onGetStarted={() => setCurrentPage(Page.AUTH)} 
            onLiveDemo={() => handleAuthSuccess({
              id: 'guest-1',
              username: 'Guest_Demo',
              email: 'guest@syncchat.io',
              avatar: 'https://picsum.photos/seed/guest/100',
              status: 'online',
              accentColor: '#39FF14',
              stats: {
                messagesSent: 0,
                roomsJoined: 1,
                uptimeMinutes: 5,
                reputation: 10
              }
            })}
            onNavigate={(page) => setCurrentPage(page)}
          />
        );
      case Page.AUTH:
        return <AuthHub onAuthSuccess={handleAuthSuccess} />;
      case Page.DASHBOARD:
        return user ? (
          <ChatDashboard 
            currentUser={user} 
            onLogout={handleLogout} 
            onOpenSettings={() => setShowSettings(true)}
          />
        ) : <AuthHub onAuthSuccess={handleAuthSuccess} />;
      case Page.PROTOCOL: return <ProtocolPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.NETWORK: return <NetworkPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.SECURITY: return <SecurityPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.ENCRYPTION: return <EncryptionPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.API_SPECS: return <ApiSpecsPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.NODES: return <NodesPage onBack={() => setCurrentPage(Page.LANDING)} />;
      case Page.WHITEPAPER: return <WhitepaperPage onBack={() => setCurrentPage(Page.LANDING)} />;
      default:
        return <LandingPage onGetStarted={() => setCurrentPage(Page.AUTH)} onLiveDemo={() => {}} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout>
      {renderContent()}
      {showSettings && user && (
        <SettingsPage 
          user={user} 
          onClose={() => setShowSettings(false)} 
          onLogout={handleLogout}
          onUpdateUser={(updates) => setUser(prev => prev ? { ...prev, ...updates } : null)}
        />
      )}
    </Layout>
  );
};

export default App;
