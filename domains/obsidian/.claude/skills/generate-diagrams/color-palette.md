# Diagram Color Palette

Consistent colors across all diagram formats. Designed for dark backgrounds.

## Semantic Color System

| Role | Hex | Excalidraw BG | Name |
|------|-----|---------------|------|
| **Title / Accent** | `#00ffb3` | — | Vault green |
| **Auth / Identity** | `#7950f2` | `#2e1e5e` | Purple |
| **Data / Storage** | `#228be6` | `#1c3a5e` | Blue |
| **Business Logic** | `#40c057` | `#1e3a2a` | Green |
| **Danger / Payment** | `#e03131` | `#3a1e1e` | Red |
| **Client / UI** | `#fab005` | `#3a3520` | Yellow |
| **Infrastructure** | `#15aabf` | `#1e3a3a` | Cyan |
| **Messaging / Events** | `#fd7e14` | `#3a2a1e` | Orange |

## Usage by Layer (Architecture Diagrams)

| Layer | Color | Examples |
|-------|-------|----------|
| Client / Frontend | Yellow `#fab005` | Browser, Mobile, Admin |
| API / Gateway | Cyan `#15aabf` | Load Balancer, API Gateway |
| Services | Blue `#228be6` | Microservices, Workers |
| Auth | Purple `#7950f2` | Auth Service, IAM |
| Payments | Red `#e03131` | Payment Service, Billing |
| Business Logic | Green `#40c057` | Order Service, Workflow |
| Events / Messaging | Orange `#fd7e14` | Kafka, RabbitMQ, Event Bus |
| Data / Databases | Mixed by type | PostgreSQL=Blue, Redis=Red, Mongo=Green |
| External Services | Red `#e03131` | Stripe, Twilio, AWS |

## Excalidraw Specifics
- **Background**: `#1e1e1e` (dark)
- **Text on shapes**: `#e0e0e0` (light gray)
- **Arrows / connectors**: `#a0a0a0` (medium gray)
- **Layer labels**: respective color, opacity=70, fontSize=11
- **Title text**: `#00ffb3`, fontSize=28

## Canvas Specifics
Canvas only uses the main hex color (no background variant needed):
- Node `color` field takes the hex value directly
- Groups use the layer color
- Text nodes inherit the color for border/accent

## Mermaid Specifics
Mermaid uses its own theming. For consistency, apply:
- Default theme works well in Obsidian dark mode
- Use subgraph labels to denote layers
- No custom color needed (auto-themed by Obsidian)
