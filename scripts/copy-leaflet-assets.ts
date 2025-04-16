import fs from 'fs';
import path from 'path';

const leafletPath = path.join(process.cwd(), 'node_modules', 'leaflet', 'dist', 'images');
const publicPath = path.join(process.cwd(), 'public');

// Copy marker icons
fs.copyFileSync(
  path.join(leafletPath, 'marker-icon.png'),
  path.join(publicPath, 'marker-icon.png')
);
fs.copyFileSync(
  path.join(leafletPath, 'marker-icon-2x.png'),
  path.join(publicPath, 'marker-icon-2x.png')
);
fs.copyFileSync(
  path.join(leafletPath, 'marker-shadow.png'),
  path.join(publicPath, 'marker-shadow.png')
);
