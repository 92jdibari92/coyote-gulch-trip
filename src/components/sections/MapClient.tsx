"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AMBER = "#c4813d";
const CENTER: [number, number] = [37.41, -111.065];

function amberDotIcon() {
  return L.divIcon({
    className: "",
    html: `<span style="
      display:block;width:10px;height:10px;
      background:${AMBER};border-radius:50%;
      border:1.5px solid rgba(196,129,61,0.5);
      box-shadow:0 0 0 3px rgba(196,129,61,0.12),0 0 10px rgba(196,129,61,0.35)
    "></span>`,
    iconSize: [10, 10],
    iconAnchor: [5, 5],
    popupAnchor: [0, -10],
  });
}

function trailStyle(): L.PathOptions {
  return {
    color: AMBER,
    weight: 2.5,
    opacity: 0.8,
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
  return L.marker(latlng, { icon: amberDotIcon() });
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
      style={{ height: "100%", width: "100%", background: "#0d0a07" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
