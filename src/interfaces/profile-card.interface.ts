/**
 * Social media profile interface
 * Define structure for every social media platform
 */
export interface SocialMediaProfile {
  /** Social media platform name */
  name: string;
  /** Profile URL */
  url: string;
  /** React icon component from lucide-react */
  icon: React.ReactNode;
}

/**
 * Profile data interface
 * Define complete structure of user profile
 */
export interface ProfileData {
  /** User name */
  name: string;
  /** User role or job title */
  description: string;
  /** User profile image URL */
  image: string;
  /** Sorial media profiles array */
  socialMedia: SocialMediaProfile[];
}
