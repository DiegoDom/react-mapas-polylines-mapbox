import React from 'react';
import ReactDOM from 'react-dom/client';

import mapboxgl from 'mapbox-gl';

import { MapsApp } from './MapsApp';

import './styles.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_APIKEY!;

if (!navigator.geolocation) {
  alert('Debe habilitar la geolocalización para ejecutar esta aplicación.');
  throw new Error(
    'Debe habilitar la geolocalización para ejecutar esta aplicación.'
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
