# 🚀 TECHASTRA 2026 — CODE RESCUE
### *National Level Technical Symposium • Department of Computer Science & Engineering & Department of Cyber Security*
### **Dr. M.G.R. Educational and Research Institute (Deemed to be University, NAAC A+)**

> *"Think. Debug. Fix. Rescue the Code!"*

---

## 🏆 Overview

**Code Rescue** is a 3-round competitive debugging championship where contestants diagnose faulty production codebases, decipher cryptic runtime tracebacks, patch subtle algorithmic defects, and rescue failing services against strict countdown timers.

This project delivers a multi-layered retro workstation experience:
1. **3D Interactive Retro Room (`portfolio-website`)**: Built with Three.js, CSS3D, OrbitControls, and custom baked textures simulating an authentic 1990s engineering workstation with CRT monitor and Dr. M.G.R. University branding.
2. **Techastra Windows 95 Desktop OS (`portfolio-inner-site`)**: A fully interactive Windows 95 desktop environment running inside the CRT monitor, complete with movable/resizable windows, Start Menu, taskbar, VCR/CRT retro filters, and the official Event Dossier.
3. **Code Rescue Arena (`Techastra-CodeRescue`)**: The live tournament platform featuring an embedded Python 3.11 triage engine, interactive MS-DOS terminal, proctoring security shield with auto-disqualification, real-time live standings, and 3 progressive rounds (Bug Hunt, Logic Breaker, and Code Rescue).

---

## 📂 Project Architecture

```
Techastra/
├── portfolio-website/       # 3D Three.js environment & CSS3DRenderer CRT monitor
├── portfolio-inner-site/    # Windows 95 OS desktop, Start Menu, & Event Dossier
├── Techastra-CodeRescue/    # 3-Round competitive debugging arena with Python runtime
├── dist_unified/            # Unified production build for static hosting & GitHub Pages
└── .github/workflows/       # Automated CI/CD deployment pipeline
```

---

## 🌐 Live Access & Deployment

- **Main Experience (3D Workstation)**: [https://yashvinthan.github.io/techastra/](https://yashvinthan.github.io/techastra/)
- **Direct OS Access**: [https://yashvinthan.github.io/techastra/os/](https://yashvinthan.github.io/techastra/os/)
- **Direct Arena Access**: [https://yashvinthan.github.io/techastra/os/coderescue/](https://yashvinthan.github.io/techastra/os/coderescue/)

---

## 🛠️ Local Development

### 1. Run the 3D Room:
```bash
cd portfolio-website
npm install
npm run dev
# Running on http://localhost:8080/
```

### 2. Run the Inner Windows 95 OS:
```bash
cd portfolio-inner-site
npm install
npm start
# Running on http://localhost:3000/
```

### 3. Run the Code Rescue Arena:
```bash
cd Techastra-CodeRescue
npm install
npm run dev
# Running on http://localhost:5173/
```

---

## 👥 Organization & Leadership

- **Staff Coordinators:**
  - **Dr. G. Senthil Velan** — Associate Professor, Dept. of CSE
  - **Ms. Anu** — Assistant Professor, Dept. of CSE
- **Student Coordinators:**
  - **Yashvinthan M** — Lead Coordinator & Technical Head
  - **Kavitha G** — Event Operations & Registration Head
  - **Sanjai P.A.** — Logistics & Scoring Invigilator

---

*(C) 2026 Techastra • Dr. M.G.R. Educational and Research Institute University*
