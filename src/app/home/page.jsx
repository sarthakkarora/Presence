"use client";
import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  // Example role check
  const userRole = "employee"; // This would come from your auth system
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center">
      {session && (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 md:shadow-md shadow-input bg-white dark:bg-black md:mt-64 mt-64">
          <div className="flex gap-2 ">
            <div className="mt-2">
              <Avatar>
                <AvatarImage src={session.user.image} alt={session.user.name} />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Signed in as {session.user.email} <br />
                Username {session.user.name} <br />
                userRole {session.user.id} <br />
              </p>
            </div>
            <Button onClick={() => signOut()}  className="ml-2 mt-4 bg-blue-500 font-semibold hover:!bg-blue-700">
              Sign Out
            </Button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
