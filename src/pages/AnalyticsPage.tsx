import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend
} from 'recharts';
import { contentPerformanceData, threatTrendData, campaigns, domains } from '../data/mockData';

const pipelineData = [
  { month: 'Jan', influenced: 2.1, closed: 0.8 },
  { month: 'Feb', influenced: 3.4, closed: 1.2 },
  { month: 'Mar', influenced: 4.8, closed: 1.9 },
  { month: 'Apr', influenced: 6.2, closed: 2.4 },
  { month: 'May', influenced: 8.1, closed: 3.1 },
  { month: 'Jun', influenced: 11.3, closed: 4.2 },
  { month: 'Jul', influenced: 15.7, closed: 5.8 },
  { month: 'Aug', influenced: 19.4, closed: 7.1 },
  { month: 'Sep', influenced: 24.8, closed: 8.9 },
  { month: 'Oct', influenced: 31.2, closed: 11.3 },
  { month: 'Nov', influenced: 38.6, closed: 14.1 },
  { month: 'Dec', influenced: 42.5, closed: 16.4 },
];

const domainPerf = domains.slice(0, 6).map(d => ({
  name: d.name.split(' ')[0],
  score: d.opportunityScore,
  customers: d.customers / 100,
  color: d.color,
}));

const contentPie = contentPerformanceData.map(c => ({ name: c.type, value: c.leads }));
const PIE_COLORS = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-xl p-3 text-xs">
        {label && <div className="font-semibold text-gray-700 mb-1">{label}</div>}
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-gray-500">{p.name}:</span>
            <span className="font-semibold text-gray-800">{typeof p.value === 'number' && p.value > 100 ? p.value.toLocaleString() : p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 }
});

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <motion.div {...fadeIn(0)}>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1 text-lg">Executive reporting on domain performance, content impact, and pipeline attribution.</p>
      </motion.div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pipeline Influenced', value: '$42.5M', change: '+$8.2M', color: 'from-indigo-500 to-violet-600' },
          { label: 'Closed Revenue', value: '$16.4M', change: '+$2.3M', color: 'from-emerald-400 to-teal-500' },
          { label: 'Content Leads', value: '18,432', change: '+3,241', color: 'from-blue-400 to-indigo-500' },
          { label: 'Win Rate', value: '67%', change: '+5pts', color: 'from-amber-400 to-orange-500' },
        ].map((kpi, i) => (
          <motion.div key={kpi.label} {...fadeIn(0.05 + i * 0.05)}
            className={`bg-gradient-to-br ${kpi.color} rounded-2xl p-5 text-white`}>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <div className="text-white/80 text-sm mt-1">{kpi.label}</div>
            <div className="text-white/60 text-xs mt-1">{kpi.change} this quarter</div>
          </motion.div>
        ))}
      </div>

      {/* Pipeline Chart */}
      <motion.div {...fadeIn(0.2)} className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="mb-5">
          <h3 className="text-base font-semibold text-gray-900">Pipeline Attribution</h3>
          <p className="text-sm text-gray-500 mt-0.5">Marketing influenced pipeline vs. closed revenue over time ($M)</p>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={pipelineData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="infGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="closedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="influenced" name="Influenced" stroke="#6366f1" strokeWidth={2.5} fill="url(#infGrad)" />
            <Area type="monotone" dataKey="closed" name="Closed" stroke="#10b981" strokeWidth={2.5} fill="url(#closedGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Content + Domain Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div {...fadeIn(0.25)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Content Lead Generation</h3>
          <p className="text-sm text-gray-500 mb-5">Leads by content type</p>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie data={contentPie} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                  {contentPie.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: any) => v.toLocaleString()} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {contentPie.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-800">{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn(0.3)} className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Domain Performance</h3>
          <p className="text-sm text-gray-500 mb-5">Opportunity score by industry</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={domainPerf} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[70, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="score" name="Opp. Score" radius={[4, 4, 0, 0]}>
                {domainPerf.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Campaign Performance */}
      <motion.div {...fadeIn(0.35)} className="bg-white rounded-2xl p-6 border border-gray-100">
        <h3 className="text-base font-semibold text-gray-900 mb-5">Campaign Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                {['Campaign', 'Threat', 'Domain', 'Leads', 'Pipeline', 'Status'].map(h => (
                  <th key={h} className="text-left py-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campaigns.map(c => (
                <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-3 font-medium text-gray-800">{c.name}</td>
                  <td className="py-3 px-3 text-gray-500 text-xs">{c.threat}</td>
                  <td className="py-3 px-3 text-gray-500 text-xs">{c.domain}</td>
                  <td className="py-3 px-3 font-semibold text-blue-600">{c.leads.toLocaleString()}</td>
                  <td className="py-3 px-3 font-semibold text-green-600">{c.pipeline}</td>
                  <td className="py-3 px-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      c.status === 'running' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'planning' ? 'bg-blue-50 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{c.stage}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
