import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Globe, Star, FileText, Shield, DollarSign,
  TrendingUp, ArrowRight, Zap
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ScatterChart, Scatter, ZAxis, Cell
} from 'recharts';
import KPICard from '../components/ui/KPICard';
import Badge from '../components/ui/Badge';
import {
  kpiData, threats, domains, usps, threatTrendData,
  domainOpportunityData, industryThreatData, contentPerformanceData
} from '../data/mockData';

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: 'easeOut' as const }
});

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-xl p-3 text-xs">
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}:</span>
            <span className="font-semibold text-gray-800">{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface DashboardProps { onNavigate: (page: string, id?: number) => void; }

export default function Dashboard({ onNavigate }: DashboardProps) {
  const kpis = [
    { label: 'Total Customers', value: kpiData.customers, change: '+12%', icon: <Users className="w-5 h-5" />, color: '#6366f1', bgColor: '#eef2ff' },
    { label: 'Active Domains', value: kpiData.domains, change: '+4', icon: <Globe className="w-5 h-5" />, color: '#0ea5e9', bgColor: '#f0f9ff' },
    { label: 'Proven USPs', value: kpiData.usps, change: '+18', icon: <Star className="w-5 h-5" />, color: '#8b5cf6', bgColor: '#f5f3ff' },
    { label: 'Content Opportunities', value: kpiData.contentOpportunities, change: '+234', icon: <FileText className="w-5 h-5" />, color: '#10b981', bgColor: '#ecfdf5' },
    { label: 'Active Threats', value: kpiData.activeThreats, change: '+23', icon: <Shield className="w-5 h-5" />, color: '#ef4444', bgColor: '#fef2f2' },
    { label: 'Influenced Pipeline', value: kpiData.influencedPipeline, icon: <DollarSign className="w-5 h-5" />, color: '#f59e0b', bgColor: '#fffbeb', change: '+$8.2M' },
  ];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <motion.div {...fadeIn(0)} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-10 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)' }} />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">AI-Powered Intelligence</div>
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-3 max-w-2xl">What should we<br />market next?</h1>
          <p className="text-indigo-200 text-lg max-w-xl leading-relaxed">Discover the industries, threats, customer stories, and product capabilities that create the biggest revenue opportunities.</p>
          <div className="flex items-center gap-3 mt-6">
            <button onClick={() => onNavigate('domains')} className="flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-700 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-lg">
              Explore Domains <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => onNavigate('content')} className="flex items-center gap-2 px-5 py-2.5 bg-white/15 text-white rounded-xl font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm border border-white/20">
              <Zap className="w-4 h-4" /> Generate Content
            </button>
          </div>
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-2 gap-3 opacity-80">
          {[{ v: '94', l: 'Opp. Score' }, { v: '87', l: 'Product Fit' }, { v: '127', l: 'Threats' }, { v: '$42M', l: 'Pipeline' }].map(({ v, l }) => (
            <div key={l} className="bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-white/20">
              <div className="text-2xl font-bold">{v}</div>
              <div className="text-xs text-indigo-200 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* KPIs */}
      <div>
        <motion.h2 {...fadeIn(0.1)} className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Metrics</motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {kpis.map((kpi, i) => <KPICard key={kpi.label} {...kpi} delay={0.1 + i * 0.05} />)}
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Trend */}
        <motion.div {...fadeIn(0.3)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Threat & Opportunity Trends</h3>
              <p className="text-sm text-gray-500 mt-0.5">Monthly incidents and marketing opportunities</p>
            </div>
            <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg font-medium">2024</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={threatTrendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="threats" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="opps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={0.15} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="threats" name="Threats" stroke="#ef4444" strokeWidth={2} fill="url(#threats)" />
              <Area type="monotone" dataKey="opportunities" name="Opportunities" stroke="#6366f1" strokeWidth={2} fill="url(#opps)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Industry Threats */}
        <motion.div {...fadeIn(0.35)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Threats by Industry</h3>
              <p className="text-sm text-gray-500 mt-0.5">Active incidents creating opportunities</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={industryThreatData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="industry" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} width={80} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="threats" name="Threats" radius={[0, 4, 4, 0]}>
                {industryThreatData.map((_, i) => (
                  <Cell key={i} fill={`hsl(${235 + i * 15}, 80%, ${65 - i * 3}%)`} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Opportunity Matrix */}
      <motion.div {...fadeIn(0.4)} className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Market Opportunity Matrix</h3>
            <p className="text-sm text-gray-500 mt-0.5">Product fit vs. market opportunity — bubble size represents revenue potential</p>
          </div>
          <button onClick={() => onNavigate('domains')} className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
            View all domains <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <ScatterChart margin={{ top: 20, right: 20, left: -10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="x" name="Market Opportunity" unit="" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} label={{ value: 'Market Opportunity →', position: 'insideBottom', offset: -10, style: { fontSize: 11, fill: '#94a3b8' } }} />
            <YAxis dataKey="y" name="Product Fit" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} label={{ value: 'Product Fit →', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#94a3b8' } }} />
            <ZAxis dataKey="z" range={[400, 2500]} />
            <Tooltip content={({ active, payload }) => {
              if (active && payload?.length) {
                const d = payload[0].payload;
                return (
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl p-3 text-xs">
                    <div className="font-semibold text-gray-800 mb-1">{d.domain}</div>
                    <div className="text-gray-500">Market Opp: <span className="font-medium text-gray-700">{d.x}</span></div>
                    <div className="text-gray-500">Product Fit: <span className="font-medium text-gray-700">{d.y}</span></div>
                    <div className="text-gray-500">Revenue: <span className="font-medium text-gray-700">${d.z}M</span></div>
                  </div>
                );
              }
              return null;
            }} />
            <Scatter data={domainOpportunityData} shape={(props: any) => {
              const { cx, cy, r, payload } = props;
              return (
                <g>
                  <circle cx={cx} cy={cy} r={r} fill={payload.color} fillOpacity={0.15} stroke={payload.color} strokeWidth={2} />
                  <text x={cx} y={cy + 4} textAnchor="middle" fontSize={10} fill={payload.color} fontWeight={600}>{payload.domain.split(' ')[0]}</text>
                </g>
              );
            }} />
          </ScatterChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Two columns: Top Threats + Top Domains */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Threats */}
        <motion.div {...fadeIn(0.45)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-gray-900">Trending Threats</h3>
            <button onClick={() => onNavigate('threats')} className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {threats.slice(0, 5).map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.05 }}
                onClick={() => onNavigate('threat-detail', t.id)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer group transition-colors">
                <div className="text-xl">{['🌊', '🏥', '❄️', '💥', '🎰'][i]}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.industry} · {t.year}</div>
                </div>
                <Badge label={t.severity} />
                <div className="text-right">
                  <div className="text-sm font-bold text-indigo-600">{t.opportunityScore}</div>
                  <div className="text-[10px] text-gray-400">Opp. Score</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Domains */}
        <motion.div {...fadeIn(0.5)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-base font-semibold text-gray-900">Top Market Domains</h3>
            <button onClick={() => onNavigate('domains')} className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-3">
            {domains.slice(0, 5).map((d, i) => (
              <motion.div key={d.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.05 }}
                onClick={() => onNavigate('domain-detail', d.id)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer group transition-colors">
                <div className="text-xl">{d.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">{d.name}</div>
                  <div className="text-xs text-gray-400">{d.customers.toLocaleString()} customers · {d.revenue}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-600">{d.growth}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold" style={{ color: d.color }}>{d.opportunityScore}</div>
                  <div className="text-[10px] text-gray-400">Score</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top USPs */}
      <motion.div {...fadeIn(0.55)}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Top Performing USPs</h3>
          <button onClick={() => onNavigate('usps')} className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">View all <ArrowRight className="w-3.5 h-3.5" /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {usps.slice(0, 5).map((usp, i) => (
            <motion.div key={usp.id}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.05 }}
              whileHover={{ y: -3, boxShadow: '0 20px 40px -10px rgba(99, 102, 241, 0.12)' }}
              onClick={() => onNavigate('usp-detail', usp.id)}
              className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer group transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-bold text-indigo-600">{usp.winRate}%</div>
                <span className="text-xs text-gray-400 font-medium">win rate</span>
              </div>
              <div className="text-sm font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors leading-snug mb-2">{usp.name}</div>
              <div className="text-xs text-gray-500">{usp.revenueInfluence} influenced</div>
              <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500" style={{ width: `${usp.score}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
