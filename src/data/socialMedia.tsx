import type { SocialMediaProfile } from "@/interfaces";
import { Github, Globe, Instagram, Linkedin } from "lucide-react";

/**
 * Social media links for testing and development
 * This can be replaced by real data from API or props
 */

export const socialMediaLinks: SocialMediaProfile[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ignasiusadhitia/",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ignasiusadhitia",
    icon: <Github className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ignasiusadhitia/",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    name: "Web",
    url: "https://www.ignasiusadhitia.com/",
    icon: <Globe className="w-4 h-4" />,
  },
];
