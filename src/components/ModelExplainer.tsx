import { Brain, Database, GitBranch, TrendingUp } from 'lucide-react';

const features = [
  { name: 'Historical delay patterns', weight: 28, icon: '📊', desc: 'Per route, carrier, and season' },
  { name: 'Customs complexity score', weight: 22, icon: '🛃', desc: 'Brexit risk + documentation status' },
  { name: 'Port congestion index', weight: 18, icon: '🚢', desc: 'Real-time berth occupancy data' },
  { name: 'Weather forecast signal', weight: 14, icon: '🌊', desc: 'Sea state + wind speed prediction' },
  { name: 'Carrier reliability score', weight: 10, icon: '📦', desc: 'Trailing 90-day carrier performance' },
  { name: 'Ferry slot pressure', weight: 8, icon: '⛴️', desc: 'Fill rate and departure time factor' },
];

export function ModelExplainer() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <Brain size={18} className="text-purple-400" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">AI Model Architecture</h2>
          <p className="text-xs text-slate-500 mt-0.5">Feature weights powering the Delay DNA score</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {features.map((f, i) => (
          <div key={i} className="p-3 rounded-xl bg-white/2 border border-white/5">
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm">{f.icon}</span>
                <div>
                  <p className="text-xs font-medium text-slate-300">{f.name}</p>
                  <p className="text-xs text-slate-600">{f.desc}</p>
                </div>
              </div>
              <span className="text-sm font-bold text-blue-400">{f.weight}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-80"
                style={{ width: `${(f.weight / 28) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 pt-3 grid grid-cols-3 gap-3 text-center text-xs">
        <div className="p-2 rounded-lg bg-white/2">
          <Database size={14} className="text-teal-400 mx-auto mb-1" />
          <p className="text-white font-medium">4.2M+</p>
          <p className="text-slate-500">Training records</p>
        </div>
        <div className="p-2 rounded-lg bg-white/2">
          <GitBranch size={14} className="text-blue-400 mx-auto mb-1" />
          <p className="text-white font-medium">XGBoost</p>
          <p className="text-slate-500">Core algorithm</p>
        </div>
        <div className="p-2 rounded-lg bg-white/2">
          <TrendingUp size={14} className="text-purple-400 mx-auto mb-1" />
          <p className="text-white font-medium">84.2%</p>
          <p className="text-slate-500">Prediction accuracy</p>
        </div>
      </div>
    </div>
  );
}
