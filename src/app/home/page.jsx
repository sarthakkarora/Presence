"use client";
import { useSession, signOut } from "next-auth/react";
import MainDock from "@/components/home/Dock";
import AdminDock from "@/components/home/Admindock";
import { useState } from "react";
import CheckInOutButton from "@/components/home/swiper";
import EmployeeLeavesGauge from "@/components/home/leaves";
import { Card } from "./modernCard";
import { NotepadText, LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

export default function HomePage() {
  // Example role check
  const userRole = "employee"; // This would come from your auth system
  const { data: session } = useSession();
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = () => {
    console.log("Checked In");
    setIsCheckedIn(true);
    // Add your check-in logic here
  };

  const handleCheckOut = () => {
    console.log("Checked Out");
    setIsCheckedIn(false);
    // Add your check-out logic here
  };

  return (
    <div className="w-full min-h-screen dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
     
      <div className="flex items-center flex-col justify-center">
        <div className="flex items-center space-x-4 mt-8 pr-16 mr-2">
          {/* Profile Image */}
          <Image
            src="https://avatars.githubusercontent.com/u/175945557?s=80&v=4"
            width={60}
            height={60}
            alt="user"
            className="rounded-full"
          />

          {/* User Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-lg font-semibold">Akshita Srivastava</h1>
            <span className="text-sm text-gray-500">August 27, 2024</span>
          </div>
        </div>

        <div className="z-10 flex mt-4 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Today's Attendance</span>
            </AnimatedShinyText>
          </div>
        </div>

        <div className="items-center justify-center"></div>
        {/* <SwipeButton onCheckIn={handleCheckIn} onCheckOut={handleCheckOut} /> */}
        <div className="grid grid-cols-2 gap-4 my-4">
          <Card className="mt-2 !bg-white h-[9.5rem] w-[9.5rem]">
            <div id="checkin" className="flex flex-col">
              <div className="flex flex-row gap-1 mt-4">
                <div className="flex justify-center items-center bg-[#00bf898b] p-1 rounded">
                  <LogIn className="text-[#108e6a]" size={20} />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-[1.06rem] font-semibold">Check In</span>
                </div>
              </div>
              <div className="p-4 pl-0">
                <span className="text-3xl border-l-8 border-green-500 pl-2 text-green-600">
                  10:30
                </span>
              </div>
            </div>
          </Card>
          <Card className="mt-2 !bg-white h-[9.5rem] w-[9.5rem]">
            <div id="checkin" className="flex flex-col">
              <div className="flex flex-row gap-1 mt-4">
                <div className="flex justify-center items-center bg-[#00bf898b] p-1 rounded">
                  <LogOut className="text-[#108e6a]" size={20} />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-[1.06rem] font-semibold">
                    Check Out
                  </span>
                  <br></br>
                  <span></span>
                </div>
              </div>
              <div className="p-4 pl-0">
                <span className="text-3xl border-l-8 border-red-500 text-red-600 pl-2">
                  10:30
                </span>
              </div>
            </div>
          </Card>
          <Card className="mt-2 !bg-white h-[9.5rem] w-[9.5rem]">
            <div id="checkin" className="flex flex-col">
              <div className="flex flex-row gap-1 mt-4">
                <div className="flex justify-center items-center bg-[#00bf898b] p-1 rounded">
                  <NotepadText className="text-[#108e6a]" size={20} />
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-[1.03rem] font-semibold">
                    Work Days
                  </span>
                </div>
              </div>
              <div className="p-4 pl-0">
                <span className="text-[1.39rem] border-l-8 border-blue-500 pl-2 text-blue-600">
                  {26} Days
                </span>
              </div>
            </div>
          </Card>
          <Card className="mt-2 !bg-white h-[9.5rem] w-[9.5rem]">
            <EmployeeLeavesGauge remainingLeaves={2} />
          </Card>
        </div>

        <CheckInOutButton
          isCheckedIn={isCheckedIn}
          handleCheckIn={handleCheckIn}
          handleCheckOut={handleCheckOut}
        />

        {session?.user?.role === "admin" ? <AdminDock /> : <MainDock />}
      </div>
    </div>
  );
}
