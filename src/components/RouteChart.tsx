import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { routeStats } from '../data/shipments';
import { getScoreBarColor } from '../utils/predictor';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 border border-white/10 text-xs">
        <p className="font-medium text-white mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex justify-between gap-6">
            <span className="text-slate-400">Delay rate</span>
            <span className="text-orange-400 font-medium">{payload[0]?.value}%</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-slate-400">Avg delay</span>
            <span className="text-white">{routeStats.find(r => r.route === label)?.avgDelay}d</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="text-slate-400">Shipments</span>
            <span className="text-white">{routeStats.find(r => r.route === label)?.totalShipments}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function RouteChart() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">Route Delay Rate</h2>
        <p className="text-xs text-slate-500 mt-0.5">% of shipments delayed per route · last 6 months</p>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={routeStats}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 50]}
            tick={{ fill: '#64748b', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={v => `${v}%`}
          />
          <YAxis
            type="category"
            dataKey="route"
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={170}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
          <Bar dataKey="delayRate" radius={[0, 4, 4, 0]} maxBarSize={18}>
            {routeStats.map((entry, i) => (
              <Cell key={i} fill={getScoreBarColor(entry.riskScore)} fillOpacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
