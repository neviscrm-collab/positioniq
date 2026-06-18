import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Shield, FileText, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { domains, threats, usps, contentAssets, customerStories } from '../data/mockData';
import Badge from '../components/ui/Badge';
import ScoreRing from '../components/ui/ScoreRing';

interface Props { domainId: number; onNavigate: (page: string, id?: number) => void; }

const domainTrendData = [
  { q: 'Q1 22', customers: 1200, revenue: 3.2 }, { q: 'Q2 22', customers: 1450, revenue: 4.1 },
  { q: 'Q3 22', customers: 1800, revenue: 5.8 }, { q: 'Q4 22', customers: 2100, revenue: 7.2 },
  { q: 'Q1 23', customers: 2400, revenue: 9.1 }, { q: 'Q2 23', customers: 2650, revenue: 11.3 },
  { q: 'Q3 23', customers: 2700, revenue: 14.8 }, { q: 'Q4 23', customers: 2847, revenue: 18.4 },
];

const painPoints = ['Ransomware Recovery', 'HIPAA Compliance', 'Medical Device Security', 'Unpatched Legacy Systems', 'Insider Threats', 'Third-Party Vendor Risk'];
const opportunities = ['Compliance Automation Webinar', 'Ransomware Defense Landing Page', 'Healthcare CISO Whitepaper', 'Medical Device Security Guide'];

export default function DomainDetailPage({ domainId, onNavigate }: Props) {
  const domain = domains.find(d => d.id === domainId) || domains[0];
  const relatedThreats = threats.filter(t => t.industry === domain.name || t.industry === 'Healthcare').slice(0, 3);
  const relatedUSPs = usps.filter(u => u.industries.includes(domain.name)).slice(0, 4);
  const relatedContent = contentAssets.filter(c => c.domain === domain.name).slice(0, 3);
  const stories = customerStories.filter(s => s.domain === domain.name).slice(0, 2);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button onClick={() => onNavigate('domains')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Domains
        </button>

        {/* Hero Banner */}
        <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${domain.color}, ${domain.color}dd)` }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, white 0%, transparent 50%)' }} />
          <div className="relative flex items-start justify-between">
            <div>
              <div className="text-4xl mb-3">{domain.icon}</div>
              <h1 className="text-3xl font-bold mb-2">{domain.name}</h1>
              <p className="text-white/70 text-lg">Market Intelligence & Positioning Guide</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="bg-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <div className="text-xl font-bold">{domain.customers.toLocaleString()}</div>
                  <div className="text-xs text-white/70">Customers</div>
                </div>
                <div className="bg-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <div className="text-xl font-bold">{domain.revenue}</div>
                  <div className="text-xs text-white/70">Revenue</div>
                </div>
                <div className="bg-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <div className="text-xl font-bold flex items-center gap-1"><TrendingUp className="w-4 h-4" />{domain.growth}</div>
                  <div className="text-xs text-white/70">YoY Growth</div>
                </div>
              </div>
            </div>
            <ScoreRing score={domain.opportunityScore} size={80} color="white" label="Opp. Score" />
          </div>
        </div>
      </motion.div>

      {/* Growth Chart */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-1">Customer Growth Trend</h3>
        <p className="text-sm text-gray-500 mb-5">Quarterly customer adoption and revenue growth</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={domainTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="custGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={domain.color} stopOpacity={0.15} />
                <stop offset="100%" stopColor={domain.color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="q" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="customers" stroke={domain.color} strokeWidth={2.5} fill="url(#custGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Pain Points + Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Common Pain Points</h3>
          <div className="space-y-2">
            {painPoints.map((p, i) => (
              <div key={p} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-600">{i + 1}</div>
                <span className="text-sm text-gray-700 font-medium">{p}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Top USPs in this Domain</h3>
          <div className="space-y-3">
            {relatedUSPs.map(usp => (
              <div key={usp.id} className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-800">{usp.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{usp.winRate}% win rate · {usp.revenueInfluence}</div>
                </div>
                <div className="text-sm font-bold text-indigo-600">{usp.score}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Related Threats */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-semibold text-gray-900">Relevant Security Threats</h3>
          <button onClick={() => onNavigate('threats')} className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View all threats</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedThreats.map(t => (
            <div key={t.id} onClick={() => onNavigate('threat-detail', t.id)}
              className="p-4 border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/50 cursor-pointer transition-all group">
              <div className="flex items-center justify-between mb-2">
                <Badge label={t.severity} />
                <span className="text-xs text-indigo-600 font-bold">{t.opportunityScore}</span>
              </div>
              <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">{t.rootCause}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Customer Stories */}
      {stories.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Customer Success Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stories.map(story => (
              <div key={story.id} className="p-5 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl">
                <div className="text-base font-bold text-gray-900 mb-1">{story.company}</div>
                <div className="text-sm font-semibold text-indigo-600 mb-3">{story.outcome}</div>
                <blockquote className="text-sm text-gray-600 italic border-l-2 border-indigo-200 pl-3">"{story.quote}"</blockquote>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-gray-400">{story.product}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{story.size}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Content Opportunities */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Content Opportunities</h3>
        <div className="grid grid-cols-2 gap-3">
          {opportunities.map(opp => (
            <div key={opp} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl cursor-pointer hover:bg-emerald-100 transition-colors group">
              <FileText className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="text-sm text-gray-700 font-medium">{opp}</span>
              <ChevronRight className="w-4 h-4 text-emerald-400 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
