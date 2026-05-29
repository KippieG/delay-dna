# Delay DNA — AI Logistics Delay Prediction Engine

> A concept portfolio project demonstrating AI-powered predictive analytics for logistics operations, built as a reference design for ECS European Containers.

![Delay DNA](https://img.shields.io/badge/stack-React%20%2B%20TypeScript%20%2B%20Tailwind-3b82f6?style=flat-square)
![Status](https://img.shields.io/badge/status-concept%20demo-14b8a6?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

---

## What is Delay DNA?

Delay DNA is an internal operations intelligence platform that predicts **which shipments are at risk of delay — before the delay happens.**

In logistics, delays are expensive. A 4-hour customs holdout on a reefer container, a missed ferry slot, a congested port berth — each one cascades into client SLA breaches, emergency reroutes, and lost revenue.

Delay DNA surfaces these risks early using a multi-factor AI model, giving operations teams time to act instead of react.

---

## Features

- **Live Shipment Risk Monitor** — Per-shipment AI risk score (0-100) with expandable "Delay DNA breakdown" showing exactly which factors drive the score
- **Route Delay Rate Analysis** — Historical delay rates per corridor (UK↔BE, BE→ES, etc.) visualized as ranked bar charts
- **Supplier & Carrier Risk Matrix** — Trending risk scores for every carrier and supplier in the network
- **Ferry Slot Analysis** — Which departure slots historically carry the most delay risk, with live capacity fill data
- **Delay Root Cause Distribution** — Donut chart breaking down all delays by category: customs, port congestion, weather, supplier, infrastructure
- **6-Month Delay Trend** — Area chart showing average delay and on-time rate over time
- **AI Model Explainer** — Transparent breakdown of the XGBoost model feature weights

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Styling | Tailwind CSS v3 |
| Charts | Recharts |
| Icons | Lucide React |
| Build | Vite 5 |
| Deployment | Vercel / GitHub Pages |

---

## AI Model Architecture

The Delay DNA score is computed using a weighted multi-factor model:

| Feature | Weight |
|---|---|
| Historical delay patterns (per route, carrier, season) | 28% |
| Customs complexity score (Brexit + documentation) | 22% |
| Port congestion index (real-time berth occupancy) | 18% |
| Weather forecast signal (sea state + wind) | 14% |
| Carrier reliability score (trailing 90 days) | 10% |
| Ferry slot pressure (fill rate + departure time) | 8% |

In production this would be a trained XGBoost or LightGBM model on 4M+ historical shipment records, with daily retraining and a REST API serving predictions in real-time.

---

## Running Locally

```bash
git clone https://github.com/KippieG/delay-dna
cd delay-dna
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Project Context

ECS European Containers operates one of Europe's busiest logistics hubs at the Port of Zeebrugge, handling intermodal transport across the UK↔Belgium corridor and beyond. Their stack includes Business Central, TAS, WACS, TOPdesk and the Microsoft Power Platform.

This project demonstrates the kind of operational intelligence tooling that would complement their Digital Solutions Expert role — bridging data from multiple source systems into a unified, actionable risk view.

---

## Author

**Philippe Godfroy** — [github.com/KippieG](https://github.com/KippieG)

> *"I don't just build software — I build systems that make operations smarter."*
