import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Presence",
  description: "Geolocation-Based Mobile Attendance for Your On-the-Go Workforce, made by the team ADSLabs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full ">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
