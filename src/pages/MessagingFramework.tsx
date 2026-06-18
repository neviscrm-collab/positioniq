import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { domains, usps, customerStories, threats } from '../data/mockData';

const personas = ['CISO', 'IT Manager', 'VP of Marketing', 'CFO', 'CIO', 'Compliance Officer'];

const generateMessage = (domain: string, persona: string, usp: string, threat: string) => ({
  problem: `${domain} organizations are struggling with ${threat.toLowerCase()}-style attacks that exploit ${usp.toLowerCase()} gaps, leaving them exposed to regulatory fines and operational disruption.`,
  pain: `Without automated ${usp.toLowerCase()}, your team spends weeks on manual processes while attackers move in days. Every unpatched system is a potential breach waiting to happen.`,
  valueProp: `ManageEngine gives ${domain} teams complete ${usp} — from discovery to remediation — in a single platform. Stop guessing. Start knowing.`,
  proofPoint: `"We reduced our vulnerability window from 6 weeks to 72 hours." — IT Director, ${domain} Enterprise`,
  differentiator: `Unlike point solutions, ManageEngine provides unified ${usp} across endpoints, identities, and networks — all from a single pane of glass.`,
  cta: `See how ManageEngine protects ${domain} organizations from ${threat}-style attacks. Start your free assessment.`,
});

interface Props { onNavigate?: (page: string, id?: number) => void; }

export default function MessagingFramework({ onNavigate }: Props) {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [selectedPersona, setSelectedPersona] = useState(personas[0]);
  const [selectedUSP, setSelectedUSP] = useState(usps[0]);
  const [selectedThreat, setSelectedThreat] = useState(threats[1]);
  const [generated, setGenerated] = useState(false);
  const [generating, setGenerating] = useState(false);

  const message = generateMessage(selectedDomain.name, selectedPersona, selectedUSP.name, selectedThreat.name);

  const handleGenerate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => { setGenerating(false); setGenerated(true); }, 1200);
  };

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900">Messaging Framework</h1>
        <p className="text-gray-500 mt-1 text-lg">Build precise positioning messages from intelligence, not assumptions.</p>
      </motion.div>

      {/* Builder */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-5">Build Your Message</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Domain</label>
            <select value={selectedDomain.name} onChange={e => setSelectedDomain(domains.find(d => d.name === e.target.value) || domains[0])}
              className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none text-gray-700 bg-white">
              {domains.slice(0, 8).map(d => <option key={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Persona</label>
            <select value={selectedPersona} onChange={e => setSelectedPersona(e.target.value)}
              className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none text-gray-700 bg-white">
              {personas.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">USP</label>
            <select value={selectedUSP.name} onChange={e => setSelectedUSP(usps.find(u => u.name === e.target.value) || usps[0])}
              className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none text-gray-700 bg-white">
              {usps.slice(0, 8).map(u => <option key={u.id}>{u.name}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Threat Context</label>
            <select value={selectedThreat.name} onChange={e => setSelectedThreat(threats.find(t => t.name === e.target.value) || threats[0])}
              className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 outline-none text-gray-700 bg-white">
              {threats.slice(0, 8).map(t => <option key={t.id}>{t.name}</option>)}
            </select>
          </div>
        </div>

        <button onClick={handleGenerate} disabled={generating}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 shadow-sm shadow-indigo-200">
          {generating ? (
            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Generating...</>
          ) : (
            <><Sparkles className="w-4 h-4" /> Generate Message Framework</>
          )}
        </button>
      </motion.div>

      {/* Output */}
      <AnimatePresence>
        {(generated || true) && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: generated ? 0 : 0.2 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { key: 'problem', label: 'Problem Statement', color: '#ef4444', bg: 'from-red-50 to-orange-50', border: 'border-red-100', text: message.problem },
                { key: 'pain', label: 'Pain Point', color: '#f97316', bg: 'from-orange-50 to-amber-50', border: 'border-orange-100', text: message.pain },
                { key: 'valueProp', label: 'Value Proposition', color: '#6366f1', bg: 'from-indigo-50 to-violet-50', border: 'border-indigo-100', text: message.valueProp },
                { key: 'proofPoint', label: 'Proof Point', color: '#10b981', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-100', text: message.proofPoint },
                { key: 'differentiator', label: 'Differentiator', color: '#8b5cf6', bg: 'from-violet-50 to-purple-50', border: 'border-violet-100', text: message.differentiator },
                { key: 'cta', label: 'Call to Action', color: '#0ea5e9', bg: 'from-sky-50 to-blue-50', border: 'border-sky-100', text: message.cta },
              ].map((block, i) => (
                <motion.div key={block.key}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                  className={`bg-gradient-to-br ${block.bg} rounded-2xl p-5 border ${block.border}`}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: block.color }}>{block.label}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{block.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Context Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400">Generated for:</span>
              {[selectedDomain.name, selectedPersona, selectedUSP.name.split(' ').slice(0, 2).join(' '), selectedThreat.name].map(tag => (
                <span key={tag} className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
