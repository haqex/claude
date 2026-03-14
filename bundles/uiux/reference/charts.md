---
name: charts
description: 25 chart types with when-to-use, library recommendations, accessibility grades, color guidance, and data volume thresholds
---

# Chart Type Reference

25 chart types organized by data visualization need. Each entry includes when to use, when NOT to use, accessibility considerations, and recommended libraries.

---

### 1. Line Chart — Trend Over Time

- **Keywords**: trend, time-series, growth, timeline, progress
- **Secondary Options**: Area Chart, Smooth Area
- **When to Use**: Data has a time axis; observe rise/fall trends over a continuous period
- **When NOT to Use**: Fewer than 4 data points (use stat card); more than 6 series; no time dimension
- **Data Volume**: <1000 pts: SVG; ≥1000: Canvas + downsampling; >10000: aggregate
- **Colors**: Primary #0080FF. Multiple series: distinct colors + distinct line styles. Fill: 20% opacity
- **Accessibility**: AA — Differentiate series by line style (solid/dashed/dotted) not color alone
- **Fallback**: Dashed/dotted lines per series; togglable data table
- **Libraries**: Chart.js, Recharts, ApexCharts
- **Interaction**: Hover + Zoom

### 2. Bar Chart — Compare Categories

- **Keywords**: compare, categories, ranking
- **Secondary Options**: Column Chart, Grouped Bar
- **When to Use**: Comparing discrete categories by magnitude; ranking; categories ≤ 15
- **When NOT to Use**: Categories > 15 (use table); data has time dimension (use line); showing proportions
- **Data Volume**: <20 categories: vertical; 20–50: horizontal; >50: paginated table
- **Colors**: Each bar distinct. Grouped: same hue family. Sort descending by value
- **Accessibility**: AAA — Value labels on each bar by default
- **Fallback**: Value labels always visible; CSV export
- **Libraries**: Chart.js, Recharts, D3.js
- **Interaction**: Hover + Sort

### 3. Pie / Donut Chart — Part-to-Whole

- **Keywords**: pie, donut, percentage, proportion, share
- **Secondary Options**: Stacked Bar, Waffle Chart
- **When to Use**: ≤5 categories; one dominant segment; emphasis on visual proportion
- **When NOT to Use**: Categories > 5; slice differences < 5%; exact values needed; accessibility-first
- **Data Volume**: Max 6 slices; beyond switch to stacked bar 100%
- **Colors**: 5–6 max. Contrasting palette. Largest slice at 12 o'clock. Always label with %
- **Accessibility**: C — Fails WCAG for colorblind. Must provide stacked bar alternative + percentage table
- **Libraries**: Chart.js, Recharts, D3.js
- **Interaction**: Hover + Drill

### 4. Scatter / Bubble Chart — Correlation

- **Keywords**: correlation, distribution, scatter, relationship, cluster
- **Secondary Options**: Heat Map, Matrix
- **When to Use**: Relationship between two continuous variables; identifying clusters or outliers
- **When NOT to Use**: Variables are categorical; fewer than 20 points; mobile-primary
- **Data Volume**: <500: SVG; 500–5000: Canvas at 0.6–0.8 opacity; >5000: hexbin
- **Colors**: Gradient blue→red. Bubble size: 3rd variable. Opacity 0.6–0.8
- **Accessibility**: B — Combine color + shape distinction for colorblind
- **Libraries**: D3.js, Plotly, Recharts
- **Interaction**: Hover + Brush

### 5. Heat Map — Intensity

- **Keywords**: heatmap, intensity, density, matrix, calendar
- **Secondary Options**: Grid Heat Map, Bubble Heat
- **When to Use**: Intensity across 2D grid; time-based patterns (e.g., activity by hour × day)
- **When NOT to Use**: Fewer than 20 cells; exact values needed; colorblind without pattern fallback
- **Data Volume**: Up to 10,000 cells; beyond aggregate. Calendar: 365 cells max per SVG
- **Colors**: Gradient Cool (blue) to Hot (red). Divergent for ±data. Include numeric legend
- **Accessibility**: B — Pattern overlay for colorblind. Numerical value on hover
- **Libraries**: D3.js, Plotly, ApexCharts
- **Interaction**: Hover + Zoom

### 6. Choropleth / Bubble Map — Geographic

- **Keywords**: geographic, map, location, region, spatial
- **When to Use**: Data has regional/location dimension; spatial distribution is core insight
- **When NOT to Use**: Regions have very different sizes (use bar); mobile-primary
- **Data Volume**: <1000 regions: SVG; ≥1000: Canvas/WebGL (Deck.gl)
- **Accessibility**: B — Include text labels for major regions. Keyboard navigation
- **Libraries**: D3.js, Mapbox, Leaflet
- **Interaction**: Pan + Zoom + Drill

### 7. Funnel Chart — Conversion Flow

