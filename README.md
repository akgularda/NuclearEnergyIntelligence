# Nuclear Energy Intelligence Portal

> **The definitive geopolitical dashboard mapping global nuclear exposure, industrial baseload decay, and absolute supply chain chokepoints.**

<p align="center">
  <img src="https://img.shields.io/badge/Status-Restricted%20%2F%20Classified-red.svg" alt="Status" />
  <img src="https://img.shields.io/badge/React-18-blue.svg?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.0-purple.svg?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/TypeScript-5.2-blue.svg?logo=typescript" alt="TypeScript" />
</p>

## Overview
The Nuclear Energy Intelligence Portal is a high-profile interactive brief mapping the geopolitical constraints dictating the future of global zero-carbon baseload firm power.

Applying the **Monarch Castle Technologies** Tri-Color Assessment Framework, this dashboard replaces standard greenfield PR with stark, adversarial data visualization: highlighting the Western world's heavy-manufacturing deficit, the Russian monopoly on enrichment (SWU), and plotting the incoming "retirement cliff" of aging multi-gigawatt fleets.

### Core Intelligence Capabilities
- **Exposure Ranking Array:** Dynamically ranks nations by absolute dependence on nuclear power versus structural capacity, explicitly differentiating between massive fleets acting as grid buffers vs. single-site national single-points-of-failure.
- **Supply Chain Map Toggle:** Visually toggles between current output reactors and the underlying "Forging Deficit"—the ultra-heavy manufacturing nodes restricted to Japan, China, Russia, and an aging French outpost.
- **Capital Destruction Tracker:** A comparative delay-vs-cost matrix visualizing the catastrophic cost-overruns inherent to current Western greenfield deployments.
- **The Retirement Cliff:** Demographic age profiling exposing the severe medium-term risk to global baseload generation as the 1970/1980 build cohorts reach their terminal 60-year limits.
- **Regional Target Vectors:** Explicit deep dives on strategic shifts, including the massive Akkuyu VVER build-out anchoring Türkiye's industrial future.

## Tech Stack
The interface was built leveraging:
- **Core:** `React` + `Vite` for lightning-fast HMR and bundling.
- **Typing:** Strict `TypeScript` implementations preventing runtime silent failures on massive intelligence datasets.
- **Visualization:** `recharts` for composing the financial scatter plots and demographic bar charts.
- **Geospatial:** `leaflet` and `react-leaflet` to render a dark-themed interactive map stripped of distracting labeling artifacts.

## Deployment & Setup

### Local Execution (Intelligence Analysts)
To spin up the intelligence brief locally on your secure terminal:

```bash
# 1. Install local dependencies
npm install

# 2. Replicate the local server (Port 5173 by default)
npm run dev
```

### Build & Ship
To compile the portal for external deployment (compresses datasets into optimized chunks):
```bash
npm run build
```

The resulting `/dist` folder can be statically hosted precisely to specification.

---

> _"A nation that cannot forge its own pressure vessels cannot dictate its own nuclear sovereignty."_ — MCT-GEO-044
