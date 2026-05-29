import { AlertTriangle, CheckCircle, Clock, Package, ShieldAlert, TrendingDown } from 'lucide-react';
import { kpis } from '../data/shipments';

interface CardProps {
  label: string;
  value: string | number;
  sub: string;
  icon: React.ReactNode;
  accent: string;          // tailwind text color
  glow: string;            // inline hex for glow blob
}

function KpiCard({ label, value, sub, icon, accent, glow }: CardProps) {
  return (
    <div className="relative flex-1 min-w-[148px] glass rounded-2xl p-5 overflow-hidden
                    hover:scale-[1.02] transition-transform duration-200 cursor-default">
      {/* soft glow blob */}
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 blur-2xl pointer-events-none"
           style={{ background: glow }} />
      <div className={`mb-3 inline-flex items-center justify-center w-9 h-9 rounded-xl ${accent} bg-current/10`}>
        <div className={accent}>{icon}</div>
      </div>
      <p className="text-2xl font-extrabold text-white tabular-nums">{value}</p>
      <p className="text-xs font-medium text-slate-300 mt-0.5">{label}</p>
      <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>
    </div>
  );
}

export function KpiBar() {
  return (
    <div className="flex gap-3 flex-wrap">
      <KpiCard label="Actieve Shipments"      value={kpis.totalActiveShipments}     sub="over alle routes"           icon={<Package size={16}/>}     accent="text-[#F5A800]" glow="#F5A800" />
      <KpiCard label="Kritiek Risico"         value={kpis.criticalRisk}             sub="directe actie vereist"     icon={<ShieldAlert size={16}/>}  accent="text-[#CC0000]" glow="#CC0000" />
      <KpiCard label="Hoog Risico"            value={kpis.highRisk}                 sub="nauw opvolgen"             icon={<AlertTriangle size={16}/>} accent="text-orange-400" glow="#f97316" />
      <KpiCard label="Voorspelde Vertragingen" value={kpis.predictedDelaysToday}    sub="AI-forecast komende 24u"   icon={<Clock size={16}/>}        accent="text-yellow-400" glow="#eab308" />
      <KpiCard label="Op-Tijd Ratio"          value={`${kpis.onTimeRate}%`}         sub="laatste 30 dagen"          icon={<CheckCircle size={16}/>}  accent="text-green-400" glow="#22c55e" />
      <KpiCard label="Gem. Vertraging"        value={`${kpis.avgDelayScore}d`}      sub="wanneer vertraagd"         icon={<TrendingDown size={16}/>} accent="text-slate-400" glow="#94a3b8" />
    </div>
  );
}
