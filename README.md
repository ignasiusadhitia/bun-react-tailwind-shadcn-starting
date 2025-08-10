<div align='center'>

# Dragon Ball Characters App

![Dragon Ball App](/docs/images/desktop-screenshot.png)
![Dragon Ball App](/docs/images/mobile-screenshot.png)

**[Ignasius Yuda Adhitia]**

A modern React application to explore Dragon Ball universe characters with search functionality, dark mode, and global state management using Zustand and shadcn/ui.

</div>

## Table of Contents

- [Dragon Ball Characters App](#dragon-ball-characters-app)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Features](#features)
    - [Core Features](#core-features)
    - [Additional Features](#additional-features)
    - [Technical Features](#technical-features)
  - [Project Files Structure](#project-files-structure)
  - [API Integration](#api-integration)
    - [Endpoints Used](#endpoints-used)
    - [Data Structure](#data-structure)
    - [Error Handling](#error-handling)
  - [Performance Optimizations](#performance-optimizations)
    - [React Optimizations](#react-optimizations)
  - [Project Links](#project-links)
  - [Contact](#contact)

---

## About The Project

This project is a comprehensive Dragon Ball characters explorer built with modern React practices. It demonstrates advanced React patterns including custom hooks, context API, global state management with Zustand, API integration, search optimization with useMemo, and a complete dark/light theme system. The application features a responsive design using shadcn/ui components and provides an engaging user experience for exploring the Dragon Ball universe.

The app fetches character data from the Dragon Ball API, implements real-time search functionality, and includes a counter component to showcase Zustand state management capabilities.

[↑ Back to top](#dragon-ball-characters-app)

### Built With

- [React.js](https://react.dev/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zustand](https://github.com/pmndrs/zustand) - Global state management
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Dragon Ball API](https://dragonball-api.com/) - Data source

[↑ Back to top](#dragon-ball-characters-app)

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed.

powershell -c "irm bun.sh/install.ps1 | iex"

### Installation

Follow these steps to run the project locally:

1. Clone the repository

```bash
git clone https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting
```

2. Open the project directory

```bash
cd bun-react-tailwind-shadcn-starting
```

3. Install dependencies

```bash
bun install
```

4. Run the project

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

[↑ Back to top](#dragon-ball-characters-app)

## Features

### Core Features

- ✅ **Dragon Ball API Integration** - Fetch and display character data from Dragon Ball API
- ✅ **Advanced Search** - Real-time search with useMemo optimization for performance
- ✅ **Dark/Light Mode** - Complete theme system using useContext and Tailwind CSS
- ✅ **Zustand State Management** - Global counter with increment, decrement, and reset actions
- ✅ **shadcn/ui Components** - Professional UI components with consistent design system

### Additional Features

- ✅ **Loading Skeletons** - Smooth loading states for better UX
- ✅ **Error Handling** - Comprehensive error boundaries and user feedback
- ✅ **Responsive Design** - Mobile-first approach with grid layouts
- ✅ **Character Cards** - Rich character information with hover animations
- ✅ **Statistics Dashboard** - Universe metrics and character analytics
- ✅ **Multi-criteria Search** - Search by name, race, and affiliation
- ✅ **Dynamic Badges** - Color-coded affiliation indicators
- ✅ **Ki Power Indicators** - Visual power level representations
- ✅ **Accessibility** - WCAG 2.1 compliant with proper ARIA labels

### Technical Features

- ✅ **TypeScript Integration** - Full type safety with interfaces
- ✅ **Performance Optimization** - useMemo, lazy loading, and efficient re-renders
- ✅ **Custom Hooks** - Reusable logic with useTheme hook
- ✅ **Context API** - Global theme management
- ✅ **Suspense & Error Boundaries** - Advanced error handling patterns

[↑ Back to top](#dragon-ball-characters-app)

## Project Files Structure

```
src/
┣ components/
┃ ┣ shared/
┃ ┃ ┣ Button/
┃ ┃ ┃ ┣ Button.tsx
┃ ┃ ┃ ┗ Button.types.ts
┃ ┃ ┣ Counter/
┃ ┃ ┃ ┣ Counter.tsx
┃ ┃ ┃ ┗ Counter.types.ts
┃ ┃ ┗ dragon-ball/
┃ ┃   ┣ CharacterCard.tsx
┃ ┃   ┣ CharacterSkeleton.jsx
┃ ┃   ┣ CounterZustand.tsx
┃ ┃   ┣ index.ts
┃ ┃   ┣ SearchBar.tsx
┃ ┃   ┗ ThemeToggle.tsx
┃ ┗ ui/
┃   ┣ alert.tsx
┃   ┣ badge.tsx
┃   ┣ button.tsx
┃   ┣ card.tsx
┃   ┣ form.tsx
┃   ┣ input.tsx
┃   ┣ label.tsx
┃   ┣ select.tsx
┃   ┗ skeleton.tsx
┣ context/
┃ ┣ index.ts
┃ ┗ ThemeContext.tsx
┣ interfaces/
┃ ┣ counter.interface.ts
┃ ┣ dragonball.interface.ts
┃ ┣ index.ts
┃ ┗ theme.interface.ts
┣ lib/
┃ ┗ utils.ts
┣ public/
┃ ┣ images/
┃ ┃ ┣ logo.svg
┃ ┃ ┗ react.svg
┃ ┣ styles/
┃ ┃ ┗ globals.css
┃ ┗ index.html
┣ store/
┃ ┗ counterStore.ts
┣ types/
┃ ┗ common.ts
┣ APITester.tsx
┣ App.tsx
┣ index.ts
┗ main.tsx
```

[↑ Back to top](#dragon-ball-characters-app)

## API Integration

The application integrates with the Dragon Ball API to fetch character data:

### Endpoints Used

```bash
# Main characters endpoint
GET https://dragonball-api.com/api/characters?limit=50

# API Documentation
https://web.dragonball-api.com/documentation

# Swagger Documentation
https://dragonball-api.com/api-docs
```

### Data Structure

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

### Error Handling

- Network error handling with user-friendly messages
- Image loading fallbacks with placeholder graphics
- API rate limiting considerations
- Loading states with skeleton components

[↑ Back to top](#dragon-ball-characters-app)

## Performance Optimizations

### React Optimizations

- **useMemo**: Search functionality optimized to prevent unnecessary re-renders
- **useCallback**: Event handlers memoized for stable references
- **React.memo**: Character cards wrapped to prevent re-renders
- **Lazy Loading**: Images loaded on demand with loading states

[↑ Back to top](#dragon-ball-characters-app)

## Project Links

**Project Repository:** [https://github.com/yourusername/dragon-ball-characters-app](https://github.com/yourusername/dragon-ball-characters-app)

**Live Demo:** [https://dragon-ball-characters-app.vercel.app](https://dragon-ball-characters-app.vercel.app)

**API Documentation:** [https://web.dragonball-api.com/documentation](https://web.dragonball-api.com/documentation)

[↑ Back to top](#dragon-ball-characters-app)

## Contact

**Ignasius Yuda Adhitia**

- [GitHub](https://github.com/ignasiusadhitia)
- [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia)
- [Email](mailto:ignasius.yuda.adhitia@gmail.com)
- [Portfolio](https://ignasiusadhitia.com)
- [Twitter](https://twitter.com/ignasiusadhitia)

[↑ Back to top](#dragon-ball-characters-app)
