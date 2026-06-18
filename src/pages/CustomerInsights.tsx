import React from 'react';
import { motion } from 'framer-motion';
import { Quote, TrendingUp, Star, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { customerStories, domains } from '../data/mockData';

const painPoints = [
  { name: 'Manual Patching', count: 2847, pct: 94 },
  { name: 'Compliance Gaps', count: 2341, pct: 78 },
  { name: 'Endpoint Visibility', count: 2108, pct: 70 },
  { name: 'Identity Sprawl', count: 1876, pct: 62 },
  { name: 'Alert Fatigue', count: 1654, pct: 55 },
  { name: 'Third-Party Risk', count: 1432, pct: 48 },
];

const outcomes = [
  { name: 'Reduced patch time', pct: 87, color: '#6366f1' },
  { name: 'Achieved compliance', pct: 74, color: '#10b981' },
  { name: 'Zero successful attacks', pct: 62, color: '#0ea5e9' },
  { name: 'Reduced tool sprawl', pct: 58, color: '#8b5cf6' },
  { name: 'Cut security costs', pct: 51, color: '#f59e0b' },
];

const segmentData = domains.slice(0, 6).map(d => ({ name: d.name.split(' ')[0], customers: d.customers }));

export default function CustomerInsights() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900">Customer Insights</h1>
        <p className="text-gray-500 mt-1 text-lg">Mine intelligence from 12,542 customers to discover what drives wins, expansions, and loyalty.</p>
      </motion.div>

      {/* Top Pain Points */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-5">Top Customer Pain Points</h3>
        <div className="space-y-3">
          {painPoints.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.04 }}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-gray-700">{p.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-xs">{p.count.toLocaleString()} customers</span>
                  <span className="font-bold text-indigo-600">{p.pct}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <motion.div initial={{ width: 0 }} animate={{ width: `${p.pct}%` }} transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: 'easeOut' }}
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Outcomes */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-5">Most Successful Outcomes</h3>
          <div className="space-y-4">
            {outcomes.map((o, i) => (
              <div key={o.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5" style={{ color: o.color }} />
                    <span className="font-medium text-gray-700">{o.name}</span>
                  </div>
                  <span className="font-bold" style={{ color: o.color }}>{o.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="h-1.5 rounded-full" style={{ width: `${o.pct}%`, backgroundColor: o.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Segments */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-5">Customer Distribution by Domain</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={segmentData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(v: any) => v.toLocaleString()} />
              <Bar dataKey="customers" name="Customers" radius={[4, 4, 0, 0]}>
                {segmentData.map((_, i) => <Cell key={i} fill={domains[i].color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Customer Stories */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h3 className="text-base font-semibold text-gray-900 mb-4">Customer Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customerStories.map((story, i) => (
            <motion.div key={story.id}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.05 }}
              whileHover={{ y: -3, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-sm font-bold text-indigo-600">
                  {story.company[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{story.company}</div>
                  <div className="text-xs text-gray-400">{story.domain} · {story.size}</div>
                </div>
              </div>
              <div className="text-sm font-semibold text-indigo-600 mb-3">{story.outcome}</div>
              <Quote className="w-5 h-5 text-indigo-200 mb-2" />
              <blockquote className="text-sm text-gray-600 italic leading-relaxed">"{story.quote}"</blockquote>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">{story.product}</span>
                <span className="text-[10px] bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full font-medium">{story.usp.split(' ').slice(0, 2).join(' ')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
