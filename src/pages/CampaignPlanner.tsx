import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Plus, Users, DollarSign, TrendingUp } from 'lucide-react';
import { campaigns, threats, domains, usps, products } from '../data/mockData';
import Badge from '../components/ui/Badge';

const flowSteps = [
  { id: 'threat', label: 'Threat', color: '#ef4444', bg: '#fef2f2', example: 'Change Healthcare' },
  { id: 'domain', label: 'Domain', color: '#6366f1', bg: '#eef2ff', example: 'Healthcare' },
  { id: 'usp', label: 'USP', color: '#8b5cf6', bg: '#f5f3ff', example: 'Compliance Automation' },
  { id: 'story', label: 'Customer Story', color: '#0ea5e9', bg: '#f0f9ff', example: 'Banner Health' },
  { id: 'content', label: 'Content Asset', color: '#10b981', bg: '#ecfdf5', example: 'Whitepaper + Webinar' },
  { id: 'campaign', label: 'Campaign', color: '#f59e0b', bg: '#fffbeb', example: 'Healthcare Ransomware Defense' },
  { id: 'leads', label: 'Leads', color: '#ec4899', bg: '#fdf2f8', example: '847 qualified leads' },
  { id: 'pipeline', label: 'Pipeline', color: '#14b8a6', bg: '#f0fdfa', example: '$3.2M influenced' },
];

interface Props { onNavigate?: (page: string, id?: number) => void; }

export default function CampaignPlanner({ onNavigate }: Props) {
  const [activeFlow, setActiveFlow] = useState(0);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Campaign Planner</h1>
            <p className="text-gray-500 mt-1">Build intelligence-driven campaigns from threat to pipeline.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm shadow-indigo-200">
            <Plus className="w-4 h-4" /> New Campaign
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Flow */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-5">Campaign Blueprint</h3>
          <div className="space-y-1">
            {flowSteps.map((step, i) => (
              <div key={step.id}>
                <motion.div
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                  style={{ backgroundColor: step.bg }}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: step.color }}>
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold" style={{ color: step.color }}>{step.label}</div>
                    <div className="text-xs text-gray-500">{step.example}</div>
                  </div>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Active Campaigns */}
        <div className="lg:col-span-2 space-y-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Active Campaigns</h3>
            <div className="space-y-4">
              {campaigns.map((campaign, i) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ y: -2, boxShadow: '0 16px 32px -8px rgba(0,0,0,0.08)' }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{campaign.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{campaign.threat}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{campaign.domain}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{campaign.product}</span>
                      </div>
                    </div>
                    <Badge label={campaign.stage} variant={campaign.status} />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-blue-50 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-1 text-blue-600 mb-0.5">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-base font-bold">{campaign.leads.toLocaleString()}</span>
                      </div>
                      <div className="text-[10px] text-gray-400">Leads</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-1 text-green-600 mb-0.5">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span className="text-base font-bold">{campaign.pipeline}</span>
                      </div>
                      <div className="text-[10px] text-gray-400">Pipeline</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-1 text-purple-600 mb-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="text-base font-bold">{campaign.usp.split(' ')[0]}</span>
                      </div>
                      <div className="text-[10px] text-gray-400">USP</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
