export default function MapPage() {
    return (
      <div>
        <h2>Nodal Locations</h2>
        <div>
          {/* Embed a map using Google Maps API or similar */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h3>Available Locations</h3>
          <ul>
            {/* List of locations */}
            <li>Location 1 - Address</li>
            <li>Location 2 - Address</li>
          </ul>
        </div>
      </div>
    );
  }
  