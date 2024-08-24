"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-32 h-32 w-32">
        <Avatar>
          <AvatarImage className="h-16 w-16" src="https://avatars.githubusercontent.com/u/91323622?v=4" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default page;
