"use client";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MainDock from "@/components/home/Dock";
import AdminDock from "@/components/home/Admindock";
import SwipeButton from "@/components/home/swiper";
import { useState } from "react";

export default function HomePage() {
  // Example role check
  const userRole = "employee"; // This would come from your auth system
  const { data: session } = useSession();
  const [isCheckedIn, setIsCheckedIn] = useState(false);


  const handleCheckIn = () => {
    console.log('Checked In');
    setIsCheckedIn(true);
    // Add your check-in logic here
  };

  const handleCheckOut = () => {
    console.log('Checked Out');
    setIsCheckedIn(false);
    // Add your check-out logic here
  };

  return (
    <div className="flex items-center justify-center">
      <h1 className="mb-16">home</h1>
      <SwipeButton onCheckIn={handleCheckIn} onCheckOut={handleCheckOut} />

      {session?.user?.role=== "admin"? <AdminDock /> : <MainDock />}
    </div>
  );
}
