<div align='center'>

# Registration Form

![Registration Form](/docs/images/desktop-view.png)

![Registration Form](/docs/images/mobile-view.png)

**Ignasius Yuda Adhitia**

A modern registration form component using TanStack Form, Shadcn UI, and Tailwind CSS.

</div>

## Table of Contents

- [Registration Form](#registration-form)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Features Implemented](#features-implemented)
    - [Form Management](#form-management)
    - [Form Fields](#form-fields)
    - [Key Features](#key-features)
  - [Project Files Structure](#project-files-structure)
  - [Project Links](#project-links)
  - [Contact](#contact)

---

## About The Project

This project is a modern Registration Form built as part of a React + Bun + Tailwind + shadcn/ui + TanStack Form practice.

[↑ Back to top](#registration-form)

### Built With

- [React.js](https://react.dev/)
- [Bun](https://bun.sh/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [TanStack Form](https://tanstack.com/form/latest)
- [TypeScript](https://www.typescriptlang.org/)

[↑ Back to top](#registration-form)

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
   git clone https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-8
   ```

2. Open the project directory

   ```bash
   cd profile-card
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

[↑ Back to top](#registration-form)

## Features Implemented

### Form Management

- **TanStack Form**: Complete form state management without validation schema
- **Event Handling**: Console logs and toast notifications on focus, blur, and submit
- **Responsive Design**: Works perfectly on both mobile and desktop system

### Form Fields

- **Full Name** - Text input with user icon
- **Email** - Email input with mail icon
- **Password** - Password input with lock icon
- **Age** - Number input (16-65 range)
- **Birthdate** - Date input with calendar icon
- **Gender** - Select dropdown (Male/Female)
- **Learning** Path - Multiple checkboxes (Frontend, Backend, DevOps, UI/UX)
- **Notes** - Conditional textarea (only shows when "Add Notes?" is checked)

### Key Features

- **Conditional Rendering**: Notes field only appears when checkbox is checked
- **Event Handling**: Form focus shows toast notification, blur/submit logged to console
- **List Rendering**: Submitted data displayed in beautiful cards with badges
- **Toast Notifications**: Success message using Sonner when form is submitted
- **JSON Display**: Toggle button to show/hide raw JSON data

[↑ Back to top](#registration-form)

## Project Files Structure

```
src/
┣ components/
┃ ┣ shared/
┃ ┃ ┣ index.ts
┃ ┃ ┣ ParticipantList.tsx
┃ ┃ ┗ RegistrationForm.tsx
┃ ┗ ui/
┃   ┣ badge.tsx
┃   ┣ button.tsx
┃   ┣ card.tsx
┃   ┣ checkbox.tsx
┃   ┣ form.tsx
┃   ┣ input.tsx
┃   ┣ label.tsx
┃   ┣ select.tsx
┃   ┣ separator.tsx
┃   ┣ sonner.tsx
┃   ┗ textarea.tsx
┣ lib/
┃ ┗ utils.ts
┣ public/
┃ ┣ images/
┃ ┃ ┣ logo.svg
┃ ┃ ┗ react.svg
┃ ┣ styles/
┃ ┃ ┗ globals.css
┃ ┗ index.html
┣ types/
┃ ┣ index.ts
┃ ┗ registration.types.ts
┣ utils/
┃ ┣ formUtils.ts
┃ ┗ index.ts
┣ APITester.tsx
┣ App.tsx
┣ index.ts
┗ main.tsx
```

[↑ Back to top](#registration-form)

## Project Links

**Project Repo:** [https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-8](https://github.com/ignasiusadhitia/bun-react-tailwind-shadcn-starting/tree/feature/tugas-8)

[↑ Back to top](#registration-form)

## Contact

**Ignasius Yuda Adhitia**

- [Github](https://github.com/ignasiusadhitia/)
- [Gitlab](https://gitlab.com/ignasiusadhitia/)
- [LinkedIn](https://www.linkedin.com/in/ignasiusadhitia/)
- [Email](mailto:hi@ignasiusadhitia.com)
- [Website](https://www.ignasiusadhitia.com)

[↑ Back to top](#registration-form)
