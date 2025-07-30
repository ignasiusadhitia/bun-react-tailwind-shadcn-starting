import "@/public/styles/globals.css";

import { ProfileCard } from "@/components/shared";
import { profileData } from "@/data";

export function App() {
  return (
    <div className="container mx-auto p-4 relative z-10 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 -z-10"></div>

      {/* Profile Component Card */}
      <ProfileCard
        name={profileData.name}
        description={profileData.description}
        image={profileData.image}
        socialMedia={profileData.socialMedia}
      />
    </div>
  );
}

export default App;