- **Keywords**: funnel, flow, conversion, drop-off, pipeline, stages
- **Secondary Options**: Waterfall
- **When to Use**: Sequential multi-stage process; conversion/drop-off rates
- **When NOT to Use**: Stages aren't sequential; values don't decrease; fewer than 3 stages
- **Data Volume**: 3–8 stages optimal; beyond 8 group minor steps
- **Colors**: Single color gradient start→end. Show conversion % between stages. Highlight biggest drop
- **Accessibility**: AA — Explicit conversion % text per stage. Linear list view fallback
- **Libraries**: D3.js, Recharts, Custom SVG
- **Interaction**: Hover + Drill

### 8. Gauge / Bullet — Performance vs Target

- **Keywords**: gauge, KPI, goal, threshold, progress
- **Secondary Options**: Dial, Thermometer
- **When to Use**: Single KPI against a target; dashboard summary
- **When NOT to Use**: No target exists; comparing multiple KPIs (use bullet grid)
- **Colors**: Red → Yellow → Green gradient. Target: marker line
- **Accessibility**: AA — Always show numerical value + % of target as text
- **Libraries**: D3.js, ApexCharts, Custom SVG
- **Interaction**: Hover

### 9. Line with Confidence Band — Forecast

- **Keywords**: forecast, prediction, confidence, projection
- **When to Use**: Historical data + model predictions; communicating uncertainty
- **When NOT to Use**: No historical baseline; audience not data-literate
- **Colors**: Actual: solid #0080FF. Forecast: dashed #FF9500. Band: 15% opacity
- **Accessibility**: AA — Toggle actual/forecast views. Legend includes line-style description
- **Libraries**: Chart.js, ApexCharts, Plotly
- **Interaction**: Hover + Toggle

### 10. Line with Highlights — Anomaly Detection

- **Keywords**: anomaly, outlier, spike, alert, monitoring
- **When to Use**: Monitoring time-series for outliers; alerting on spikes/dips
- **Colors**: Normal: #0080FF solid. Anomaly: #FF0000 circle filled. Alert band: #FFF3CD
- **Accessibility**: AA — Shape marker (not color only) for anomalies. Text annotations
- **Libraries**: D3.js, Plotly, ApexCharts
- **Interaction**: Hover + Alert

### 11. Treemap — Hierarchical Data

- **Keywords**: hierarchy, nested, treemap, breakdown
- **When to Use**: Size relationships within hierarchy; proportional structure overview
- **When NOT to Use**: Depth > 3 levels; precise sibling comparison needed
- **Accessibility**: C — Always provide collapsible tree table as primary view
- **Libraries**: D3.js, Recharts, ApexCharts
- **Interaction**: Hover + Drilldown

### 12. Sankey — Flow / Process

- **Keywords**: flow, process, sankey, distribution, transfer
- **When to Use**: Quantities flowing between nodes; multi-source distribution
- **When NOT to Use**: Flow forms loops; fewer than 3 pairs; mobile-primary
- **Accessibility**: C — Provide flow table (Source → Target → Value)
- **Libraries**: D3.js (d3-sankey), Plotly
- **Interaction**: Hover + Drilldown

### 13. Waterfall — Cumulative Changes

- **Keywords**: waterfall, cumulative, variance, bridge, delta
- **When to Use**: Individual +/- components adding to a total (P&L, budget variance)
- **When NOT to Use**: Changes not additive; more than 12 bars
- **Colors**: Increases: #4CAF50. Decreases: #F44336. Totals: #2196F3 / #0D47A1
- **Accessibility**: AA — Color + directional arrow icon per bar
- **Libraries**: ApexCharts, Highcharts, Plotly
- **Interaction**: Hover

### 14. Radar / Spider — Multi-Variable

- **Keywords**: radar, spider, multi-variable, attributes
- **When to Use**: Comparing entities across same fixed attributes (feature comparison)
- **When NOT to Use**: Axes > 8; precise comparison needed; audience unfamiliar
- **Accessibility**: B — Limit 5–8 axes. Provide grouped bar alternative
- **Libraries**: Chart.js, Recharts, ApexCharts
- **Interaction**: Hover + Toggle

### 15. Candlestick — Stock / Trading

- **Keywords**: stock, trading, OHLC, candlestick, finance
- **When to Use**: Financial OHLC data; trading/investment products
- **When NOT to Use**: Non-financial audience; no OHLC data
- **Colors**: Bullish: #26A69A. Bearish: #EF5350. Volume: 40% opacity
- **Accessibility**: B — Fill vs outline pattern for colorblind
- **Libraries**: Lightweight Charts (TradingView), ApexCharts
- **Interaction**: Real-time + Hover + Zoom

### 16. Network Graph — Relationships

