import { useState } from 'react';
import { Info } from 'lucide-react';
import { shipments } from '../data/shipments';
import { getRiskBadge, getRiskColor, formatDelay, getCategoryIcon, getCategoryColor, getScoreBarColor } from '../utils/predictor';

export function ShipmentTable() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? shipments : shipments.filter(s => s.riskLevel === filter);
  const sorted = [...filtered].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-base font-semibold text-white">Live Shipment Risk Monitor</h2>
          <p className="text-xs text-slate-500 mt-0.5">AI-scored risk per active shipment · Click to inspect delay DNA</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {['all', 'critical', 'high', 'medium', 'low'].map(level => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all capitalize ${
                filter === level
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                  : 'text-slate-400 hover:text-slate-300 border border-white/5 hover:border-white/10'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-6 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Shipment</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Route</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Client</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Risk Score</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Delay P%</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">Predicted</th>
              <th className="px-4 py-3 text-left text-xs text-slate-500 font-medium uppercase tracking-wider">ETA</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {sorted.map(shipment => (
              <>
                <tr
                  key={shipment.id}
                  className="border-b border-white/3 hover:bg-white/2 cursor-pointer transition-colors"
                  onClick={() => setExpanded(expanded === shipment.id ? null : shipment.id)}
                >
                  <td className="px-6 py-3">
                    <div>
                      <p className="font-mono text-xs text-blue-400">{shipment.id}</p>
                      <p className="text-xs text-slate-500">{shipment.containerType}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-300">{shipment.route}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-300 whitespace-nowrap">{shipment.client}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-400">{shipment.currentStatus}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="relative w-16 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full transition-all"
                          style={{ width: `${shipment.riskScore}%`, backgroundColor: getScoreBarColor(shipment.riskScore) }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${getRiskColor(shipment.riskLevel)}`}>
                        {shipment.riskScore}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-sm font-medium ${getRiskColor(shipment.riskLevel)}`}>
                      {shipment.delayProbability}%
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium ${shipment.predictedDelay > 0 ? getRiskColor(shipment.riskLevel) : 'text-green-400'}`}>
                      {formatDelay(shipment.predictedDelay)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-slate-400 font-mono">
                      {shipment.eta.split(' ')[1]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${getRiskBadge(shipment.riskLevel)}`}>
                      {shipment.riskLevel}
                    </span>
                  </td>
                </tr>

                {expanded === shipment.id && (
                  <tr key={`${shipment.id}-detail`} className="bg-white/2">
                    <td colSpan={9} className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs font-medium text-slate-400 mb-2 flex items-center gap-1">
                            <Info size={12} /> Delay DNA Breakdown
                          </p>
                          <div className="space-y-2">
                            {shipment.delayFactors.map((factor, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="text-sm">{getCategoryIcon(factor.category)}</span>
                                <div className="flex-1">
                                  <div className="flex justify-between text-xs mb-0.5">
                                    <span className={`${getCategoryColor(factor.category)}`}>{factor.name}</span>
                                    <span className="text-slate-400">{factor.impact}%</span>
                                  </div>
                                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                      className="h-full rounded-full transition-all"
                                      style={{ width: `${factor.impact}%`, backgroundColor: getScoreBarColor(factor.impact) }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-slate-400 mb-2">Shipment Details</p>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Carrier</span>
                              <span className="text-slate-300">{shipment.carrier}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Container</span>
                              <span className="text-slate-300">{shipment.containerType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Weight</span>
                              <span className="text-slate-300">{shipment.weight.toLocaleString()} kg</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Customs</span>
                              <span className={shipment.customsRequired ? 'text-orange-400' : 'text-green-400'}>
                                {shipment.customsRequired ? 'Required' : 'Not required'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Ferry slot</span>
                              <span className="text-slate-300">{shipment.ferrySlot}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-medium text-slate-400 mb-2">AI Recommendation</p>
                          <div className={`p-3 rounded-lg border text-xs ${shipment.riskLevel === 'critical' || shipment.riskLevel === 'high' ? 'bg-red-500/5 border-red-500/20 text-red-300' : 'bg-blue-500/5 border-blue-500/20 text-blue-300'}`}>
                            {shipment.riskLevel === 'critical' && '⚡ Immediate action: Contact carrier and notify client. Consider rerouting via alternative ferry slot.'}
                            {shipment.riskLevel === 'high' && '⚠️ Proactive alert: Notify client of potential delay. Verify customs documentation now to prevent bottleneck.'}
                            {shipment.riskLevel === 'medium' && '📋 Monitor: Schedule check-in with carrier. Prepare contingency if weather worsens.'}
                            {shipment.riskLevel === 'low' && '✅ On track: No action needed. Standard monitoring applies.'}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
