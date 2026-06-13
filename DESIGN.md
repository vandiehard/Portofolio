# Design System - Developer Portfolio

## Color Palette

### Dark Mode (Default)
| Token         | Value     | Usage                    |
|---------------|-----------|--------------------------|
| bg-primary    | #0f172a   | Main background          |
| bg-secondary  | #1e293b   | Card/section background  |
| text-primary  | #f1f5f9   | Main text                |
| text-secondary| #94a3b8   | Muted text               |
| accent        | #38bdf8   | Buttons, links, highlights|
| accent-hover  | #0ea5e9   | Hover state              |
| border        | #334155   | Borders and dividers     |

### Light Mode
| Token         | Value     | Usage                    |
|---------------|-----------|--------------------------|
| bg-primary    | #ffffff   | Main background          |
| bg-secondary  | #f1f5f9   | Card/section background  |
| text-primary  | #0f172a   | Main text                |
| text-secondary| #475569   | Muted text               |
| accent        | #0284c7   | Buttons, links, highlights|
| accent-hover  | #0369a1   | Hover state              |
| border        | #e2e8f0   | Borders and dividers     |

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: font-bold, tracking-tight
- **Body**: font-normal, leading-relaxed
- Scale: text-sm / text-base / text-lg / text-xl / text-2xl / text-4xl / text-5xl

## Spacing
- Section padding: py-20 px-6 (mobile), py-28 px-8 (desktop)
- Card padding: p-6
- Gap between elements: gap-4 / gap-6 / gap-8

## Layout
- Max content width: max-w-6xl mx-auto
- Grid: 1 col mobile → 2 col tablet → 3 col desktop
- Navbar height: h-16

## Components

### Buttons
- **Primary**: bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition
- **Outline**: border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition

### Cards
- bg-secondary rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition

### Tags/Badges
- bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium

### Section Headers
- Centered, text-4xl font-bold, with accent underline decoration

## Animations
- Fade-in on scroll (intersection observer)
- Smooth scroll between sections
- Hover scale on cards (scale-105)
- Theme toggle transition: 300ms ease

## Icons
- Use Lucide React icon library
- Consistent size: w-5 h-5 (nav), w-6 h-6 (social), w-8 h-8 (features)
