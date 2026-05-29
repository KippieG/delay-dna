import { AlertTriangle, CheckCircle, Clock, Package, ShieldAlert, TrendingUp } from 'lucide-react';
import { kpis } from '../data/shipments';

interface KpiCardProps {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

function KpiCard({ label, value, sub, icon, color, glowColor }: KpiCardProps) {
  return (
    <div className={`flex-1 min-w-[160px] glass rounded-xl p-4 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-200`}>
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 blur-xl ${glowColor}`} />
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg ${color} bg-current/10`}>
          <div className={color}>{icon}</div>
        </div>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
      {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
    </div>
  );
}

export function KpiBar() {
  return (
    <div className="flex gap-3 flex-wrap">
      <KpiCard
        label="Active Shipments"
        value={kpis.totalActiveShipments}
        sub="across all routes"
        icon={<Package size={16} />}
        color="text-blue-400"
        glowColor="bg-blue-500"
      />
      <KpiCard
        label="Critical Risk"
        value={kpis.criticalRisk}
        sub="immediate action needed"
        icon={<ShieldAlert size={16} />}
        color="text-red-400"
        glowColor="bg-red-500"
      />
      <KpiCard
        label="High Risk"
        value={kpis.highRisk}
        sub="monitor closely"
        icon={<AlertTriangle size={16} />}
        color="text-orange-400"
        glowColor="bg-orange-500"
      />
      <KpiCard
        label="Predicted Delays Today"
        value={kpis.predictedDelaysToday}
        sub="AI forecast next 24h"
        icon={<Clock size={16} />}
        color="text-yellow-400"
        glowColor="bg-yellow-500"
      />
      <KpiCard
        label="On-Time Rate"
        value={`${kpis.onTimeRate}%`}
        sub="last 30 days"
        icon={<CheckCircle size={16} />}
        color="text-green-400"
        glowColor="bg-green-500"
      />
      <KpiCard
        label="Avg Delay Score"
        value={`${kpis.avgDelayScore}d`}
        sub="when delayed"
        icon={<TrendingUp size={16} />}
        color="text-teal-400"
        glowColor="bg-teal-500"
      />
    </div>
  );
}
