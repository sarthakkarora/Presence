// src/app/api/getGeofences/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "@/config/mongoose";
import Geofence from "@/models/Geofence";

export async function GET() {
  try {
    await connectToDatabase();
    const geofence = await Geofence.find({});
    console.log("Fetched geofence:", geofence);
    return NextResponse.json(geofence);
  } catch (error) {
    console.error("Error in GET route:", error);
    return NextResponse.json(
      { error: "Failed to fetch geofence" },
      { status: 500 }
    );
  }
}
