import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <>
      <main className="">
        <nav className="m-0 p-0 fixed top-0 w-full bg-white z-10">
          <div className="mx-auto">
            <div className="flex justify-between items-center py-4 px-4 md:px-16">
              <div className="w-40 md:w-64">
                <Image src="/logo.svg" alt="Logo" width="200" height="200" />
              </div>
              <div>
                <Link href="/login" className="text-blue-500 font-semibold">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="ml-2 bg-blue-500 font-semibold hover:!bg-blue-700">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex md:flex-row mb-32 flex-col md:mt-32 mt-16 px-3 md:px-32 mx-auto">
          <div className="h-full w-full max-w-[40rem] items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#00bf89"} duration={0.5}>
              <p className="md:text-[3rem] text-[1.75rem] font-semibold">
                Geolocation-Based Mobile Attendance for Your On-the-Go Workforce{" "}
                <span className="text-[#2cb68f]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#00bf89"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                Attendance Management app for{" "}
                <span className="text-[#00bf89]">GAIL (India) Limited</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#00bf89"} duration={0.5}>
              <div className="mt-[1.5rem]">
                <p>
                  -&gt; Real-time attendance tracking with geolocation accuracy
                  up to 10 meters. <br />
                  -&gt; Automatic work hours calculation to streamline employee
                  management. <br />
                  -&gt; Comprehensive leave management system, including
                  approval and tracking of Paid Leaves (PL). <br />
                  -&gt; Built using
                  <span className="font-semibold text-[#2cb68f]"> Next.js</span>,
                  <span className="font-semibold text-[#00bf89]">
                    {" "}
                    MongoDB
                  </span>
                  ,
                  <span className="font-semibold text-[#00bf89]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-[#00bf89]">
                    {" "}
                    Capacitor
                  </span>
                  . <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#00bf89"} duration={0.5}>
              <Link href={"/signup"}><Button className="mt-[1.6rem] bg-blue-500 hover:!bg-blue-700">Get Started</Button></Link>
              <Link href={"/signup"}><Button className="mt-[1.6rem] bg-blue-500 hover:!bg-blue-700 ml-2">Download App</Button></Link>

            </BoxReveal>
          </div>
        <BlurFade delay={0.25*2} inView>
          <div id="main-image" className="md:px-8 py-16 md:py-0">
            <Image src={"/images/main-image.webp"} width={600} height={400}></Image>
          </div>
        </BlurFade>
        </div>
      </main>
    </>
  );
}
