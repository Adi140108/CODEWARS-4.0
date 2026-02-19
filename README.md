# ⚔️ CodeWars 4.0 — Official Website

> The official website for **CodeWars 4.0**, a competitive coding event organized by **Big O Society** at **NMIT, Bengaluru** as part of **Anaadyanta 2026** — NMIT's Techno-Cultural Fest.

---

## 🚀 Overview

CodeWars 4.0 is a multi-round coding competition designed to test analytical thinking, problem-solving, and performance under pressure. This website serves as the central hub for event information, registration, rules, schedule, and more.

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React** | Component-based UI |
| **Vite** | Fast dev server & build |
| **Vanilla CSS** | Styling with CSS-in-JS |
| **React Icons** | Icon library |
| **Canvas API** | Animated background |

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with active section highlighting
│   ├── Hero.jsx            # Landing section with typing animation & countdown
│   ├── About.jsx           # Event overview with animated feature cards
│   ├── Roadmap.jsx         # Event timeline with live registration status
│   ├── Prizes.jsx          # Prize pool & rewards display
│   ├── Rounds.jsx          # Detailed breakdown of all 3 rounds
│   ├── Rules.jsx           # Rules, violations & restrictions
│   ├── Team.jsx            # Organizing team members
│   ├── FAQ.jsx             # Frequently asked questions (accordion)
│   ├── Footer.jsx          # Footer with contacts, links, map
│   ├── InteractiveBackground.jsx  # Canvas-based circuit grid animation
│   └── ScrollToTop.jsx     # Scroll-to-top button
├── styles/
│   ├── index.css           # Global styles & CSS variables
│   └── animations.css      # Shared animation keyframes
└── App.jsx                 # Main app composition
```

## ✨ Features

- **Interactive Circuit Board Background** — Canvas-animated grid with energy pulses and floating code characters
- **Live Registration Status** — Dynamic "LIVE" indicator with blinking green dot during registration period
- **Countdown Timer** — Real-time countdown to the event date
- **Typing Animation** — Hero section typewriter effect
- **Scroll-Triggered Animations** — Sections and cards animate in with staggered delays as you scroll
- **Detailed Round Breakdowns** — Expandable cards for each competition round
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Google Maps Integration** — Embedded map with dark theme in footer
- **Active Nav Highlighting** — Navigation highlights current section on scroll

## 🏆 Event Structure

| Round | Format | Duration |
|---|---|---|
| **Round 1** — Quiz Knockout | Interactive real-time quiz | 60 min |
| **Round 2** — Code Golf | Write the most concise solution | 90 min |
| **Round 3** — Debug & Sabotage | Debug code + inject bugs in opponents' code | 120 min |

## 💰 Prize Pool

- 🥇 **1st Place** — ₹3,500 + Certificate
- 🥈 **2nd Place** — ₹2,500 + Certificate
- 🥉 **3rd Place** — ₹1,000 + Certificate

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📞 Contact

- **Big O Society, NMIT**
- 📧 bigsoc.nmit@gmail.com
- 📸 [@bigsoc.nmit](https://www.instagram.com/bigsoc.nmit)

---

**Built with ❤️ for Anaadyanta 2026...**
