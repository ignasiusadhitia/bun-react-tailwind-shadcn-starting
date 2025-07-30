import type { ProfileData } from "@/interfaces";
import { socialMediaLinks } from "@/data/socialMedia";
import profileImage from "@/public/images/profile-image.webp";

/**
 * Profile data demo for thesting and development
 * This can be replaced by real data from API or props
 */
export const profileData: ProfileData = {
  name: "Ignasius Yuda Adhitia",
  description: "Frontend Developer",
  image: profileImage,
  socialMedia: socialMediaLinks,
};
