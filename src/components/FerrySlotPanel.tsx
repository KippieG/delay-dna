import { ferrySlots } from '../data/shipments';
import { getScoreBarColor } from '../utils/predictor';

export function FerrySlotPanel() {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">Ferry Slot Risk Analysis</h2>
        <p className="text-xs text-slate-500 mt-0.5">Delay probability and capacity fill per departure slot</p>
      </div>

      <div className="space-y-2">
        {ferrySlots.map((slot, i) => (
          <div
            key={i}
            className="p-3 rounded-xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-white">{slot.slot}</p>
                <p className="text-xs text-slate-500">{slot.route}</p>
              </div>
              <div className="text-right">
                <p
                  className="text-sm font-bold"
                  style={{ color: getScoreBarColor(slot.delayRate * 2) }}
                >
                  {slot.delayRate}%
                </p>
                <p className="text-xs text-slate-500">delay rate</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">Delay risk</span>
                  <span className="text-slate-400">{slot.delayRate}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${slot.delayRate}%`,
                      backgroundColor: getScoreBarColor(slot.delayRate * 2)
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">Capacity</span>
                  <span className="text-slate-400">{slot.fill}/{slot.capacity}</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${(slot.fill / slot.capacity) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
