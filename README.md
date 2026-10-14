# 🚀 Modern Developer Portfolio & Workspace

[![React 19](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 7](https://img.shields.io/badge/Vite-7.2.5_(Rolldown)-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel_Edge-000000?logo=vercel&logoColor=white)](https://portfolio-react-version-eta.vercel.app/)

A high-performance, developer-first personal portfolio and interactive workspace crafted with **React 19**, **TypeScript**, and **Vite**. Built with modern spatial glassmorphism, an **Interactive GitHub-Style Workspace Tree Project Explorer**, multi-layered bot-protected contact handling, enterprise security headers, WCAG-compliant theming, and full legal/SEO compliance.

🔗 **Live Deployment**: [https://portfolio-react-version-eta.vercel.app/](https://portfolio-react-version-eta.vercel.app/)

---

## 🌟 What's New & Highlights

- **📂 GitHub Workspace Tree Project Explorer**: Replaces traditional flat cards with an IDE/GitHub-style file-system explorer featuring categorized directory trees (`full-stack-apps/`, `systems-and-cloud/`, `machine-learning/`, `iot-and-hardware/`), real-time architecture tabs, engineering metrics, and split-pane previews.
- **🛡️ Production Security & Hardening**: Strict HTTP security headers configured via `vercel.json` (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy), HTTPS upgrade enforcement, and frontend secrets isolation via `.env`.
- **🤖 Tri-Layer Bot & Spam Protection**: Contact form fortified with a hidden honeypot trap (`_gotcha`), bot timing heuristic (< 1.5s submission rejection), client-side field validation, and a 30-second submission rate limiter.
- **📜 GDPR / ePrivacy Legal Modals & Cookie Consent**: Sleek frosted glass cookie consent banner and zero-navigation in-app modals for **Privacy Policy** and **Terms & Conditions** with keyboard ESC listeners and scroll locking.
- **🔍 Comprehensive SEO & Social Sharing**: Pre-configured XML sitemap, `robots.txt`, Open Graph cards, Twitter large image summary, and custom SVG favicon & preview graphics.
- **⚡ Next-Gen React 19 Toolchain**: Powered by React 19, `rolldown-vite`, `babel-plugin-react-compiler`, and strict TypeScript.

---

## ✨ Features

### 🎨 Design & UI (Spatial Glassmorphism)
- **Glassmorphic Spatial UI**: Layered backdrop blur (`backdrop-filter: blur(16px)`), frosted pill borders, and glow effects.
- **Seamless Dark/Light Theme Switching**: Zero-latency theme toggle driven by CSS custom properties, persisted across sessions via `localStorage`.
- **WCAG High-Contrast Standards**: High text legibility tokens and high-contrast badges crafted for both dark space and crisp light backgrounds.
- **Smooth Micro-Animations**:
  - Intersection Observer scroll reveal animations (`<Reveal />`).
  - Dynamic typewriter role headline in the Hero section.
  - Floating ambient gradient orbs and organic morphing blob avatar.
  - Scroll-tracking dynamic navigation bar highlighting active sections with frosted glass indicators.
- **Responsive Navigation**: Desktop floating pill navbar and smooth mobile slide-in navigation drawer.

---

### 📱 Sections Overview

1. **Hero Section (`Hero.tsx`)**:
   - Ambient gradient orbs and morphing profile avatar.
   - Dynamic typewriter role subtitle.
   - High-impact glowing Primary CTA and Frosted Secondary CTA linking directly to projects and contact.
2. **Projects Explorer (`Projects.tsx`)**:
   - **GitHub / IDE File Tree**: Categorized folders (`full-stack-apps`, `systems-and-cloud`, `machine-learning`, `iot-and-hardware`) with individual file representations (`.tsx`, `.html`, `.go`, `.java`, `.ipynb`, `.ino`).
   - **Split-Pane Detail Stage**: Left-hand directory hierarchy sidebar and right-hand project stage.
   - **Engineering Metrics**: Displays TTFB, query latency, data sync, and bundle sizes per project.
   - **Architectural Breakdown**: Highlighting real-world problems solved, engineered solutions, and core technical advantages.
   - **Live Indicators & Source Links**: Direct links to live deployments and GitHub repositories.
3. **Experience Section (`Experience.tsx`)**:
   - Centered horizontal alternating timeline on desktop with staggered card positioning.
   - Snaps cleanly to a linear vertical timeline on mobile devices.
   - Glowing gradient badges for academic and professional milestones.
4. **Skills Bento Grid (`Skills.tsx`)**:
   - Bento-box grid categorized by Languages, Frameworks, Cloud/DevOps, Databases, and Core Tools.
   - Frosted technology tags with neon hover highlights.
5. **Education Section (`Education.tsx`)**:
   - Institutional timeline featuring academic degrees, specializations, and CGPA highlights.
6. **Contact Section (`Contact.tsx`)**:
   - Modern split layout: direct contact badges (Email, LinkedIn, GitHub) on the left, frosted glass submission form on the right.
   - Integrated with Web3Forms API.
   - Client-side field validations (email format, character constraints).
   - Anti-spam honeypot + timing validation + rate limiting.
7. **Footer & Legal Center (`Footer.tsx`, `LegalModals.tsx`, `CookieConsent.tsx`)**:
   - In-app modal popups for **Privacy Policy** and **Terms & Conditions**.
   - Accessible **Cookie Consent Banner** with "Accept All" and "Essential Only" preferences.
   - Terminal-style **404 Route Not Found** diagnostic modal.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/) | React 19 with hooks and state management |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Strict type checking, interfaces, and module definitions |
| **Build System** | [Vite 7 (Rolldown)](https://vitejs.dev/) | Blazing-fast compilation, HMR, and optimized tree-shaking |
| **Compiler** | [React Compiler](https://react.dev/learn/react-compiler) | `babel-plugin-react-compiler` for memoization optimizations |
| **Styling** | Vanilla CSS + CSS Variables | Glassmorphism, CSS Grid, Flexbox, zero runtime styling overhead |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather (`fi`), FontAwesome (`fa`), Simple Icons (`si`), VSCode (`vsc`) |
| **Form Backend** | [Web3Forms API](https://web3forms.com/) | Serverless form submission handling with honeypot security |
| **Hosting & Edge**| [Vercel](https://vercel.com/) | Edge network hosting with customized caching and security headers |

---

## 📂 Project Architecture

```
Portfolio react version/
├── .env.example              # Template for environment variables (API keys)
├── index.html                # Entry HTML with meta tags, OpenGraph, CSP, and fonts
├── package.json              # Dependencies and build scripts (React 19, Vite, TS)
├── tsconfig.json             # TypeScript compiler configuration
├── vercel.json               # Security headers, asset caching rules, and SPA rewrites
├── vite.config.ts            # Vite configuration with React compiler plugin
├── public/
│   ├── favicon.svg           # High-resolution vector favicon
│   ├── og-image.svg          # Social preview image (Open Graph / Twitter Cards)
│   ├── robots.txt            # Search crawler directives and sitemap reference
│   ├── sitemap.xml           # Search engine sitemap with canonical URLs
│   └── images/               # Project preview screenshots and system banners
└── src/
    ├── App.tsx               # Root component assembling layout, modals, and global background
    ├── main.tsx              # React DOM root entry point
    ├── index.css             # Design tokens, CSS variables (dark/light), and base styles
    ├── components/
    │   ├── CookieConsent.css # Styles for cookie consent banner
    │   ├── CookieConsent.tsx # GDPR-compliant theme/session cookie banner
    │   ├── Footer.tsx        # Footer with legal modal triggers and sitemap link
    │   ├── LegalModals.css   # Styles for slide-in legal dialogs
    │   ├── LegalModals.tsx   # Privacy Policy and Terms & Conditions modals
    │   ├── Navbar.css        # Responsive navigation bar and mobile drawer styles
    │   ├── Navbar.tsx        # Floating navbar with active section scroll-spy
    │   ├── NotFoundModal.tsx # Terminal-styled 404 route diagnostic modal
    │   ├── Reveal.tsx        # Scroll-reveal animation wrapper (Intersection Observer)
    │   └── TypeWriter.tsx    # Character-by-character typewriter effect component
    ├── context/
    │   └── ThemeContext.tsx  # Theme provider managing Dark/Light mode state
    ├── hooks/
    │   └── useScrollReveal.tsx # Custom hook for scroll-triggered element visibility
    └── sections/
        ├── About.css         # Styles for about / bio component
        ├── About.tsx         # Biographical profile summary
        ├── Contact.css       # Form styling, pill links, and validation alerts
        ├── Contact.tsx       # Secured contact form with honeypot & Web3Forms
        ├── Education.tsx     # Academic credentials and achievements
        ├── Experience.css    # Horizontal/vertical responsive timeline styles
        ├── Experience.tsx    # Professional career history timeline
        ├── Hero.css          # Hero visual styles, floating orbs, and CTA buttons
        ├── Hero.tsx          # Landing section with typewriter headline
        ├── Projects.css      # GitHub workspace tree explorer & preview pane styles
        ├── Projects.tsx      # Interactive workspace explorer & project catalog
        ├── Skills.css        # Bento grid styles and category pills
        └── Skills.tsx        # Technical skills matrix categorized by domain
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher (Recommended: Node 20 LTS)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sudhanwa755/Portfolio-react-version.git
   cd "Portfolio react version"
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Add your Web3Forms access key (obtain a free key at [Web3Forms](https://web3forms.com/)):
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   VITE_ANALYTICS_ID=
   ```

4. **Launch the development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` in your browser.

5. **Create a production build**
   ```bash
   npm run build
   ```
   To preview the generated production bundle locally:
   ```bash
   npm run preview
   ```

---

## 🔒 Security & Performance Features

### 1. HTTP Security Headers (`vercel.json`)
The deployment includes an automated suite of security headers:
- `Strict-Transport-Security`: Enforces 2-year HTTPS with `includeSubDomains` and `preload`.
- `X-Content-Type-Options`: `nosniff` prevents MIME-type sniffing.
- `X-Frame-Options`: `SAMEORIGIN` protects against clickjacking attacks.
- `X-XSS-Protection`: `1; mode=block` enables browser XSS filtering.
- `Referrer-Policy`: `strict-origin-when-cross-origin` preserves privacy while passing origin data securely.
- `Permissions-Policy`: Restricts camera, microphone, and geolocation API usage.

### 2. Contact Form Bot Protection
- **Honeypot Trap**: Invisible field `_gotcha` traps automated form-filling scripts silently.
- **Timing Analysis**: Submissions completed in under 1.5 seconds from page render are flagged and blocked as automated bots.
- **Rate Limiting**: Enforces a 30-second cooldown period between successive message dispatches.
- **Client-Side Validation**: Sanitizes and validates name (≥ 2 characters), standard RFC email regex format, and message length (≥ 10 characters).

### 3. Asset Caching & Optimization
- Immutable caching (`max-age=31536000, immutable`) for hashed Vite bundle assets in `/assets/`.
- Stale-while-revalidate caching (`max-age=86400, stale-while-revalidate=604800`) for static images in `/images/`.

---

## 💼 Featured Projects Showcase

The workspace explorer organizes projects across multiple disciplines:

| Project | Domain | Key Stack | Live / Repo |
| :--- | :--- | :--- | :--- |
| **Interactive SQL Handbook** | Frontend | HTML5, CSS3, JavaScript | [Live Demo](https://sql-handbook-beryl.vercel.app/) · [Code](https://github.com/sudhanwa755/sql-handbook) |
| **Modern Portfolio Workspace**| Frontend | React 19, TypeScript, Vite, CSS | [Live Demo](https://portfolio-react-version-eta.vercel.app/) · [Code](https://github.com/sudhanwa755/Portfolio-react-version) |
| **WattWise Utility Billing** | Backend | Spring Boot 3, PostgreSQL, Supabase | [Code](https://github.com/sudhanwa755/ElectricityBilling-Springboot-supabase) |
| **VoltNexus Utility System** | Full-Stack | JavaScript, Supabase, PostgreSQL | [Live Demo](https://volt-nexus-ebs-git-main-sudhanwa-kulkarni-s-projects.vercel.app/) · [Code](https://github.com/sudhanwa755/VoltNexus-EBS-) |
| **AI-Enabled Exam System** | Full-Stack | React, TypeScript, Supabase, Monaco | [Code](https://github.com/sudhanwa755/AI-Enabled-Examination-conducting-System) |
| **SurveyBoard Platform** | Full-Stack | PHP, MySQL, Chart.js, HTML5 | [Code](https://github.com/sudhanwa755/surveyboard_Advance_version) |
| **CloudWatchR Observability** | Systems & Cloud| Go, Kubernetes, Prometheus, Grafana | [Code](https://github.com/sudhanwa755/CloudWatchR) |
| **Apple Stock Forecasting** | Machine Learning| Python, Scikit-learn, Pandas | [Code](https://github.com/sudhanwa755/google-colab-project-) |
| **Biometric Attendance** | IoT & Hardware | NodeMCU, Arduino C++, Biometrics | [Code](https://github.com/sudhanwa755/IoT-Attendance-system) |

---

## 🌐 Deployment Guidelines

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **"Add New"** > **"Project"**.
3. Import your `Portfolio-react-version` repository.
4. Set the Build and Output settings (automatically detected):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. In the **Environment Variables** section, add:
   - `VITE_WEB3FORMS_ACCESS_KEY` = `<your_key>`
6. Click **Deploy**. Security headers and routing rules from [vercel.json](file:///c:/Users/sudhanwa/Documents/Projects%20trial%20versions/Portfolio%20react%20version/vercel.json) will automatically be applied.

---

## 👤 Author

**Sudhanwa Kulkarni**
- **Website**: [portfolio-react-version-eta.vercel.app](https://portfolio-react-version-eta.vercel.app/)
- **GitHub**: [@sudhanwa755](https://github.com/sudhanwa755)
- **LinkedIn**: [sudhanwa-kulkarni-b15437214](https://linkedin.com/in/sudhanwa-kulkarni-b15437214)
- **Email**: [Sudhanwa.kulkarni.work@gmail.com](mailto:Sudhanwa.kulkarni.work@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
