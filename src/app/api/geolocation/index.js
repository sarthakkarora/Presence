import { NextResponse } from 'next/server';
import { ensureAuthenticated } from '../../../middleware/authMiddleware';
import { getGeolocations, addGeolocation } from '../../../utils/geolocationHelper';

export async function GET(request) {
  ensureAuthenticated(request);

  // Fetch geolocation data
  const geolocations = await getGeolocations();
  return NextResponse.json(geolocations);
}

export async function POST(request) {
  ensureAuthenticated(request);

  const { lat, lng, address } = await request.json();

  // Add a new geolocation
  const newGeolocation = await addGeolocation({ lat, lng, address });

  return NextResponse.json({ message: 'Geolocation added successfully', geolocation: newGeolocation });
}
