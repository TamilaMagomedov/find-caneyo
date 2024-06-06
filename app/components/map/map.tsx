'use client';

import React, { useState } from 'react';
import "./map.css";
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, { Marker, MapLayerMouseEvent } from 'react-map-gl/maplibre';

export default function DynamicMap() {
  const [markers, setMarkers] = useState<{ longitude: number; latitude: number }[]>([]);

  const handleMapClick = (event: MapLayerMouseEvent) => {
    const { lng, lat } = event.lngLat;
    setMarkers((prevMarkers) => [...prevMarkers, { longitude: lng, latitude: lat }]);
    console.log(markers)
  };

  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 35,
        zoom: 4
      }}
      style={{ width: "90%", height: "50%", borderRadius: "12px" }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=uPnhVVo9bM8FCxQAiEEW"
      onClick={handleMapClick}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="top"
          draggable
        >
        </Marker>))}

    </Map>
  );
}
