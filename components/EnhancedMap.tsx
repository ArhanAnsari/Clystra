'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import Leaflet CSS in a way that works with SSR
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet and its components
const L = dynamic(() => import('leaflet'), { ssr: false });
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const Circle = dynamic(
  () => import('react-leaflet').then((mod) => mod.Circle),
  { ssr: false }
);

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Fix for default marker icons
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/marker-icon-2x.png',
        iconUrl: '/marker-icon.png',
        shadowUrl: '/marker-shadow.png',
      });
    }
  }, []);

  if (!isClient) {
    return <div className="h-[600px] bg-gray-100 dark:bg-gray-800 animate-pulse" />;
  }

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
