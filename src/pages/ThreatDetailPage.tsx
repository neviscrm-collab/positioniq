import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Clock, DollarSign, FileText, Megaphone, ChevronRight } from 'lucide-react';
import { threats } from '../data/mockData';
import Badge from '../components/ui/Badge';
import ScoreRing from '../components/ui/ScoreRing';

interface Props { threatId: number; onNavigate: (page: string, id?: number) => void; }

const contentTypes = ['Blog Post', 'Webinar', 'Whitepaper', 'Landing Page', 'Email Campaign', 'Sales Deck'];

export default function ThreatDetailPage({ threatId, onNavigate }: Props) {
  const threat = threats.find(t => t.id === threatId) || threats[0];

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <button onClick={() => onNavigate('threats')} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-5 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Threats
        </button>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge label={threat.severity} />
              <Badge label={threat.type} />
              <span className="text-xs text-gray-400">{threat.year}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{threat.name}</h1>
            <p className="text-gray-500 mt-2 text-base">{threat.industry} · {threat.rootCause}</p>
          </div>
          <div className="flex gap-4">
            <ScoreRing score={threat.opportunityScore} size={64} color="#6366f1" label="Opp. Score" />
            <ScoreRing score={threat.productFit} size={64} color="#10b981" label="Product Fit" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          {/* What Happened */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-semibold text-gray-900 mb-3">What Happened</h2>
            <p className="text-gray-600 leading-relaxed">{threat.description}</p>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-semibold text-gray-900 mb-5">Attack Timeline</h2>
            <div className="relative">
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-gray-100" />
              <div className="space-y-5">
                {threat.timeline.map((event, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }} className="flex gap-4 relative">
                    <div className="w-7 h-7 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center flex-shrink-0 z-10">
                      <Clock className="w-3 h-3 text-red-400" />
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="text-xs font-semibold text-red-500 mb-0.5">{event.date}</div>
                      <div className="text-sm text-gray-700">{event.event}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Business Impact */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Business Impact</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Financial Impact', value: threat.impact, bg: 'bg-red-50', text: 'text-red-600' },
                { label: 'Records Exposed', value: threat.recordsExposed, bg: 'bg-orange-50', text: 'text-orange-600' },
                { label: 'Downtime', value: threat.downtime, bg: 'bg-yellow-50', text: 'text-yellow-600' },
                { label: 'Companies', value: threat.companies.length.toString() + ' orgs', bg: 'bg-purple-50', text: 'text-purple-600' },
              ].map(({ label, value, bg, text }) => (
                <div key={label} className={`${bg} rounded-2xl p-4 text-center`}>
                  <div className={`text-lg font-bold ${text}`}>{value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Companies Impacted */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl p-6 border border-gray-100">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Organizations Impacted</h2>
            <div className="flex flex-wrap gap-2">
              {threat.companies.map(c => (
                <span key={c} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 font-medium">
                  <Building2 className="w-3.5 h-3.5 text-gray-400" /> {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Root Cause */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Root Cause</h3>
            <div className="text-lg font-bold text-red-600">{threat.rootCause}</div>
            <p className="text-xs text-gray-500 mt-2">This is the primary attack vector that enabled the incident.</p>
          </motion.div>

          {/* Product Mapping */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Product Mapping</h3>
            <div className="space-y-2">
              {threat.products.map(p => (
                <div key={p} className="flex items-center gap-2 p-2.5 bg-indigo-50 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-indigo-700">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {threat.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Content Opportunities */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Content Opportunities</h3>
            <div className="space-y-2">
              {contentTypes.map(ct => (
                <button key={ct} onClick={() => onNavigate('content')} className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-indigo-50 transition-colors group text-left">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-500" />
                    <span className="text-sm text-gray-600 group-hover:text-indigo-700 font-medium">{ct}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-400" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Campaign CTA */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button onClick={() => onNavigate('campaigns')} className="w-full p-5 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl text-white text-left shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-200 transition-shadow">
              <Megaphone className="w-5 h-5 mb-2" />
              <div className="text-sm font-bold mb-1">Create Campaign</div>
              <div className="text-xs text-indigo-200">Turn this incident into a campaign targeting {threat.industry} buyers</div>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
