import { Activity, Zap } from 'lucide-react';

export function Header() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <header className="border-b border-white/5 bg-navy-800/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Activity size={20} className="text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0a0f1e] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white tracking-tight">Delay</span>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">DNA</span>
              </div>
              <p className="text-xs text-slate-500 -mt-0.5">AI Delay Prediction Engine</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 ml-4 px-3 py-1.5 rounded-lg bg-white/3 border border-white/6">
            <Zap size={12} className="text-teal-400" />
            <span className="text-xs text-slate-400">ECS European Containers — Zeebrugge HQ</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-slate-400">Live sync</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="text-right">
              <p className="text-sm font-medium text-white">{timeStr}</p>
              <p className="text-xs text-slate-500">{dateStr}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-sm font-bold text-white shadow">
              PG
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
