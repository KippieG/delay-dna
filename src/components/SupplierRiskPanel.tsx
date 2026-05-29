import { TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { supplierRisks } from '../data/shipments';
import { getScoreBarColor } from '../utils/predictor';

export function SupplierRiskPanel() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">Supplier & Carrier Risk Matrix</h2>
        <p className="text-xs text-slate-500 mt-0.5">Risk scores based on historical on-time performance</p>
      </div>

      <div className="space-y-3">
        {supplierRisks.map((supplier, i) => (
          <div key={i} className="group">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {supplier.name}
                </span>
                <span className="text-xs text-slate-600 bg-white/5 px-1.5 py-0.5 rounded">
                  {supplier.country}
                </span>
                <TrendIcon trend={supplier.trend} />
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-500">{supplier.onTimeRate}% on-time</span>
                <span
                  className="font-bold w-6 text-right"
                  style={{ color: getScoreBarColor(supplier.riskScore) }}
                >
                  {supplier.riskScore}
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${supplier.riskScore}%`,
                  backgroundColor: getScoreBarColor(supplier.riskScore),
                  opacity: 0.8
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1"><TrendingDown size={12} className="text-green-400" /> Improving</div>
        <div className="flex items-center gap-1"><Minus size={12} className="text-slate-400" /> Stable</div>
        <div className="flex items-center gap-1"><TrendingUp size={12} className="text-red-400" /> Worsening</div>
      </div>
    </div>
  );
}

function TrendIcon({ trend }: { trend: string }) {
  if (trend === 'improving') return <TrendingDown size={12} className="text-green-400" />;
  if (trend === 'worsening') return <TrendingUp size={12} className="text-red-400" />;
  return <Minus size={12} className="text-slate-500" />;
}
