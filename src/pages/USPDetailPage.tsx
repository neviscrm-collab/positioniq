import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';
import { usps, customerStories, threats, contentAssets } from '../data/mockData';
import Badge from '../components/ui/Badge';
import ScoreRing from '../components/ui/ScoreRing';

interface Props { uspId: number; onNavigate: (page: string, id?: number) => void; }

const competitorData = [
  { name: 'ManageEngine', value: 94, color: '#6366f1' },
  { name: 'CrowdStrike', value: 71, color: '#94a3b8' },
  { name: 'Microsoft', value: 63, color: '#94a3b8' },
  { name: 'Tenable', value: 58, color: '#94a3b8' },
];

export default function USPDetailPage({ uspId, onNavigate }: Props) {
  const usp = usps.find(u => u.id === uspId) || usps[0];
  const relatedThreats = threats.filter(t => usp.relatedThreats.some(rt => t.name.includes(rt.split(' ')[0]))).slice(0, 3);
  const stories = customerStories.filter(s => s.usp === usp.name).slice(0, 2);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button onClick={() => onNavigate('usps')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to USPs
        </button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{usp.name}</h1>
            <div className="flex flex-wrap gap-2">
              {usp.industries.map(ind => <span key={ind} className="text-xs bg-violet-50 text-violet-600 px-2.5 py-1 rounded-full font-medium">{ind}</span>)}
            </div>
          </div>
          <div className="flex gap-4">
            <ScoreRing score={usp.score} size={64} color="#8b5cf6" label="USP Score" />
            <ScoreRing score={usp.winRate} size={64} color="#10b981" label="Win Rate" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-3 gap-4">
            {[
              { label: 'Revenue Influence', value: usp.revenueInfluence, bg: 'from-violet-50 to-purple-50', text: 'text-violet-600' },
              { label: 'Supporting Customers', value: usp.customers.toLocaleString(), bg: 'from-blue-50 to-indigo-50', text: 'text-blue-600' },
              { label: 'Content Opportunities', value: usp.contentOpportunities.toString(), bg: 'from-emerald-50 to-teal-50', text: 'text-emerald-600' },
            ].map(({ label, value, bg, text }) => (
              <div key={label} className={`bg-gradient-to-br ${bg} rounded-2xl p-5 text-center`}>
                <div className={`text-2xl font-bold ${text}`}>{value}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>

          {/* Competitive Comparison */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-base font-semibold text-gray-900 mb-5">Competitive Comparison</h3>
            <div className="space-y-3">
              {competitorData.map(c => (
                <div key={c.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className={`font-medium ${c.name === 'ManageEngine' ? 'text-indigo-700' : 'text-gray-500'}`}>{c.name}</span>
                    <span className={`font-bold ${c.name === 'ManageEngine' ? 'text-indigo-600' : 'text-gray-400'}`}>{c.value}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${c.value}%`, backgroundColor: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Threats */}
          {relatedThreats.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Related Threats</h3>
              <div className="space-y-3">
                {relatedThreats.map(t => (
                  <div key={t.id} onClick={() => onNavigate('threat-detail', t.id)} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-indigo-200 hover:bg-indigo-50/30 cursor-pointer transition-all">
                    <Badge label={t.severity} />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.industry} · {t.rootCause}</div>
                    </div>
                    <div className="text-sm font-bold text-indigo-600">{t.opportunityScore}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="space-y-5">
          {/* Customer Quotes */}
          {stories.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl p-5 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-4">Customer Evidence</h3>
              <div className="space-y-4">
                {stories.map(story => (
                  <div key={story.id} className="relative">
                    <Quote className="w-6 h-6 text-violet-200 mb-2" />
                    <blockquote className="text-sm text-gray-600 italic leading-relaxed">"{story.quote}"</blockquote>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-xs font-bold text-violet-600">{story.company[0]}</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">{story.company}</div>
                        <div className="text-[10px] text-gray-400">{story.domain} · {story.size}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Use Cases */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Top Use Cases</h3>
            <div className="space-y-2">
              {['Enterprise patch deployment', 'Automated remediation', 'Compliance reporting', 'Risk-based prioritization'].map(uc => (
                <div key={uc} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  {uc}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industries */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Industries</h3>
            <div className="space-y-2">
              {usp.industries.map(ind => (
                <div key={ind} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-sm">
                  <span className="text-gray-700 font-medium">{ind}</span>
                  <span className="text-xs text-indigo-600 font-semibold">Strong Fit</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