- **Keywords**: network, graph, nodes, edges, connections
- **When to Use**: Mapping connections; network topology
- **When NOT to Use**: Node count > 500 without clustering; mobile
- **Accessibility**: D — Never use as sole representation. Always provide adjacency list
- **Libraries**: D3.js (d3-force), Vis.js, Cytoscape.js
- **Interaction**: Drilldown + Hover + Drag

### 17. Box Plot — Distribution

- **Keywords**: distribution, statistical, spread, median, quartile
- **When to Use**: Showing spread/median/outliers; comparing distributions across groups
- **When NOT to Use**: Fewer than 20 data points per group; audience unfamiliar
- **Accessibility**: AA — Include stats summary table
- **Libraries**: Plotly, D3.js, Chart.js (plugin)
- **Interaction**: Hover

### 18. Bullet Chart — Compact KPI

- **Keywords**: bullet, compact, KPI, dashboard, benchmark
- **When to Use**: Multiple KPIs side by side; space-constrained dashboards
- **When NOT to Use**: Single KPI with emphasis (use gauge); fewer than 3 KPIs
- **Colors**: Ranges: #FFCDD2 / #FFF9C4 / #C8E6C9. Performance: #1976D2. Target: black 3px
- **Accessibility**: AAA — All values always visible as text
- **Libraries**: D3.js, Plotly, Custom SVG
- **Interaction**: Hover

### 19. Waffle Chart — Proportional

- **Keywords**: waffle, percentage, proportion, progress, grid
- **When to Use**: Fraction of whole; percentage progress in engaging format
- **When NOT to Use**: More than 5 categories; exact values matter; tight space
- **Colors**: 3–5 categories max. 2–3px gap between cells. Distinct accessible colors
- **Accessibility**: AA — Better than pie. Percentage text always visible
- **Libraries**: D3.js, React-Waffle, Custom CSS Grid
- **Interaction**: Hover

### 20. Sunburst — Hierarchical Proportional

- **Keywords**: sunburst, hierarchy, nested, radial
- **When to Use**: Nested proportions where hierarchy and size both matter
- **When NOT to Use**: More than 3 levels; precision needed; mobile
- **Accessibility**: C — Mandatory table alternative. Breadcrumb for drill-down
- **Libraries**: D3.js, Recharts, ApexCharts
- **Interaction**: Drilldown + Hover

### 21. Decomposition Tree — Root Cause

- **Keywords**: root cause, decomposition, drill-down, attribution
- **When to Use**: Decomposing a metric into contributing factors; BI drill-down
- **When NOT to Use**: No causal relationship; audience expects summary
- **Colors**: Positive: #2563EB. Negative: #EF4444. Neutral: #94A3B8
- **Accessibility**: AA — Keyboard-navigable expand/collapse
- **Libraries**: Power BI (native), React-Flow, Custom D3.js
- **Interaction**: Drill + Expand

### 22. 3D Scatter / Surface — Spatial Data

- **Keywords**: 3D, spatial, terrain, molecular, volumetric
- **When to Use**: Scientific/engineering where Z-axis is essential
- **When NOT to Use**: 2D projection works; mobile; accessibility required; business dashboards
- **Accessibility**: D — Must not be primary chart type. Mandatory 2D projection + table
- **Libraries**: Three.js, Deck.gl, Plotly 3D
- **Interaction**: Rotate + Zoom + VR

### 23. Streaming Area — Real-Time

- **Keywords**: streaming, real-time, live, monitoring, pulse
- **When to Use**: Live dashboards; IoT/ops data at ≥1 Hz
- **When NOT to Use**: Update < 1/min (use periodic line); flashing without reduced-motion support
- **Colors**: Current: #00FF00 (dark) or #0080FF (light). History: fading opacity
- **Accessibility**: B — Pause/resume required. Current value as large text. Respect reduced-motion
- **Libraries**: D3.js, CanvasJS
- **Interaction**: Real-time + Pause + Zoom

### 24. Word Cloud — Sentiment

- **Keywords**: sentiment, emotion, NLP, opinion, text-analysis
- **When to Use**: NLP output; exploratory text corpus analysis
- **When NOT to Use**: Precise values matter; screen-reader context; corpus < 50 items
- **Colors**: Positive: #22C55E. Negative: #EF4444. Neutral: #94A3B8
- **Accessibility**: C — Never use as sole NLP output. Always pair with sortable list
- **Libraries**: D3-cloud, Highcharts, Nivo
- **Interaction**: Hover + Filter

### 25. Process Map — Process Mining

- **Keywords**: process, mining, variants, bottleneck, event
- **When to Use**: Analyzing event logs for actual process flows; identifying bottlenecks
- **When NOT to Use**: No event log; audience expects static flowchart; nodes > 100
- **Colors**: Happy path: #10B981. Deviations: #F59E0B. Bottlenecks: #EF4444
- **Accessibility**: B — Provide path summary table. Highlight top 3 bottlenecks as text
- **Libraries**: React-Flow, Cytoscape.js, Recharts
- **Interaction**: Drag + Node-Click
