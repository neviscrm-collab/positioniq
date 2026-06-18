import React from 'react';

const severityColors: Record<string, string> = {
  Critical: 'bg-red-50 text-red-700 border-red-100',
  High: 'bg-orange-50 text-orange-700 border-orange-100',
  Medium: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  Low: 'bg-blue-50 text-blue-700 border-blue-100',
  running: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  planning: 'bg-blue-50 text-blue-700 border-blue-100',
  completed: 'bg-gray-100 text-gray-600 border-gray-200',
  Published: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Draft: 'bg-gray-100 text-gray-600 border-gray-200',
  Scheduled: 'bg-blue-50 text-blue-700 border-blue-100',
};

interface BadgeProps {
  label: string;
  variant?: string;
  size?: 'sm' | 'md';
}

export default function Badge({ label, variant, size = 'md' }: BadgeProps) {
  const key = variant || label;
  const colors = severityColors[key] || 'bg-gray-100 text-gray-600 border-gray-200';
  return (
    <span className={`inline-flex items-center border rounded-full font-medium ${size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'} ${colors}`}>
      {label}
    </span>
  );
}
