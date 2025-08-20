<div align="center">

# 🚀 React Projects Showcase

![Dragon Ball App](/docs/images/desktop-screenshot.png)
![Dragon Ball App](/docs/images/mobile-screenshot.png)

**Ignasius Yuda Adhitia**

This repository contains a collection of small projects built with **React.js**, **Bun**, **TailwindCSS**, and **TypeScript** as part of a learning process. Each branch contains a self-contained project demonstrating a specific concept or UI pattern, including a comprehensive Dragon Ball characters explorer with modern React practices.

</div>

---

## 🗂️ Table of Contents

- [🚀 React Projects Showcase](#-react-projects-showcase)
  - [🗂️ Table of Contents](#️-table-of-contents)
  - [🧾 About This Repository](#-about-this-repository)
  - [🚀 Getting Started](#-getting-started)
  - [📌 Projects](#-projects)
    - [1. Dragon Ball Characters App](#1-dragon-ball-characters-app)
      - [✅ Features](#-features)
      - [🔧 Built With](#-built-with)
      - [📁 API Integration](#-api-integration)
      - [⚡ Performance Optimizations](#-performance-optimizations)
    - [2. Profile Card](#2-profile-card)
      - [✅ Features](#-features-1)
      - [🔧 Built With](#-built-with-1)
    - [3. Counter App](#3-counter-app)
      - [✅ Features](#-features-2)
      - [🔧 Built With](#-built-with-2)
  - [📁 File Structure](#-file-structure)
  - [🔗 Project Links](#-project-links)
  - [📫 Contact](#-contact)

---

## 🧾 About This Repository

This repository is a learning playground for building modern React applications using Bun, TailwindCSS, and shadcn/ui. Each project lives in its own branch and explores different aspects of frontend development. The main project demonstrates advanced React patterns including custom hooks, context API, global state management with Zustand, API integration, search optimization with useMemo, and a complete dark/light theme system.

---

## 🚀 Getting Started

**Prerequisites:**

Install Bun (if not already installed):

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Installation:**

1. Clone the repository:

```bash
git clone https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting
```

2. Navigate to the project directory:

```bash
cd bun-react-tailwind-shadcn-starting
```

3. Install dependencies:

```bash
bun install
```

4. Start the development server:

```bash
bun dev
```

5. Open your browser and go to:

```bash
http://localhost:3000/
```

6. To build and run production:

```bash
bun start
```

## 📌 Projects

### 1. Dragon Ball Characters App

> A comprehensive Dragon Ball characters explorer built with modern React practices, featuring API integration, search functionality, dark mode, and global state management using Zustand and shadcn/ui.

![Dragon Ball App Desktop](/docs/images/desktop-screenshot.png)
![Dragon Ball App Mobile](/docs/images/mobile-screenshot.png)

#### ✅ Features

**Core Features:**

- ✅ **Dragon Ball API Integration** - Fetch and display character data from Dragon Ball API
- ✅ **Advanced Search** - Real-time search with useMemo optimization for performance
- ✅ **Dark/Light Mode** - Complete theme system using useContext and Tailwind CSS
- ✅ **Zustand State Management** - Global counter with increment, decrement, and reset actions
- ✅ **shadcn/ui Components** - Professional UI components with consistent design system

**Additional Features:**

- ✅ **Loading Skeletons** - Smooth loading states for better UX
- ✅ **Error Handling** - Comprehensive error boundaries and user feedback
- ✅ **Responsive Design** - Mobile-first approach with grid layouts
- ✅ **Character Cards** - Rich character information with hover animations
- ✅ **Statistics Dashboard** - Universe metrics and character analytics
- ✅ **Multi-criteria Search** - Search by name, race, and affiliation
- ✅ **Dynamic Badges** - Color-coded affiliation indicators
- ✅ **Ki Power Indicators** - Visual power level representations
- ✅ **Accessibility** - WCAG 2.1 compliant with proper ARIA labels

**Technical Features:**

- ✅ **TypeScript Integration** - Full type safety with interfaces
- ✅ **Performance Optimization** - useMemo, lazy loading, and efficient re-renders
- ✅ **Custom Hooks** - Reusable logic with useTheme hook
- ✅ **Context API** - Global theme management
- ✅ **Suspense & Error Boundaries** - Advanced error handling patterns

#### 🔧 Built With

- [React.js](https://react.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zustand](https://github.com/pmndrs/zustand) - Global state management
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Dragon Ball API](https://dragonball-api.com/) - Data source

#### 📁 API Integration

**Endpoints Used:**

```bash
# Main characters endpoint
GET https://dragonball-api.com/api/characters?limit=50

# API Documentation
https://web.dragonball-api.com/documentation
```

**Data Structure:**

```typescript
interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet?: {
    name: string;
    isDestroyed: boolean;
  };
  transformations?: Array<{
    id: number;
    name: string;
    image: string;
    ki: string;
  }>;
}
```

#### ⚡ Performance Optimizations

- **useMemo**: Search functionality optimized to prevent unnecessary re-renders
- **useCallback**: Event handlers memoized for stable references
- **React.memo**: Character cards wrapped to prevent re-renders
- **Lazy Loading**: Images loaded on demand with loading states

---

### 2. Profile Card

> A responsive profile card component with TailwindCSS layout and shadcn/ui elements.

![Profile Card Desktop](/docs/images/profile-card/desktop-screenshot.png)
![Profile Card Mobile](/docs/images/profile-card/mobile-screenshot.png)

#### ✅ Features

- Responsive layout (mobile & desktop)
- TypeScript support
- Reusable UI components via `shadcn/ui`

#### 🔧 Built With

- React.js
- Bun
- TailwindCSS
- shadcn/ui
- TypeScript

---

### 3. Counter App

> A simple but styled counter with reusable buttons and Tailwind animation.

![Counter App Desktop](/docs/images/counter-app/desktop-screenshot.png)
![Counter App Mobile](/docs/images/counter-app/mobile-screenshot.png)

#### ✅ Features

- Increment, decrement, and reset functionality
- TailwindCSS animation on state change
- Reusable button components with variants

#### 🔧 Built With

- React.js
- Bun
- TailwindCSS
- TypeScript

---

## 📁 File Structure

```
📦 src/                               # Root source code
├── 📁 components/                    # Reusable UI components
│   ├── 📁 shared/                    # Project-specific shared components
│   │   ├── 📁 counter-app/           # Counter project components
│   │   │   ├── 📁 Button/            # Button component (atomic)
│   │   │   │   ├── 📄 Button.tsx
│   │   │   │   └── 📄 Button.types.ts
│   │   │   └── 📁 Counter/           # Counter display component
│   │   │       ├── 📄 Counter.tsx
│   │   │       └── 📄 Counter.types.ts
│   │   ├── 📁 dragon-ball/           # Dragon Ball project components
│   │   │   ├── 📄 CharacterCard.tsx  # UI for individual characters
│   │   │   ├── 📄 CharacterSkeleton.jsx  # Skeleton loader
│   │   │   ├── 📄 CounterZustand.tsx    # Example Zustand store usage
│   │   │   ├── 📄 index.ts
│   │   │   ├── 📄 SearchBar.tsx      # Search bar component
│   │   │   └── 📄 ThemeToggle.tsx    # Dark/Light mode switcher
│   │   ├── 📁 profile-card/          # Profile Card project
│   │   │   └── 📄 ProfileCard.tsx
│   │   ├── 📄 index.ts
│   │   └── 📄 ProjectSkeleton.tsx    # Generic skeleton loader
│   └── 📁 ui/                        # UI primitives (from shadcn/ui)
│       ├── 📄 alert.tsx
│       ├── 📄 avatar.tsx
│       ├── 📄 badge.tsx
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 form.tsx
│       ├── 📄 input.tsx
│       ├── 📄 label.tsx
│       ├── 📄 scroll-area.tsx
│       ├── 📄 select.tsx
│       ├── 📄 separator.tsx
│       ├── 📄 sheet.tsx
│       ├── 📄 sidebar.tsx
│       ├── 📄 skeleton.tsx
│       └── 📄 tooltip.tsx
│
├── 📁 context/                       # React Context (global states)
│   ├── 📄 index.ts
│   └── 📄 ThemeContext.tsx           # Dark/Light theme provider
│
├── 📁 data/                          # Static data or constants
│   ├── 📄 index.ts
│   ├── 📄 profile.ts
│   └── 📄 socialMedia.tsx
│
├── 📁 hooks/                         # Custom React hooks
│   └── 📄 use-mobile.ts              # Detect mobile screen
│
├── 📁 interfaces/                    # TypeScript interfaces
│   ├── 📄 counter.interface.ts
│   ├── 📄 dragonball.interface.ts
│   ├── 📄 index.ts
│   ├── 📄 profile-card.interface.ts
│   └── 📄 theme.interface.ts
│
├── 📁 lib/                           # Utility functions/helpers
│   └── 📄 utils.ts
│
├── 📁 projects/                      # Project entrypoints (mapping to UI)
│   ├── 📄 counter-app.tsx
│   ├── 📄 dragon-ball.tsx
│   ├── 📄 index.ts
│   └── 📄 profile-card.tsx
│
├── 📁 public/                        # Public assets
│   ├── 📁 images/
│   │   ├── 🖼️ logo.svg
│   │   ├── 🖼️ profile-image.webp
│   │   └── 🖼️ react.svg
│   ├── 📁 styles/
│   │   └── 📄 globals.css
│   └── 📄 index.html
│
├── 📁 store/                         # Zustand or Redux stores
│   └── 📄 counterStore.ts
│
├── 📁 types/                         # Global TypeScript types
│   └── 📄 common.ts
│
├── 📄 APITester.tsx                  # Debugging API tester component
├── 📄 App.tsx                        # Main app entry
├── 📄 index.ts                       # Exports / re-exports
└── 📄 main.tsx                       # React DOM entrypoint

```

---

## 🔗 Project Links

**Project Repository:** [https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting](https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting)

**API Documentation:** [https://web.dragonball-api.com/documentation](https://web.dragonball-api.com/documentation)

---

## 📫 Contact

**Ignasius Yuda Adhitia** - [Github](https://github.com/ignasiusadhitia/) - [Gitlab](https://gitlab.com/ignasiusadhitia/) - [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/) - [Email](hi@ignasiusadhitia.com) - [Website](www.ignasiusadhitia.com)
