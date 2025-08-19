import React from "react";
import { RegistrationForm } from "@/components/shared";
import { Toaster } from "@/components/ui/sonner";

const RegistrationFormComponent: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default RegistrationFormComponent;
