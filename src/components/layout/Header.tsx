import React, { useState } from 'react';
import { Search, Plus, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { threats, domains, usps, products } from '../../data/mockData';

const searchResults = [
  ...threats.slice(0, 3).map(t => ({ type: 'Threat', name: t.name, sub: t.industry, icon: '🛡️' })),
  ...domains.slice(0, 2).map(d => ({ type: 'Domain', name: d.name, sub: `${d.customers} customers`, icon: d.icon })),
  ...usps.slice(0, 2).map(u => ({ type: 'USP', name: u.name, sub: `${u.winRate}% win rate`, icon: '⭐' })),
  ...products.slice(0, 2).map(p => ({ type: 'Product', name: p.name, sub: `${p.customers.toLocaleString()} customers`, icon: '💻' })),
];

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  const filtered = query.length > 1
    ? searchResults.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.type.toLowerCase().includes(query.toLowerCase()))
    : searchResults;

  return (
    <header className="fixed top-0 left-60 right-0 h-14 bg-white/90 backdrop-blur-xl border-b border-gray-100 flex items-center px-6 gap-4 z-30">
      {/* Search */}
      <div className="flex-1 max-w-xl relative">
        <div className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all duration-200 bg-gray-50 ${focused ? 'border-indigo-300 bg-white shadow-sm shadow-indigo-100' : 'border-gray-200'}`}>
          <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Search threats, domains, USPs, content..."
            className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          {query && (
            <button onClick={() => setQuery('')}><X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" /></button>
          )}
          <kbd className="hidden sm:flex text-[10px] text-gray-400 bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5 font-mono">⌘K</kbd>
        </div>
        <AnimatePresence>
          {focused && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
            >
              <div className="p-2">
                {['Threat', 'Domain', 'USP', 'Product'].map(type => {
                  const items = filtered.filter(r => r.type === type);
                  if (!items.length) return null;
                  return (
                    <div key={type} className="mb-1">
                      <div className="px-2 py-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{type}s</div>
                      {items.map(item => (
                        <button key={item.name} onMouseDown={() => { onNavigate(type.toLowerCase() === 'threat' ? 'threats' : type.toLowerCase() === 'domain' ? 'domains' : type.toLowerCase() === 'usp' ? 'usps' : 'products'); setQuery(''); }} className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 text-left">
                          <span className="text-base">{item.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.sub}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors font-medium">
          <Plus className="w-3.5 h-3.5" />
          New Snapshot
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg hover:from-indigo-600 hover:to-violet-700 transition-all font-medium shadow-sm shadow-indigo-200">
          <Sparkles className="w-3.5 h-3.5" />
          Generate Campaign
        </button>
      </div>
    </header>
  );
}
