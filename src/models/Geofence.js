// models/Geofence.js

import mongoose from "mongoose";

const GeofenceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  radius: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Geofence || mongoose.model("Geofence", GeofenceSchema, "geofences");
