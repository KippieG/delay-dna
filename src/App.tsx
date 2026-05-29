import { Header } from './components/Header';
import { KpiBar } from './components/KpiBar';
import { ShipmentTable } from './components/ShipmentTable';
import { RouteChart } from './components/RouteChart';
import { TrendChart } from './components/TrendChart';
import { SupplierRiskPanel } from './components/SupplierRiskPanel';
import { FerrySlotPanel } from './components/FerrySlotPanel';
import { DelayFactorDonut } from './components/DelayFactorDonut';
import { ModelExplainer } from './components/ModelExplainer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-6 space-y-5">
        <KpiBar />
        <ShipmentTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <RouteChart />
          <TrendChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <SupplierRiskPanel />
          <FerrySlotPanel />
          <DelayFactorDonut />
        </div>

        <ModelExplainer />

        <footer className="pt-2 pb-6 text-center">
          <p className="text-xs text-slate-700">
            Delay DNA · AI Logistics Prediction Engine · Built by{' '}
            <a
              href="https://github.com/KippieG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              Philippe Godfroy
            </a>
            {' '}· Concept portfolio for ECS European Containers
          </p>
        </footer>
      </main>
    </div>
  );
}
