import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Globe, Shield, Star, Users, Cpu,
  MessageSquare, FileText, Megaphone, Share2, Swords,
  BarChart3, Bell, Settings, ChevronRight, Zap
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Executive Dashboard', icon: LayoutDashboard },
  { id: 'domains', label: 'Domain Intelligence', icon: Globe },
  { id: 'threats', label: 'Threats & Incidents', icon: Shield },
  { id: 'usps', label: 'USP Discovery', icon: Star },
  { id: 'customers', label: 'Customer Insights', icon: Users },
  { id: 'products', label: 'Product Intelligence', icon: Cpu },
  { id: 'messaging', label: 'Messaging Framework', icon: MessageSquare },
  { id: 'content', label: 'Content Studio', icon: FileText },
  { id: 'campaigns', label: 'Campaign Planner', icon: Megaphone },
  { id: 'graph', label: 'Knowledge Graph', icon: Share2 },
  { id: 'competitive', label: 'Competitive Intel', icon: Swords },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-full w-60 bg-white border-r border-gray-100 flex flex-col z-40">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <button onClick={() => onNavigate('dashboard')} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="text-sm font-bold text-gray-900 tracking-tight">PositionIQ</span>
            <div className="text-[10px] text-gray-400 font-medium leading-none mt-0.5">Intelligence Platform</div>
          </div>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              whileHover={{ x: 2 }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-150 group ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
              <span className={`text-sm font-medium truncate ${isActive ? 'text-indigo-700' : ''}`}>{item.label}</span>
              {isActive && <ChevronRight className="w-3 h-3 text-indigo-400 ml-auto" />}
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 pt-3 border-t border-gray-100 space-y-0.5">
        {[
          { icon: Bell, label: 'Notifications', badge: 3 },
          { icon: Settings, label: 'Settings' },
        ].map(({ icon: Icon, label, badge }) => (
          <button key={label} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors">
            <Icon className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">{label}</span>
            {badge && <span className="ml-auto bg-indigo-100 text-indigo-600 text-xs font-semibold px-1.5 py-0.5 rounded-full">{badge}</span>}
          </button>
        ))}
        <div className="flex items-center gap-3 px-3 py-2 mt-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold">N</div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-gray-800 truncate">Nevis P.</div>
            <div className="text-[10px] text-gray-400 truncate">Product Marketing</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
