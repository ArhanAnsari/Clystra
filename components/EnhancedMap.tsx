'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

interface CoverageArea {
  city: string;
  coordinates: [number, number];
  coverage: string;
  services: string[];
  radius: number; // in meters
}

interface EnhancedMapProps {
  coverageAreas: CoverageArea[];
}

export default function EnhancedMap({ coverageAreas }: Readonly<EnhancedMapProps>) {
  const [selectedArea, setSelectedArea] = useState<CoverageArea | null>(null);

  return (
    <MapContainer
      center={[21.1458, 79.0882]} // Centered on Nagpur
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coverageAreas.map((area) => (
        <div key={area.city}>
          <Circle
            center={area.coordinates}
            radius={area.radius}
            pathOptions={{
              color: '#3B82F6',
              fillColor: '#3B82F6',
              fillOpacity: 0.2,
            }}
            eventHandlers={{
              click: () => setSelectedArea(area),
            }}
          />
          <Marker position={area.coordinates}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{area.city}</h3>
                <p>Coverage: {area.coverage}</p>
                <p>Services:</p>
                <ul className="list-disc list-inside">
                  {area.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}
