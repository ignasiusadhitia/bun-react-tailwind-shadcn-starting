import { lazy } from "react";

export const projects = [
  {
    id: "counter-app",
    name: "Counter App",
    description: "Counter with Tailwind animation and reusable buttons",
    component: lazy(() => import("./counter-app")),
  },
  {
    id: "profile-card",
    name: "Profile Card",
    description: "Responsive profile card built with shadcn/ui",
    component: lazy(() => import("./profile-card")),
  },
];
