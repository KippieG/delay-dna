import type { RiskLevel } from '../data/shipments';

export function getRiskColor(level: RiskLevel): string {
  switch (level) {
    case 'critical': return 'text-red-400';
    case 'high': return 'text-orange-400';
    case 'medium': return 'text-yellow-400';
    case 'low': return 'text-green-400';
  }
}

export function getRiskBg(level: RiskLevel): string {
  switch (level) {
    case 'critical': return 'bg-red-500/10 border-red-500/30';
    case 'high': return 'bg-orange-500/10 border-orange-500/30';
    case 'medium': return 'bg-yellow-500/10 border-yellow-500/30';
    case 'low': return 'bg-green-500/10 border-green-500/30';
  }
}

export function getRiskBadge(level: RiskLevel): string {
  switch (level) {
    case 'critical': return 'bg-red-500/20 text-red-300 border border-red-500/40';
    case 'high': return 'bg-orange-500/20 text-orange-300 border border-orange-500/40';
    case 'medium': return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40';
    case 'low': return 'bg-green-500/20 text-green-300 border border-green-500/40';
  }
}

export function getRiskGradient(score: number): string {
  if (score >= 80) return 'from-red-500 to-red-600';
  if (score >= 60) return 'from-orange-500 to-orange-600';
  if (score >= 40) return 'from-yellow-500 to-yellow-600';
  return 'from-green-500 to-green-600';
}

export function getScoreBarColor(score: number): string {
  if (score >= 80) return '#ef4444';
  if (score >= 60) return '#f97316';
  if (score >= 40) return '#eab308';
  return '#22c55e';
}

export function formatDelay(days: number): string {
  if (days === 0) return 'On time';
  if (days < 1) return `+${Math.round(days * 24)}h`;
  return `+${days.toFixed(1)}d`;
}

export function getCategoryIcon(category: string): string {
  switch (category) {
    case 'weather': return '🌊';
    case 'customs': return '🛃';
    case 'capacity': return '📦';
    case 'supplier': return '🏭';
    case 'ferry': return '⛴️';
    case 'infrastructure': return '🚧';
    default: return '⚠️';
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case 'weather': return 'text-blue-400';
    case 'customs': return 'text-purple-400';
    case 'capacity': return 'text-orange-400';
    case 'supplier': return 'text-yellow-400';
    case 'ferry': return 'text-teal-400';
    case 'infrastructure': return 'text-red-400';
    default: return 'text-slate-400';
  }
}
