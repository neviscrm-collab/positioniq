import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import DomainsPage from './pages/DomainsPage';
import DomainDetailPage from './pages/DomainDetailPage';
import ThreatsPage from './pages/ThreatsPage';
import ThreatDetailPage from './pages/ThreatDetailPage';
import USPsPage from './pages/USPsPage';
import USPDetailPage from './pages/USPDetailPage';
import CustomerInsights from './pages/CustomerInsights';
import ProductIntelligence from './pages/ProductIntelligence';
import MessagingFramework from './pages/MessagingFramework';
import ContentStudio from './pages/ContentStudio';
import CampaignPlanner from './pages/CampaignPlanner';
import KnowledgeGraph from './pages/KnowledgeGraph';
import CompetitivePage from './pages/CompetitivePage';
import AnalyticsPage from './pages/AnalyticsPage';

type PageId = string;

interface NavState {
  page: PageId;
  detailId?: number;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

export default function App() {
  const [nav, setNav] = useState<NavState>({ page: 'dashboard' });

  const navigate = (page: string, id?: number) => {
    setNav({ page, detailId: id });
  };

  const renderPage = () => {
    switch (nav.page) {
      case 'dashboard': return <Dashboard onNavigate={navigate} />;
      case 'domains': return <DomainsPage onNavigate={navigate} />;
      case 'domain-detail': return <DomainDetailPage domainId={nav.detailId || 1} onNavigate={navigate} />;
      case 'threats': return <ThreatsPage onNavigate={navigate} />;
      case 'threat-detail': return <ThreatDetailPage threatId={nav.detailId || 1} onNavigate={navigate} />;
      case 'usps': return <USPsPage onNavigate={navigate} />;
      case 'usp-detail': return <USPDetailPage uspId={nav.detailId || 1} onNavigate={navigate} />;
      case 'customers': return <CustomerInsights />;
      case 'products': return <ProductIntelligence onNavigate={navigate} />;
      case 'messaging': return <MessagingFramework onNavigate={navigate} />;
      case 'content': return <ContentStudio onNavigate={navigate} />;
      case 'campaigns': return <CampaignPlanner onNavigate={navigate} />;
      case 'graph': return <KnowledgeGraph onNavigate={navigate} />;
      case 'competitive': return <CompetitivePage />;
      case 'analytics': return <AnalyticsPage />;
      default: return <Dashboard onNavigate={navigate} />;
    }
  };

  const sidebarPage = nav.page.includes('-detail') ? nav.page.split('-')[0] + 's' : nav.page;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activePage={sidebarPage} onNavigate={(page) => navigate(page)} />
      <div className="flex-1 flex flex-col min-w-0 ml-60">
        <Header onNavigate={navigate} />
        <main className="flex-1 overflow-y-auto pt-14 scrollbar-hide">
          <div className="px-8 py-8 max-w-screen-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={nav.page + (nav.detailId || '')}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
