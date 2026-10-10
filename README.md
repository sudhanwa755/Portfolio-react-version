# 🚀 Modern Portfolio Website

A premium, responsive portfolio website built with React, TypeScript, and modern web technologies. Features smooth animations, glassmorphism design, theme switching, and a functional contact form.

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Effects**: Modern glass-morphic cards with backdrop blur
- **Dark/Light Theme**: Seamless theme switching with persistent storage
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: 
  - Scroll-reveal animations with Intersection Observer
  - Typewriter effect for hero name
  - Staggered timeline animations
  - Hover effects with scale and shadow transitions
- **Premium Mobile Menu**: Slide-in hamburger menu with staggered item animations

### 📱 Sections
1. **Hero Section**: 
   - Animated gradient background with floating orbs
   - Typewriter effect for name & sleek role subtitle
   - High-impact glowing & frosted glass CTA buttons
   - **Morphing Blob Animation** for the profile picture

2. **Experience & Education**: 
   - Separated into two independent sections
   - **Horizontal Alternating Timeline**: Cards stagger up and down perfectly centered on desktop
   - Premium **Glowing Gradient Text** highlights for CGPA/Percentages
   - Automatically snaps to a vertical timeline on mobile

3. **Skills**: 
   - Modern Bento-Box grid layout for categories
   - Frosted micro-tags for individual technologies
   - Interactive glowing hover outlines

4. **Projects**: 
   - Featured project showcase inside macOS-style windows
   - Glassmorphic spatial UI interactions

5. **Contact & Footer**: 
   - **Modern Split Layout**: Contact pills on the left, frosted form on the right
   - Properly anchored bottom footer

### 🎨 Design & UI Updates (Spatial UI V4)
- **Glassmorphism Effects**: Modern glass-morphic cards with backdrop blur
- **Dark/Light Theme**: Seamless theme switching with persistent storage
- **WCAG Contrast Overhaul**: Perfectly tuned text tokens ensuring high readability in both Light and Dark modes.
- **Scroll Tracking Navbar**: Dynamic `IntersectionObserver` updates the active nav link with a frosted glass pill outline.
- **Smooth Animations**: Scroll-reveal, hover scaling, glowing neon shadows.



## 🛠️ Tech Stack

### Frontend Framework
- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server

### Styling
- **Vanilla CSS**: Custom CSS with CSS variables
- **CSS Modules**: Component-scoped styling
- **Glassmorphism**: Modern UI design pattern
- **Responsive Design**: Mobile-first approach

### Features & Libraries
- **React Hooks**: useState, useEffect, useContext
- **Context API**: Theme management
- **Intersection Observer API**: Scroll animations
- **Web3Forms**: Contact form backend

### Development Tools
- **ESLint**: Code linting
- **TypeScript Compiler**: Type checking
- **Vite Dev Server**: Hot module replacement

## 📂 Project Structure

```
Portfolio react version/
├── public/
│   └── images/              # Project images and assets
├── src/
│   ├── components/
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   ├── Reveal.tsx       # Scroll reveal animation wrapper
│   │   └── TypeWriter.tsx   # Typewriter effect component
│   ├── context/
│   │   └── ThemeContext.tsx # Theme management context
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with typewriter
│   │   ├── Experience.tsx   # Professional experience
│   │   ├── Education.tsx    # Educational background
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Featured projects
│   │   └── Contact.tsx      # Contact form with Web3Forms
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles and CSS variables
│   └── main.tsx             # App entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Portfolio react version"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Web3Forms** (Optional)
   - Get your access key from [Web3Forms](https://web3forms.com/)
   - Update the access key in `src/sections/Contact.tsx`

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

5. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Implementation Details

### Theme Switching
- Uses React Context API for global state management
- Persists theme preference in localStorage
- CSS variables for dynamic color switching
- Smooth transitions between themes

### Animations
- **Scroll Reveal**: Intersection Observer API detects when elements enter viewport
- **Typewriter Effect**: Custom React component with useState and useEffect
- **Staggered Animations**: CSS animation delays for sequential effects
- **Hover Effects**: CSS transforms and transitions

### Responsive Design
- Mobile-first CSS approach
- Breakpoint: 768px for mobile/desktop
- Hamburger menu with slide-in animation
- Flexible grid layouts

### Contact Form
- Web3Forms API integration
- Async form submission with fetch API
- Form validation (HTML5 required attributes)
- Success/error state management
- Auto-clear messages after 5 seconds

### Performance Optimizations
- Component-based architecture for code splitting
- CSS modules for scoped styling
- Optimized images
- Minimal dependencies

## 🎯 Key Features Implementation

### 1. Glassmorphism Cards
```css
background: rgba(var(--bg-rgb), 0.4);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.12);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
```

### 2. Scroll Reveal Animation
- Custom `Reveal` component using Intersection Observer
- Triggers animations when elements are 10% visible
- Adds CSS classes for fade-in and scale effects

### 3. Mobile Menu
- Slide-in from right with bouncy easing
- Staggered item animations (0.1s delays)
- Glassmorphism background with blur
- Auto-close on link click

### 4. TypeWriter Effect
- Character-by-character typing
- Configurable delay (100ms default)
- React hooks for state management

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

### Other Platforms
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Custom Server**: Serve `dist` folder with any static server

## 📝 Customization

### Update Personal Information
1. **Hero Section**: Edit `src/sections/Hero.tsx`
2. **Experience**: Edit `src/sections/Experience.tsx`
3. **Education**: Edit `src/sections/Education.tsx`
4. **Skills**: Edit `src/sections/Skills.tsx`
5. **Projects**: Edit `src/sections/Projects.tsx`

### Change Colors
- Edit CSS variables in `src/index.css`
- Update `--primary-color`, `--secondary-color`, etc.

### Add New Sections
1. Create new component in `src/sections/`
2. Import and add to `src/App.tsx`
3. Wrap with `<Reveal>` for scroll animations
4. Add navigation link in `src/components/Navbar.tsx`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sudhanwa Kulkarni**
- GitHub: [@sudhanwa755](https://github.com/sudhanwa755)
- LinkedIn: [sudhanwa-kulkarni-b15437214](https://linkedin.com/in/sudhanwa-kulkarni-b15437214)
- Email: Sudhanwa.kulkarni.work@gmail.com

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite for the blazing-fast build tool
- Web3Forms for the contact form service
- All open-source contributors

---

⭐ **If you like this project, please give it a star!** ⭐
