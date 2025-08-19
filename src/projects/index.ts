import { lazy } from "react";

export const projects = [
  {
    id: "registration-form",
    name: "Registration Form",
    description: "Bootcamp Registration From",
    component: lazy(() => import("./registration-form")),
  },
  {
    id: "profile-card",
    name: "Profile Card",
    description: "Responsive profile card built with shadcn/ui",
    component: lazy(() => import("./profile-card")),
  },
  {
    id: "counter-app",
    name: "Counter App",
    description: "Counter with Tailwind animation and reusable buttons",
    component: lazy(() => import("./counter-app")),
  },
];
