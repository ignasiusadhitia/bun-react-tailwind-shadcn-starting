import { lazy } from "react";

export const projects = [
  {
    id: "dragon-ball",
    name: "Dragon Ball",
    description: "Dragon Ball",
    width: "full",
    component: lazy(() => import("./dragon-ball")),
  },
  {
    id: "profile-card",
    name: "Profile Card",
    width: "medium",
    description: "Responsive profile card built with shadcn/ui",
    component: lazy(() => import("./profile-card")),
  },
  {
    id: "counter-app",
    name: "Counter App",
    width: "narrow",
    description: "Counter with Tailwind animation and reusable buttons",
    component: lazy(() => import("./counter-app")),
  },
];
