import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface KPICardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  delay?: number;
}

function useCounter(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function KPICard({ label, value, change, icon, color, bgColor, delay = 0 }: KPICardProps) {
  const isNumeric = typeof value === 'number';
  const displayCount = useCounter(isNumeric ? value : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' as const }}
      whileHover={{ y: -2, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}
      className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl" style={{ backgroundColor: bgColor }}>
          <div style={{ color }}>{icon}</div>
        </div>
        {change && (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            {change}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 tracking-tight">
        {isNumeric ? displayCount.toLocaleString() : value}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </motion.div>
  );
}
