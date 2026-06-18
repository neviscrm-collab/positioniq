import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Shield, Swords } from 'lucide-react';
// @ts-ignore
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { competitors } from '../data/mockData';

const radarData = [
  { subject: 'Ease of Use', ManageEngine: 92, CrowdStrike: 62, Microsoft: 74 },
  { subject: 'Price/Value', ManageEngine: 88, CrowdStrike: 44, Microsoft: 67 },
  { subject: 'Integration', ManageEngine: 85, CrowdStrike: 78, Microsoft: 89 },
  { subject: 'Support', ManageEngine: 90, CrowdStrike: 71, Microsoft: 65 },
  { subject: 'Automation', ManageEngine: 87, CrowdStrike: 83, Microsoft: 72 },
  { subject: 'Reporting', ManageEngine: 84, CrowdStrike: 76, Microsoft: 80 },
];

const winMessages = [
  { scenario: 'vs CrowdStrike on cost', message: 'ManageEngine delivers enterprise-grade endpoint protection at 40% of the cost, with faster time-to-value and no professional services required.', wins: 42 },
  { scenario: 'vs Microsoft Intune on cross-platform', message: 'Unlike Intune, ManageEngine manages Windows, Mac, Linux, iOS, Android, and ChromeOS from a single console — no additional licensing required.', wins: 67 },
  { scenario: 'vs Tenable on remediation', message: 'Tenable tells you about vulnerabilities. ManageEngine fixes them automatically. Our scan-to-patch automation eliminates the manual work.', wins: 55 },
  { scenario: 'vs CyberArk on time-to-value', message: 'CyberArk takes 6-9 months to deploy. ManageEngine PAM360 can be live in 2 weeks, with full feature parity at 60% of the cost.', wins: 38 },
];

export default function CompetitivePage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900">Competitive Intelligence</h1>
        <p className="text-gray-500 mt-1 text-lg">Win-rate analysis, differentiators, and battle-tested messaging.</p>
      </motion.div>

      {/* Win/Loss Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {competitors.map((comp, i) => (
          <motion.div key={comp.id}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}
            className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer transition-all">
            <div className="text-sm font-bold text-gray-900 mb-3">{comp.name}</div>
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-400">Win Rate</span>
                <span className={`font-bold ${comp.winRate >= 50 ? 'text-emerald-600' : 'text-red-500'}`}>{comp.winRate}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="h-2 rounded-full" style={{ width: `${comp.winRate}%`, backgroundColor: comp.winRate >= 50 ? '#10b981' : '#ef4444' }} />
              </div>
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              {comp.winRate >= 50 ? <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> : <TrendingDown className="w-3.5 h-3.5 text-red-400" />}
              <span className="text-xs text-gray-500">{comp.deals} deals analyzed</span>
            </div>
            <div className="text-[10px] text-gray-400 bg-green-50 rounded-lg p-1.5 font-medium text-green-700">
              ✓ {comp.ourAdvantage}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Radar Chart */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Capability Comparison</h3>
            <p className="text-sm text-gray-500 mt-0.5">ManageEngine vs top competitors across key dimensions</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            {[{ name: 'ManageEngine', color: '#6366f1' }, { name: 'CrowdStrike', color: '#ef4444' }, { name: 'Microsoft', color: '#0ea5e9' }].map(c => (
              <div key={c.name} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-gray-600 font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          {/* @ts-ignore */}
          <RadarChart data={radarData}>
            {/* @ts-ignore */}
            <PolarGrid stroke="#f1f5f9" />
            {/* @ts-ignore */}
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#64748b' }} />
            {/* @ts-ignore */}
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
            {/* @ts-ignore */}
            <Radar name="ManageEngine" dataKey="ManageEngine" stroke="#6366f1" fill="#6366f1" fillOpacity={0.15} strokeWidth={2} />
            {/* @ts-ignore */}
            <Radar name="CrowdStrike" dataKey="CrowdStrike" stroke="#ef4444" fill="#ef4444" fillOpacity={0.08} strokeWidth={1.5} />
            {/* @ts-ignore */}
            <Radar name="Microsoft" dataKey="Microsoft" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.08} strokeWidth={1.5} />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Winning Messages */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <h3 className="text-base font-semibold text-gray-900 mb-4">Winning Messages</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {winMessages.map((msg, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }}
              className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Swords className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{msg.scenario}</span>
                <span className="ml-auto text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">{msg.wins} wins</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{msg.message}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
