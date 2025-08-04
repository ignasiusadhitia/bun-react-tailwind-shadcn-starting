import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProfileData } from "@/interfaces";
import { User } from "lucide-react";

import { useEffect, useState } from "react";

export const ProfileCard = ({
  name,
  description,
  image,
  socialMedia,
}: ProfileData) => {
  // Name typing animation state
  const [displayedName, setDisplayedName] = useState<string>("");
  const [nameIndex, setNameIndex] = useState<number>(0);

  // Hover effects and animation state
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Triggers animation when coumponent mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Name typing animation effect
  useEffect(() => {
    if (nameIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + name[nameIndex]);
        setNameIndex((prev) => prev + 1);
      }, 80); // Typing speed 80ms per characters

      return () => clearTimeout(timeout);
    }
  }, [nameIndex]);

  // Function to handle social media click
  const handleSocialClick = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Main Card dengan animasi menggunakan Tailwind utilities */}
      <Card
        className={`
          bg-card/90 backdrop-blur-sm border-muted shadow-lg 
          transition-all duration-500 ease-out
          hover:shadow-xl hover:scale-[1.02] 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          ${isCardHovered ? "border-primary/30 shadow-primary/10" : ""}
        `}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <CardContent className="flex flex-col md:flex-row items-center pt-6 gap-6">
          {/* Avatar Section dengan Tailwind animations */}
          <div className="relative group">
            {/* Pulse ring effect menggunakan Tailwind */}
            <div
              className={`
              absolute inset-0 rounded-full bg-primary/20 
              transition-all duration-700 ease-out
              ${
                isCardHovered
                  ? "scale-110 opacity-0 animate-ping"
                  : "scale-100 opacity-0"
              }
            `}
            ></div>

            {/* Avatar componenent with animations */}
            <div className="relative">
              <Avatar
                className="
                w-24 h-24 md:w-32 md:h-32 
                border-2 border-background shadow-md 
                transition-all duration-300 ease-out
                group-hover:scale-105 
                animate-bounce
              "
                style={{
                  animationDuration: "3s",
                  animationIterationCount: "infinite",
                }}
              >
                <AvatarImage
                  src={image}
                  alt={`${name} profile picture`}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>

              {/* Status indicator pulse */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center md:text-left flex-1">
            {/* Name Container */}
            <div className="min-h-[2.5rem] mb-3">
              <h2
                className={`
                text-2xl md:text-3xl font-bold leading-tight text-foreground
                transition-all duration-500 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }
              `}
              >
                {displayedName}
                {nameIndex < name.length && (
                  <span className="animate-pulse text-primary ml-1">|</span>
                )}
              </h2>
            </div>

            {/* Description */}
            <div
              className={`
              mb-6 transition-all duration-700 ease-out delay-300
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
            >
              <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Social Media Buttons */}
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              {socialMedia.map((item, index) => (
                <Button
                  key={item.name}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSocialClick(item.url)}
                  className={`
                    group relative overflow-hidden
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-md hover:-translate-y-1
                    cursor-pointer
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }
                  `}
                  style={{
                    transitionDelay: `${500 + index * 100}ms`,
                  }}
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span
                    className="group-hover:animate-bounce relative z-10"
                    style={{ animationDuration: "0.6s" }}
                  >
                    {item.icon}
                  </span>
                  <span className="ml-2 relative z-10">{item.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Floating elements animations */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
        aria-hidden="true"
      >
        {/* Decorative floating dots with various timing */}
        {[
          {
            top: "top-20",
            left: "left-20",
            size: "w-2 h-2",
            color: "bg-blue-400/30",
            delay: "0s",
            duration: "3s",
          },
          {
            top: "top-40",
            left: "right-32",
            size: "w-1 h-1",
            color: "bg-purple-400/40",
            delay: "1s",
            duration: "4s",
          },
          {
            top: "bottom-32",
            left: "left-40",
            size: "w-1.5 h-1.5",
            color: "bg-pink-400/35",
            delay: "2s",
            duration: "5s",
          },
          {
            top: "bottom-20",
            left: "right-20",
            size: "w-1 h-1",
            color: "bg-indigo-400/30",
            delay: "0.5s",
            duration: "3.5s",
          },
        ].map((dot, index) => (
          <div
            key={index}
            className={`absolute ${dot.top} ${dot.left} ${dot.size} ${dot.color} rounded-full animate-ping`}
            style={{
              animationDelay: dot.delay,
              animationDuration: dot.duration,
            }}
          />
        ))}
      </div>
    </>
  );
};
