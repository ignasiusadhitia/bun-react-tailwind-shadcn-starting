import { ProfileCard } from "@/components/shared";
import { profileData } from "@/data";
import React from "react";

const ProfileCardComponent: React.FC = () => {
  return (
    <ProfileCard
      name={profileData.name}
      description={profileData.description}
      image={profileData.image}
      socialMedia={profileData.socialMedia}
    />
  );
};

export default ProfileCardComponent;
