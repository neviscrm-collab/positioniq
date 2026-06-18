import React from 'react';

interface ScoreRingProps {
  score: number;
  size?: number;
  color?: string;
  label?: string;
}

export default function ScoreRing({ score, size = 56, color = '#6366f1', label }: ScoreRingProps) {
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const dash = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={4} />
          <circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke={color} strokeWidth={4}
            strokeDasharray={`${dash} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold" style={{ color }}>{score}</span>
        </div>
      </div>
      {label && <span className="text-[10px] text-gray-500 font-medium">{label}</span>}
    </div>
  );
}
