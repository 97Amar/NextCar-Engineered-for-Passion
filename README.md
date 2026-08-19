# 🏎️ NEXT CAR — Interactive Vehicle Experience Prototype

A high-fidelity, interactive multi-step automotive prototype built with **React**, **Vite**, **Framer Motion**, and **SASS**. Featuring smooth state-driven animations, customizable light/dark themes, and interactive sequence transitions.

---

## 📌 Features

- **Interactive Sequence Timeline:** Smooth multi-step car presentation workflow from consultation to vehicle delivery.
- **Dynamic Theme System:** Seamless Light and Dark mode toggles with theme-aware CSS custom properties (`data-theme="light"` / `data-theme="dark"`).
- **Rich Fluid Animations:** Framer Motion-powered radar waves, spring transitions, tooltip pill animations, and sliding card sequences.
- **Responsive & Modern UI:** Glassmorphism UI cards, custom glowing concentric rings, and lap timelines.

---

## 🛠️ Tech Stack & Libraries Used

### **Core Framework & Build Tool**
- **[React 19](https://react.dev/)** (`react`, `react-dom`) — UI Component Library.
- **[Vite](https://vitejs.dev/)** (`vite`) — Next-generation frontend build tool and dev server.

### **Animation & Icons**
- **[Framer Motion](https://www.framer.com/motion/)** (`framer-motion`) — Production-ready motion engine for complex layout & sequence animations.
- **[Lucide React](https://lucide.dev/)** (`lucide-react`) — Crisp, lightweight icon set for UI navigation.

### **Styling & Tooling**
- **[SASS / SCSS](https://sass-lang.com/)** (`sass`) — Modular SCSS variables, mixins, and theme styling.
- **[ESLint](https://eslint.org/)** (`eslint`) — Code linting and formatting quality checks.
- **[Sharp](https://sharp.pixelplumbing.com/)** (`sharp`) — High-performance image transformation tool.

---

## 🚀 How to Run the Project

### **Prerequisites**
Ensure you have **Node.js** (v18+ recommended) installed on your system.

### **1. Clone & Navigate**
```bash
git clone <repository-url>
cd nextcar
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start Development Server**
```bash
npm run dev
```
The application will start locally at **`http://localhost:3000`** (or the port shown in your terminal).

### **4. Build for Production**
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
nextcar/
├── public/                  # Static assets & icons
├── src/
│   ├── assets/              # High-res vehicle PNGs & images
│   ├── components/
│   │   ├── common/          # Shared components (Header, SideNav, RightNav, CarCircle, LapTimeline, etc.)
│   │   ├── views/           # Sequence view screens (HeroView, CarRevealView, TimelineSequenceView, DeliverySequenceView, ThankYouView)
│   │   └── NextCarPrototype/# Main prototype state controller shell
│   ├── styles/              # Global SCSS variables & theme tokens
│   ├── App.jsx              # Root App component
│   └── index.scss           # Global CSS variables & root dark/light theme definitions
├── vite.config.js           # Vite server & build configuration
└── package.json             # Dependencies & scripts
```

---

## 📜 License
Privately owned — Developed for the Next Car interactive prototype.

