Visit the Netlify deployment HERE: https://spaceprojportfolio.netlify.app/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚀 Space Portfolio – Gavin Ogren

An interactive **3D portfolio** built with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/).  
This project visualizes my **career, certifications, and journey** as an immersive trip through space.  

🌐 **Live Demo**: https://spaceprojportfolio.netlify.app/

---

## ✨ Features
- 🪐 **3D Space Journey** – Explore my career path as a journey through planets, stars, and galaxies.
- 📜 **Certifications & Skills** – Each milestone appears as part of the 3D environment.
- 🎮 **Interactive Navigation** – Fly around and discover different sections of my professional history.
- ⚡ Built with **Three.js + Vite**, deployed on **Netlify**.

---

## 🛠️ Tech Stack
- [Three.js](https://threejs.org/) – 3D rendering
- [Vite](https://vitejs.dev/) – Lightning-fast build tool
- [Netlify](https://www.netlify.com/) – Hosting & CI/CD
- JavaScript / HTML / CSS

---

## 🚀 Getting Started

Clone the repo:
```bash
git clone https://github.com/gav-ogren/Space-Portfolio.git
cd Space-Portfolio


Dependencies:

npm install
npm run dev
npm run build
npm run preview

Space-Portfolio/
│── public/              # Static assets (models, textures, bio content)
│── src/
│   ├── main.js          # Entry point
│   ├── components/      # Three.js scenes, objects, controls
│   ├── styles/          # CSS/Styling
│── index.html
│── vite.config.js
│── netlify.toml         # Netlify config (redirects, headers)
