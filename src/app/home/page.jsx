"use client";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MainDock from "@/components/home/Dock";
import AdminDock from "@/components/home/Admindock";

export default function HomePage() {
  // Example role check
  const userRole = "employee"; // This would come from your auth system
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center">
      <h1>home</h1>
      {session?.user?.role=== "admin"? <AdminDock /> : <MainDock />}
    </div>
  );
}
