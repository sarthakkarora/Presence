"use client";
import ClientSideMap from './ClientSideMap';
import { useEffect, useState } from "react";

const YourPage = () => {

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
    </div>
  );
};

export default YourPage;