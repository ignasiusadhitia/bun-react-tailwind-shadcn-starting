<div align='center'>

# Counter App

![Counter App](/screenshot/counter-screenshot.png)

**Ignasius Yuda Adhitia**

A simple interactive counter app built with Bun, React.js, TailwindCSS, and TypeScript.

</div>

## Table of Contents

- [Counter App](#counter-app)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Features](#features)
  - [Project Files Structure](#project-files-structure)
  - [Project Links](#project-links)
  - [Contact](#contact)

---

## About The Project

This project is a basic interactive counter built as part of a React + Bun + Tailwind practice. It demonstrates clean component structure, animation with TailwindCSS, reusable button components with variants (default, outline, disabled), and proper state management in React.

[↑ Back to top](#counter-app)

### Built With

- [React.js](https://react.dev/)
- [Bun](https://bun.sh/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

[↑ Back to top](#counter-app)

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed.

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Installation

Follow these steps to run the project locally:

1. Clone the repository

   ```bash
   git clone https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-6
   ```

2. Open the project directory

   ```bash
   cd counter-app
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

   ```
   http://localhost:3000/
   ```

6. To build and run production:

   ```bash
   bun start
   ```

[↑ Back to top](#counter-app)

## Features

- ✅ React counter with increment, decrement, and reset
- ✅ Tailwind-based animation when count updates
- ✅ Reusable `Button` component with variants:
  - Default
  - Outline
  - Disabled
- ✅ Bun + TypeScript project setup
- ✅ Clear project structure and state management

[↑ Back to top](#counter-app)

## Project Files Structure

```
src/
├── components/
│ ├── shared/       // Reuseable component
│ │ ├── Button.tsx
│ │ └── Counter.tsx
│ └── ui/       // Shadcn component
│ ├── button.tsx
│ ├── card.tsx
│ ├── form.tsx
│ ├── input.tsx
│ ├── label.tsx
│ └── select.tsx
├── lib/        // Utility functions
│ └── utils.ts
├── public/
│ ├── images/       // Assets
│ │ ├── logo.svg
│ │ └── react.svg
│ ├── styles/       // Global CSS file
│ │ └── globals.css
│ └── index.html        // Main HTML file
├── APITester.tsx       // API Testing component
├── App.tsx     // Main application component
├── index.ts        // Entry point for the application
└── main.tsx        // Main entry file for the React application
```

[↑ Back to top](#counter-app)

## Project Links

**Project Repo:** [https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-6](https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-6)

[↑ Back to top](#counter-app)

## Contact

**Ignasius Yuda Adhitia**

- [Github](https://github.com/ignasiusadhitia/)
- [Gitlab](https://gitlab.com/ignasiusadhitia/)
- [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/)
- [Email](mailto:hi@ignasiusadhitia.com)
- [Website](https://www.ignasiusadhitia.com)

[↑ Back to top](#counter-app)
