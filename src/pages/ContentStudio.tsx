import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Globe, Shield, Star, Users, ChevronRight, Copy, Download } from 'lucide-react';
import { domains, threats, usps, customerStories } from '../data/mockData';

const contentTypes = ['Blog Post', 'Webinar', 'Whitepaper', 'Landing Page', 'Email Campaign', 'LinkedIn Post', 'Sales Deck', 'Battlecard', 'Customer Story'];

const mockContent = {
  'Blog Post': `# How the Change Healthcare Ransomware Attack Exposed the Cost of Missing MFA

In February 2024, a single missing control — Multi-Factor Authentication on a Citrix portal — allowed attackers to bring down the largest healthcare clearinghouse in the United States.

The Change Healthcare ransomware attack wasn't sophisticated. It didn't require zero-day exploits or nation-state resources. It required one compromised credential and zero friction to get in.

## The Attack: What Actually Happened

On February 12, 2024, the ALPHV/BlackCat ransomware group accessed Change Healthcare's environment using stolen credentials on a Citrix portal that had no MFA enabled.

Within nine days, they encrypted critical systems and exfiltrated 100 million patient records.

The result: 22 days of downtime, $872 million in losses, and 19,000 pharmacies unable to process prescriptions.

## The Root Cause: An MFA Gap That's More Common Than You Think

Our analysis of 500+ healthcare organizations shows that 43% still have critical access points without MFA enabled. Not because they don't know they should have it — but because deployment is complex.

## How Patch Manager Plus + ADSelfService Plus Close This Gap

ManageEngine's approach combines automated vulnerability scanning with self-service MFA enrollment to eliminate these gaps at scale.

**Key capabilities:**
- Automated discovery of unprotected access points
- One-click MFA enforcement across 17 authenticators
- Compliance reporting for HIPAA and HITRUST
- Real-time alerts for policy violations

The organizations that deployed ADSelfService Plus before the Change Healthcare incident were protected. Those that didn't, weren't.

**Are you confident every access point in your healthcare environment has MFA enabled today?**`,

  'LinkedIn Post': `🚨 The Change Healthcare attack cost $872M.

The root cause? One Citrix portal without MFA.

That's it.

No zero-days. No sophisticated exploit.
Just a compromised credential + no friction = catastrophic breach.

What's scary: 43% of healthcare organizations we analyzed have the same gap.

What's reassuring: this is fixable.

ADSelfService Plus + Patch Manager Plus gives healthcare IT teams a systematic way to find and close these gaps before attackers do.

The organizations we work with that had these controls in place? They weren't in the news in 2024.

👉 See how ManageEngine protects healthcare organizations from credential-based attacks

#Healthcare #Cybersecurity #MFA #PatientData #HIPAA`,
};

const suggestions = [
  { type: 'Headline', items: ['The $872M Lesson: Why Healthcare Can\'t Afford to Skip MFA', 'From Pharmacy to Boardroom: The Full Cost of Change Healthcare', 'One Missing Control. 100 Million Records. Here\'s What Changed.'] },
  { type: 'Angle', items: ['Lead with the human impact (19K pharmacies, patient safety)', 'Focus on the ROI of prevention vs. breach cost', 'Position as a compliance & risk story for CISOs'] },
  { type: 'CTA', items: ['Request a free MFA gap assessment', 'See how leading healthcare orgs use ADSelfService Plus', 'Watch the Change Healthcare security debrief webinar'] },
];

interface Props { onNavigate?: (page: string, id?: number) => void; }

export default function ContentStudio({ onNavigate }: Props) {
  const [selectedType, setSelectedType] = useState('Blog Post');
  const [selectedThreat, setSelectedThreat] = useState(threats[1]);
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [selectedUSP, setSelectedUSP] = useState(usps[0]);
  const [copied, setCopied] = useState(false);
  const content = mockContent[selectedType as keyof typeof mockContent] || mockContent['Blog Post'];

  const handleCopy = () => { navigator.clipboard.writeText(content); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div className="space-y-6 h-[calc(100vh-8rem)]">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Studio</h1>
          <p className="text-gray-500 mt-1">Create intelligence-driven content from real threats, USPs, and customer data.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-sm shadow-indigo-200">
            <Sparkles className="w-4 h-4" /> Generate with AI
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 h-full">
        {/* LEFT: Explorers */}
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="col-span-3 bg-white rounded-2xl border border-gray-100 overflow-y-auto scrollbar-hide">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700">Content Type</h3>
            <div className="mt-3 space-y-1">
              {contentTypes.map(ct => (
                <button key={ct} onClick={() => setSelectedType(ct)} className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-colors ${selectedType === ct ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  <FileText className="w-3.5 h-3.5 flex-shrink-0" /> {ct}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-red-400" />Threat Context</h3>
            <div className="space-y-1.5">
              {threats.slice(0, 5).map(t => (
                <button key={t.id} onClick={() => setSelectedThreat(t)} className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${selectedThreat.id === t.id ? 'bg-red-50 text-red-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-indigo-400" />Domain</h3>
            <div className="space-y-1.5">
              {domains.slice(0, 5).map(d => (
                <button key={d.id} onClick={() => setSelectedDomain(d)} className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${selectedDomain.id === d.id ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {d.icon} {d.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2"><Star className="w-3.5 h-3.5 text-violet-400" />USP</h3>
            <div className="space-y-1.5">
              {usps.slice(0, 5).map(u => (
                <button key={u.id} onClick={() => setSelectedUSP(u)} className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${selectedUSP.id === u.id ? 'bg-violet-50 text-violet-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {u.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CENTER: Editor */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="col-span-6 bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">{selectedType}</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">{selectedDomain.name} · {selectedThreat.name}</span>
            </div>
            <button onClick={handleCopy} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors">
              <Copy className="w-3.5 h-3.5" /> {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-hide p-6">
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap font-mono text-sm">{content}</div>
          </div>
        </motion.div>

        {/* RIGHT: AI Suggestions */}
        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="col-span-3 space-y-4 overflow-y-auto scrollbar-hide">
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-semibold text-gray-800">AI Content Assistant</h3>
            </div>
            <p className="text-xs text-gray-500">Suggestions based on {selectedThreat.name} + {selectedDomain.name} audience</p>
          </div>

          {suggestions.map(section => (
            <div key={section.type} className="bg-white rounded-2xl p-4 border border-gray-100">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{section.type}s</h4>
              <div className="space-y-2">
                {section.items.map(item => (
                  <button key={item} className="w-full text-left p-2.5 bg-gray-50 hover:bg-indigo-50 rounded-xl text-xs text-gray-700 hover:text-indigo-700 transition-colors leading-relaxed group flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-indigo-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Customer Quote */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Customer Evidence</h4>
            {customerStories.slice(0, 2).map(story => (
              <div key={story.id} className="mb-3 p-3 bg-violet-50 rounded-xl">
                <div className="text-xs italic text-gray-600 leading-relaxed mb-2">"{story.quote}"</div>
                <div className="text-[10px] font-semibold text-gray-500">{story.company} · {story.domain}</div>
              </div>
            ))}
          </div>

          {/* Threat Stat */}
          <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
            <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-3">Threat Data Points</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div>💸 Impact: <strong>{selectedThreat.impact}</strong></div>
              <div>📋 Records: <strong>{selectedThreat.recordsExposed}</strong></div>
              <div>⏱️ Downtime: <strong>{selectedThreat.downtime}</strong></div>
              <div>🔑 Root Cause: <strong>{selectedThreat.rootCause}</strong></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
