import "@/public/styles/globals.css";

import { RegistrationForm } from "@/components/shared";
import { Toaster } from "sonner";

export function App() {
  return (
    <div>
      {/* Main Registration Form */}
      <RegistrationForm />

      {/* Toast Container - Sonner from Shadcn UI */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "hsl(var(--background)",
            color: "hsl(var(--foreground)",
            border: "1px solid hsl(var(--border))",
          },
        }}
      />
    </div>
  );
}

export default App;
