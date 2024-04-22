import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const orderLocations = [

    { id: 1, lat: 39.1653, lng: -86.5264, title: 'Bloomington' }, // Bloomington
    { id: 2, lat: 39.7684, lng: -86.1581, title: 'Indianapolis' }, // Indianapolis
    { id: 3, lat: 39.1653, lng: -86.4264, title: 'Yellow wood' }, // Bloomington
    { id: 4, lat: 39.8884, lng: -86.1881, title: 'William creek' }, // Indianapolis
    { id: 5, lat: 39.9653, lng: -86.5264, title: 'Aerodrome' }  // Bloomington
];

const MapView = () => {
  return (
    <MapContainer center={[39.1653, -86.5264]} zoom={11} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {orderLocations.map((order) => (
        <Marker key={order.id} position={[order.lat, order.lng]}>
          <Popup>{order.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
