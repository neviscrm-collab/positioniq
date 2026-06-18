import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, AlertTriangle } from 'lucide-react';
import { threats } from '../data/mockData';
import Badge from '../components/ui/Badge';

interface Props { onNavigate: (page: string, id?: number) => void; }

const severities = ['All', 'Critical', 'High', 'Medium'];
const industries = ['All', 'Healthcare', 'Technology', 'Banking', 'Government', 'Energy', 'Retail', 'Telecom'];
const types = ['All', 'Ransomware', 'APT', 'Data Breach', 'Operational'];

export default function ThreatsPage({ onNavigate }: Props) {
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState('All');
  const [industry, setIndustry] = useState('All');
  const [type, setType] = useState('All');

  const filtered = threats.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase());
    const matchSev = severity === 'All' || t.severity === severity;
    const matchInd = industry === 'All' || t.industry === industry;
    const matchType = type === 'All' || t.type === type;
    return matchSearch && matchSev && matchInd && matchType;
  });

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white mb-6">
          <h1 className="text-3xl font-bold mb-2">Threat & Incident Repository</h1>
          <p className="text-red-100 text-lg">Transform real-world security incidents into strategic marketing opportunities.</p>
          <div className="flex gap-4 mt-5">
            {[{ v: threats.length, l: 'Total Incidents' }, { v: '10', l: 'Critical' }, { v: '127', l: 'Active Threats' }, { v: '1,284', l: 'Content Opportunities' }].map(({ v, l }) => (
              <div key={l} className="bg-white/15 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-xl font-bold">{v}</div>
                <div className="text-xs text-red-100">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-4 border border-gray-100">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl flex-1 min-w-48">
            <Search className="w-4 h-4 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search incidents..." className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400" />
          </div>
          {[
            { label: 'Severity', options: severities, value: severity, set: setSeverity },
            { label: 'Industry', options: industries, value: industry, set: setIndustry },
            { label: 'Type', options: types, value: type, set: setType },
          ].map(({ label, options, value, set }) => (
            <div key={label} className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select value={value} onChange={e => set(e.target.value)} className="text-sm border border-gray-200 rounded-lg px-3 py-2 text-gray-600 outline-none bg-white">
                {options.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          ))}
          <span className="text-sm text-gray-400 ml-auto">{filtered.length} results</span>
        </div>
      </motion.div>

      {/* Threat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filtered.map((threat, i) => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.04 }}
            whileHover={{ y: -3, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}
            onClick={() => onNavigate('threat-detail', threat.id)}
            className="bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer group transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{threat.name}</h3>
              </div>
              <div className="flex gap-2">
                <Badge label={threat.severity} />
                <Badge label={threat.type} />
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{threat.description}</p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-gray-50 rounded-xl p-2.5 text-center">
                <div className="text-sm font-bold text-gray-800">{threat.industry}</div>
                <div className="text-[10px] text-gray-400">Industry</div>
              </div>
              <div className="bg-red-50 rounded-xl p-2.5 text-center">
                <div className="text-sm font-bold text-red-600">{threat.impact}</div>
                <div className="text-[10px] text-gray-400">Impact</div>
              </div>
              <div className="bg-indigo-50 rounded-xl p-2.5 text-center">
                <div className="text-sm font-bold text-indigo-600">{threat.opportunityScore}</div>
                <div className="text-[10px] text-gray-400">Opp. Score</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div>
                <span className="text-xs text-gray-400">Root Cause: </span>
                <span className="text-xs font-medium text-gray-600">{threat.rootCause}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {threat.products.slice(0, 2).map(p => (
                    <span key={p} className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-medium">{p.split(' ')[0]}</span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
