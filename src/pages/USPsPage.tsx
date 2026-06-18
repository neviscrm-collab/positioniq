import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, ArrowRight, Users, DollarSign } from 'lucide-react';
import { usps } from '../data/mockData';
import ScoreRing from '../components/ui/ScoreRing';

interface Props { onNavigate: (page: string, id?: number) => void; }

export default function USPsPage({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const sorted = [...usps].sort((a, b) => b.score - a.score).filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">USP Discovery</h1>
          <p className="text-violet-100 text-lg">Identify the differentiated capabilities that drive wins, expansion, and revenue.</p>
          <div className="flex gap-4 mt-5">
            {[{ v: '148', l: 'Proven USPs' }, { v: '74%', l: 'Best Win Rate' }, { v: '$42.5M', l: 'Revenue Influenced' }, { v: '1,284', l: 'Content Gaps' }].map(({ v, l }) => (
              <div key={l} className="bg-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-xl font-bold">{v}</div>
                <div className="text-xs text-violet-200">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 max-w-md">
        <Search className="w-4 h-4 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search USPs..." className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {sorted.map((usp, i) => (
          <motion.div
            key={usp.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }}
            whileHover={{ y: -3, boxShadow: '0 20px 40px -10px rgba(139, 92, 246, 0.12)' }}
            onClick={() => onNavigate('usp-detail', usp.id)}
            className="bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer group transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 pr-4">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-violet-700 transition-colors leading-snug mb-2">{usp.name}</h3>
                <div className="flex flex-wrap gap-1">
                  {usp.industries.slice(0, 2).map(ind => (
                    <span key={ind} className="text-[10px] bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full font-medium">{ind}</span>
                  ))}
                </div>
              </div>
              <ScoreRing score={usp.score} size={52} color="#8b5cf6" label="Score" />
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center p-2 bg-gray-50 rounded-xl">
                <div className="text-sm font-bold text-gray-800">{usp.winRate}%</div>
                <div className="text-[10px] text-gray-400">Win Rate</div>
              </div>
              <div className="text-center p-2 bg-green-50 rounded-xl">
                <div className="text-sm font-bold text-green-600">{usp.revenueInfluence}</div>
                <div className="text-[10px] text-gray-400">Revenue</div>
              </div>
              <div className="text-center p-2 bg-blue-50 rounded-xl">
                <div className="text-sm font-bold text-blue-600">{usp.customers.toLocaleString()}</div>
                <div className="text-[10px] text-gray-400">Customers</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">Score</span>
                <span className="font-medium text-violet-600">{usp.score}/100</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-500" style={{ width: `${usp.score}%` }} />
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-400">{usp.contentOpportunities} content opportunities</span>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-violet-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
