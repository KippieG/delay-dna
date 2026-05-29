import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const factors = [
  { name: 'Customs / Brexit', value: 34, color: '#a855f7' },
  { name: 'Port Congestion', value: 26, color: '#f97316' },
  { name: 'Weather', value: 18, color: '#3b82f6' },
  { name: 'Supplier Delay', value: 12, color: '#eab308' },
  { name: 'Ferry Capacity', value: 7, color: '#14b8a6' },
  { name: 'Infrastructure', value: 3, color: '#ef4444' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 border border-white/10 text-xs">
        <p style={{ color: payload[0].payload.color }} className="font-medium">{payload[0].name}</p>
        <p className="text-white mt-0.5">{payload[0].value}% of all delays</p>
      </div>
    );
  }
  return null;
};

export function DelayFactorDonut() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-2">
        <h2 className="text-base font-semibold text-white">Delay Root Causes</h2>
        <p className="text-xs text-slate-500 mt-0.5">Distribution of delay factors across all routes</p>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={factors}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={88}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {factors.map((entry, i) => (
              <Cell key={i} fill={entry.color} fillOpacity={0.85} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-2">
        {factors.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: f.color }} />
            <span className="text-slate-400 truncate">{f.name}</span>
            <span className="text-slate-500 ml-auto">{f.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
