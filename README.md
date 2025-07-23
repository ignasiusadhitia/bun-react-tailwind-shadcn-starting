<div align='center' id="top">

# Counter App

![Counter App](/screenshot/counter-screenshot.png)

### Ignasius Yuda Adhitia

A simple interactive counter app built with Bun, React.js, TailwindCSS, and TypeScript.

</div>

<!-- TABLE OF CONTENTS -->
<details>
    <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#about-the-project">About the Project</a>
            <ul>
                <li><a href="#built-with">Built With</a></li>
            </ul>
        </li>
        <li>
            <a href="#getting-started">Getting Started</a>
            <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
            </ul>
        </li>
        <li><a href="#features">Features</a></li>
        <li><a href="#project-files-structure">Project Files Structure</a></li>
        <li><a href="#project-links">Project Links</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a basic interactive counter built as part of a React + Bun + Tailwind practice. It demonstrates clean component structure, animation with TailwindCSS, reusable button components with variants (default, outline, disabled), and proper state management in React.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://react.dev/)
- [Bun](https://bun.sh/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

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

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- [x] React counter with increment, decrement, and reset
- [x] Tailwind-based animation when count updates
- [x] Reusable `Button` component with variants:

  - Default
  - Outline
  - Disabled

- [x] Bun + TypeScript project setup
- [x] Clear project structure and state management

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT FILES STRUCTURE -->

## Project Files Structure

```ts
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

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- PROJECT LINKS -->

## Project Links

Project Repo: [https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-6](https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-6)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ignasius Yuda Adhitia - [Github](https://github.com/ignasiusadhitia/) - [Gitlab](https://gitlab.com/ignasiusadhitia/) - [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/) - [Email](hi@ignasiusadhitia.com) - [Website](www.ignasiusadhitia.com)

<p align="right">(<a href="#top">back to top</a>)</p>
