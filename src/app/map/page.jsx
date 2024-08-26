"use client";
import ClientSideMap from './ClientSideMap';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MainDock from "@/components/home/Dock";
import AdminDock from "@/components/home/Admindock";

const YourPage = () => {
  const { data: session, status } = useSession();

  const [geofences, setGeofences] = useState([]);

  useEffect(() => {
    const fetchGeofences = async () => {
      const response = await fetch("/api/getGeofences");
      const data = await response.json();
      setGeofences(data);
    };

    fetchGeofences();
  }, []);

  console.log(geofences);


  return (
    
    <div>
      <ClientSideMap />
      {session?.user?.role=== "admin"? <AdminDock /> : <MainDock />}
    </div>
  );
};

export default YourPage;