import { Brain, Database, GitBranch, TrendingUp } from 'lucide-react';

const features = [
  { icon: '📊', name: 'Historische vertragingspatronen',    weight: 28, desc: 'Per route, carrier en seizoen' },
  { icon: '🛃', name: 'Douane-complexiteitsscore',          weight: 22, desc: 'Brexit-risico + documentatiestatus' },
  { icon: '🚢', name: 'Havencongestie-index',               weight: 18, desc: 'Real-time kaaibezetting' },
  { icon: '🌊', name: 'Weersvoorspellingssignaal',          weight: 14, desc: 'Zeegang + windsnelheid prognose' },
  { icon: '📦', name: 'Carrier betrouwbaarheidsscore',      weight: 10, desc: 'Trailing 90-daagse prestatie' },
  { icon: '⛴️', name: 'Ferry slot belastingsgraad',         weight:  8, desc: 'Bezettingsgraad + vertrektijdfactor' },
];

export function ModelExplainer() {
  return (
    <div className="glass rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl border"
             style={{ background: 'rgba(204,0,0,0.1)', borderColor: 'rgba(204,0,0,0.3)' }}>
          <Brain size={20} style={{ color: '#CC0000' }} />
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Hoe werkt het AI-model?</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            De gewichten van de 6 factoren die de Delay DNA-score bepalen
          </p>
        </div>
      </div>

      {/* Feature weight cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {features.map((f, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-white/[0.025] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-base">{f.icon}</span>
                <div>
                  <p className="text-xs font-semibold text-slate-200">{f.name}</p>
                  <p className="text-[11px] text-slate-600">{f.desc}</p>
                </div>
              </div>
              <span className="text-sm font-extrabold ml-2 shrink-0"
                    style={{ color: '#F5A800' }}>
                {f.weight}%
              </span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full rounded-full"
                   style={{
                     width: `${(f.weight / 28) * 100}%`,
                     background: 'linear-gradient(90deg, #CC0000, #F5A800)',
                   }} />
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="border-t border-white/5 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: <Database size={15} />, val: '4,2M+',  label: 'Trainingsrecords', color: '#F5A800' },
          { icon: <GitBranch size={15}/>, val: 'XGBoost', label: 'Algoritme',        color: '#CC0000' },
          { icon: <TrendingUp size={15}/>,val: '84,2%',  label: 'Voorspel-accuraatheid', color: '#F5A800' },
          { icon: <Brain size={15}/>,     val: 'Real-time',label:'Score refresh',    color: '#CC0000' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.025]">
            <div className="shrink-0" style={{ color: s.color }}>{s.icon}</div>
            <div>
              <p className="text-sm font-bold text-white">{s.val}</p>
              <p className="text-[11px] text-slate-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
