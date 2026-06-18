import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const nodes = [
  { id: 'threat1', type: 'Threat', label: 'Change Healthcare', x: 400, y: 200, color: '#ef4444', size: 52 },
  { id: 'threat2', type: 'Threat', label: 'Salt Typhoon', x: 600, y: 100, color: '#ef4444', size: 44 },
  { id: 'threat3', type: 'Threat', label: 'Snowflake', x: 700, y: 280, color: '#ef4444', size: 40 },
  { id: 'rc1', type: 'Root Cause', label: 'Missing MFA', x: 250, y: 120, color: '#f97316', size: 40 },
  { id: 'rc2', type: 'Root Cause', label: 'Nation-State', x: 580, y: 20, color: '#f97316', size: 36 },
  { id: 'rc3', type: 'Root Cause', label: 'Credential Theft', x: 780, y: 160, color: '#f97316', size: 36 },
  { id: 'domain1', type: 'Domain', label: 'Healthcare', x: 200, y: 320, color: '#6366f1', size: 48 },
  { id: 'domain2', type: 'Domain', label: 'Telecom', x: 550, y: 320, color: '#6366f1', size: 40 },
  { id: 'domain3', type: 'Domain', label: 'Banking', x: 760, y: 380, color: '#6366f1', size: 42 },
  { id: 'usp1', type: 'USP', label: 'Patch Management', x: 80, y: 220, color: '#8b5cf6', size: 44 },
  { id: 'usp2', type: 'USP', label: 'Identity Security', x: 700, y: 460, color: '#8b5cf6', size: 40 },
  { id: 'usp3', type: 'USP', label: 'PAM', x: 440, y: 420, color: '#8b5cf6', size: 38 },
  { id: 'prod1', type: 'Product', label: 'ADSelfService Plus', x: 200, y: 460, color: '#10b981', size: 44 },
  { id: 'prod2', type: 'Product', label: 'Endpoint Central', x: 80, y: 380, color: '#10b981', size: 42 },
  { id: 'prod3', type: 'Product', label: 'PAM360', x: 520, y: 500, color: '#10b981', size: 40 },
  { id: 'content1', type: 'Content', label: 'Healthcare Whitepaper', x: 300, y: 540, color: '#0ea5e9', size: 36 },
  { id: 'campaign1', type: 'Campaign', label: 'Healthcare Defense', x: 150, y: 560, color: '#f59e0b', size: 38 },
];

const edges = [
  { from: 'threat1', to: 'rc1' }, { from: 'threat1', to: 'domain1' }, { from: 'threat1', to: 'prod1' },
  { from: 'threat2', to: 'rc2' }, { from: 'threat2', to: 'domain2' },
  { from: 'threat3', to: 'rc3' }, { from: 'threat3', to: 'domain3' },
  { from: 'rc1', to: 'usp1' }, { from: 'rc1', to: 'usp3' },
  { from: 'rc3', to: 'usp2' }, { from: 'usp2', to: 'prod1' },
  { from: 'usp1', to: 'prod2' }, { from: 'usp3', to: 'prod3' },
  { from: 'domain1', to: 'content1' }, { from: 'content1', to: 'campaign1' },
  { from: 'prod1', to: 'campaign1' }, { from: 'usp3', to: 'prod3' },
  { from: 'threat1', to: 'usp3' }, { from: 'domain1', to: 'usp1' },
];

const typeColors: Record<string, string> = {
  Threat: '#ef4444', 'Root Cause': '#f97316', Domain: '#6366f1',
  USP: '#8b5cf6', Product: '#10b981', Content: '#0ea5e9', Campaign: '#f59e0b',
};

interface Props { onNavigate?: (page: string, id?: number) => void; }

export default function KnowledgeGraph({ onNavigate }: Props) {
  const [zoom, setZoom] = useState(1);
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Knowledge Graph</h1>
          <p className="text-gray-500 mt-1">Visually explore relationships between threats, domains, USPs, products, and campaigns.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setZoom(z => Math.min(z + 0.1, 1.5))} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><ZoomIn className="w-4 h-4 text-gray-600" /></button>
          <button onClick={() => setZoom(z => Math.max(z - 0.1, 0.5))} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><ZoomOut className="w-4 h-4 text-gray-600" /></button>
          <button onClick={() => setZoom(1)} className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"><RotateCcw className="w-4 h-4 text-gray-600" /></button>
        </div>
      </motion.div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(typeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-gray-100 text-xs font-medium text-gray-600">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
            {type}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Graph */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ height: 620 }}>
          <svg width="100%" height="100%" viewBox="0 0 880 620" style={{ transform: `scale(${zoom})`, transformOrigin: 'center', transition: 'transform 0.2s' }}>
            {/* Edges */}
            {edges.map((edge, i) => {
              const from = nodes.find(n => n.id === edge.from);
              const to = nodes.find(n => n.id === edge.to);
              if (!from || !to) return null;
              return (
                <line key={i}
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke="#e2e8f0" strokeWidth={1.5} strokeDasharray="4 4"
                />
              );
            })}
            {/* Nodes */}
            {nodes.map(node => (
              <g key={node.id} onClick={() => setSelectedNode(selectedNode?.id === node.id ? null : node)} className="cursor-pointer">
                <motion.circle
                  cx={node.x} cy={node.y} r={node.size / 2}
                  fill={node.color}
                  fillOpacity={selectedNode?.id === node.id ? 1 : 0.12}
                  stroke={node.color}
                  strokeWidth={selectedNode?.id === node.id ? 3 : 2}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.15 }}
                />
                <text x={node.x} y={node.y + 2} textAnchor="middle" dominantBaseline="middle" fontSize={9} fontWeight={600} fill={node.color} className="pointer-events-none select-none">
                  {node.label.split(' ')[0]}
                </text>
                <text x={node.x} y={node.y + node.size / 2 + 10} textAnchor="middle" fontSize={9} fill="#64748b" className="pointer-events-none select-none">
                  {node.label.length > 12 ? node.label.slice(0, 12) + '…' : node.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Node Details Panel */}
        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
          {selectedNode ? (
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: selectedNode.color + '20' }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedNode.color }} />
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: selectedNode.color }}>{selectedNode.type}</div>
                  <div className="text-sm font-bold text-gray-800">{selectedNode.label}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-3">Connected to:</div>
              <div className="space-y-1.5">
                {edges
                  .filter(e => e.from === selectedNode.id || e.to === selectedNode.id)
                  .map(e => {
                    const otherId = e.from === selectedNode.id ? e.to : e.from;
                    const other = nodes.find(n => n.id === otherId);
                    if (!other) return null;
                    return (
                      <div key={otherId} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg" onClick={() => setSelectedNode(other)}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: other.color }} />
                        <span className="text-xs text-gray-600">{other.label}</span>
                        <span className="text-[10px] text-gray-400 ml-auto">{other.type}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
              <Share2 className="w-8 h-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Click a node to explore its connections</p>
            </div>
          )}

          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Graph Stats</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-gray-500">Nodes</span><span className="font-semibold">{nodes.length}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Connections</span><span className="font-semibold">{edges.length}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Node Types</span><span className="font-semibold">7</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
