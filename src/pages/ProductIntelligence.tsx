import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { products } from '../data/mockData';
import ScoreRing from '../components/ui/ScoreRing';

const productColors = ['#6366f1', '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

interface Props { onNavigate?: (page: string, id?: number) => void; }

export default function ProductIntelligence({ onNavigate }: Props) {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900">Product Intelligence</h1>
        <p className="text-gray-500 mt-1 text-lg">Understand how each product creates marketing opportunities across industries and threats.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((product, i) => {
          const color = productColors[i % productColors.length];
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.10)' }}
              className="bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer group transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="p-2.5 rounded-xl mb-3" style={{ backgroundColor: color + '15' }}>
                    <Cpu className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{product.name}</h3>
                </div>
                <ScoreRing score={product.opportunityScore} size={52} color={color} label="Opp." />
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="text-center p-2.5 bg-gray-50 rounded-xl">
                  <div className="text-sm font-bold text-gray-800">{(product.customers / 1000).toFixed(0)}K</div>
                  <div className="text-[10px] text-gray-400">Customers</div>
                </div>
                <div className="text-center p-2.5 bg-green-50 rounded-xl">
                  <div className="text-sm font-bold text-green-600">{product.revenue}</div>
                  <div className="text-[10px] text-gray-400">Revenue</div>
                </div>
                <div className="text-center p-2.5 bg-red-50 rounded-xl">
                  <div className="text-sm font-bold text-red-500">{product.threatCoverage}%</div>
                  <div className="text-[10px] text-gray-400">Threat Cov.</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Top Industries</div>
                <div className="flex flex-wrap gap-1.5">
                  {product.industries.map(ind => (
                    <span key={ind} className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: color + '15', color }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Top USPs</div>
                <div className="space-y-1">
                  {product.topUSPs.slice(0, 2).map(usp => (
                    <div key={usp} className="text-xs text-gray-600 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: color }} />
                      {usp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{product.campaigns} active campaigns</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
