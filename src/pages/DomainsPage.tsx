import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, ArrowRight, BarChart3 } from 'lucide-react';
import { domains } from '../data/mockData';
import ScoreRing from '../components/ui/ScoreRing';

interface Props { onNavigate: (page: string, id?: number) => void; }

export default function DomainsPage({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const filtered = domains.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900">Domain Intelligence</h1>
        <p className="text-gray-500 mt-2 text-lg">Identify where your product has the strongest market fit and positioning opportunities.</p>
      </motion.div>

      {/* Summary strip */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Domains', value: '32', icon: '🌍' },
          { label: 'High Opportunity', value: '8', icon: '🎯' },
          { label: 'Content Gaps', value: '284', icon: '📝' },
          { label: 'Avg. Opp. Score', value: '86', icon: '📊' },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center gap-3">
            <span className="text-2xl">{s.icon}</span>
            <div>
              <div className="text-xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 max-w-md">
        <Search className="w-4 h-4 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search domains..." className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400" />
      </div>

      {/* Domain Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((domain, i) => (
          <motion.div
            key={domain.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }}
            whileHover={{ y: -4, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.1)' }}
            onClick={() => onNavigate('domain-detail', domain.id)}
            className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer group transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl" style={{ backgroundColor: domain.bgColor }}>
                  {domain.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{domain.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-600">{domain.growth}</span>
                  </div>
                </div>
              </div>
              <ScoreRing score={domain.opportunityScore} size={44} color={domain.color} label="Score" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { icon: Users, label: 'Customers', value: domain.customers.toLocaleString() },
                { icon: BarChart3, label: 'Revenue', value: domain.revenue },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-2.5">
                  <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm font-bold text-gray-800">{value}</div>
                </div>
              ))}
            </div>

            {/* Bottom metrics */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Threat Exposure</span>
                <span className="text-xs font-semibold text-red-500">{domain.threatExposure}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-red-400" style={{ width: `${domain.threatExposure}%` }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Content Opportunities</span>
                <span className="text-xs font-semibold" style={{ color: domain.color }}>{domain.contentOpportunities}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">Top USP: <span className="text-gray-600 font-medium">{domain.topUSP}</span></span>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
