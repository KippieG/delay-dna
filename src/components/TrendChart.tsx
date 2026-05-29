import {
  Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart
} from 'recharts';
import { delayTrend } from '../data/shipments';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 border border-white/10 text-xs">
        <p className="font-medium text-white mb-2">{label} 2024</p>
        <div className="space-y-1">
          {payload.map((p: any) => (
            <div key={p.dataKey} className="flex justify-between gap-6">
              <span className="text-slate-400">{p.name}</span>
              <span style={{ color: p.color }} className="font-medium">{p.value}{p.dataKey === 'onTime' ? '%' : 'd'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function TrendChart() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">Delay Trend — 2024</h2>
          <p className="text-xs text-slate-500 mt-0.5">Monthly average delay + on-time performance</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-orange-400 rounded" />
            <span className="text-slate-400">Avg delay (days)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-teal-400 rounded" />
            <span className="text-slate-400">On-time %</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <ComposedChart data={delayTrend} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="delayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="ontimeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11 }} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
          <Area
            type="monotone"
            dataKey="avgDelay"
            name="Avg delay"
            stroke="#f97316"
            strokeWidth={2}
            fill="url(#delayGrad)"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="onTime"
            name="On-time"
            stroke="#14b8a6"
            strokeWidth={2}
            dot={{ fill: '#14b8a6', r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
