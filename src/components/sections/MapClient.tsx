"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Darker burnt sienna — high contrast on the light OSM base map
const TRAIL_COLOR = "#8B3A0F";
const CENTER: [number, number] = [37.41, -111.065];

function markerIcon() {
  return L.divIcon({
    className: "",
    html: `<span style="
      display:block;width:12px;height:12px;
      background:${TRAIL_COLOR};border-radius:50%;
      border:2px solid #fff;
      box-shadow:0 1px 4px rgba(0,0,0,0.45)
    "></span>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [0, -10],
  });
}

function trailStyle(): L.PathOptions {
  return {
    color: TRAIL_COLOR,
    weight: 3,
    opacity: 0.9,
    lineCap: "round",
    lineJoin: "round",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onEachFeature(feature: any, layer: L.Layer) {
  const props = feature?.properties;
  if (!props?.title) return;
  (layer as L.Path).bindPopup(
    `<div class="cg-popup-title">${props.title}</div>${
      props.description
        ? `<div class="cg-popup-desc">${props.description}</div>`
        : ""
    }`,
    { className: "cg-popup", maxWidth: 240 }
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pointToLayer(_feature: any, latlng: L.LatLng): L.Layer {
  return L.marker(latlng, { icon: markerIcon() });
}

export default function MapClient() {
  const [geoData, setGeoData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/Coyote_Gulch.json")
      .then((r) => r.json())
      .then(setGeoData);
  }, []);

  return (
    <MapContainer
      center={CENTER}
      zoom={12}
      style={{ height: "100%", width: "100%", background: "#e8e0d4" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData && (
        <GeoJSON
          key="coyote-gulch-data"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={geoData as any}
          style={trailStyle}
          onEachFeature={onEachFeature}
          pointToLayer={pointToLayer}
        />
      )}
    </MapContainer>
  );
}
