"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function ShipmentMap({ route }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current && route && route.length > 0) {
      const coords = route.map((p) => [p.lng, p.lat]);
      const current = coords[coords.length - 1];

      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
        center: current,
        zoom: 3,
        attributionControl: true,
      });

      map.current.on("load", () => {
        const attribution = map.current._controls.find((c) => c instanceof maplibregl.AttributionControl);

        attribution._container.innerHTML =
          "Tesla Express Cargo · " + '<a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors · ';
      });

      map.current.addControl(new maplibregl.NavigationControl(), "top-right");

      const bounds = coords.reduce((b, coord) => b.extend(coord), new maplibregl.LngLatBounds(coords[0], coords[0]));
      map.current.fitBounds(bounds, {
        padding: { top: 100, bottom: 100, left: 100, right: 100 },
        maxZoom: 15,
      });

      map.current.on("load", () => {
        map.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: coords,
            },
          },
        });

        map.current.addLayer({
          id: "route-glow",
          type: "line",
          source: "route",
          layout: { "line-join": "round", "line-cap": "round" },
          paint: {
            "line-color": "#2dd4bf",
            "line-width": 12,
            "line-opacity": 0.3,
            "line-blur": 4,
          },
        });

        map.current.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          layout: { "line-join": "round", "line-cap": "round" },
          paint: {
            "line-color": "#14b8a6",
            "line-width": 5,
            "line-opacity": 1,
          },
        });

        const startMarker = document.createElement("div");
        startMarker.innerHTML = `
          <div style="
            width: 36px;
            height: 36px;
            background: linear-gradient(135deg, #10b981, #059669);
            border: 3px solid #1e293b;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 16px rgba(16, 185, 129, 0.6), 0 0 0 4px rgba(16, 185, 129, 0.2);
            position: relative;
            cursor: pointer;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background: white;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "></div>
          </div>
        `;

        new maplibregl.Marker({ element: startMarker, anchor: "bottom" })
          .setLngLat(coords[0])
          .setPopup(
            new maplibregl.Popup({
              offset: 25,
              className: "premium-popup",
            }).setHTML(`
              <div style="padding: 8px 12px;">
                <div style="font-weight: 600; font-size: 14px; color: #f1f5f9; margin-bottom: 4px;">
                  ${route[0].name}
                </div>
                <div style="font-size: 12px; color: #94a3b8;">
                  Origin
                </div>
              </div>
            `)
          )
          .addTo(map.current);

        route.slice(1, -1).forEach((p, i) => {
          const waypoint = document.createElement("div");
          waypoint.innerHTML = `
            <div style="
              width: 32px;
              height: 32px;
              background: linear-gradient(135deg, #14b8a6, #0d9488);
              border: 3px solid #1e293b;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              box-shadow: 0 4px 12px rgba(20, 184, 166, 0.5), 0 0 0 3px rgba(20, 184, 166, 0.15);
              position: relative;
              cursor: pointer;
            ">
              <div style="
                width: 10px;
                height: 10px;
                background: white;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "></div>
            </div>
          `;

          new maplibregl.Marker({ element: waypoint, anchor: "bottom" })
            .setLngLat([p.lng, p.lat])
            .setPopup(
              new maplibregl.Popup({
                offset: 25,
                className: "premium-popup",
              }).setHTML(`
                <div style="padding: 8px 12px;">
                  <div style="font-weight: 600; font-size: 14px; color: #f1f5f9; margin-bottom: 4px;">
                    ${p.name}
                  </div>
                  <div style="font-size: 12px; color: #94a3b8;">
                    Waypoint ${i + 1}
                  </div>
                </div>
              `)
            )
            .addTo(map.current);
        });

        const pulsingMarker = document.createElement("div");
        pulsingMarker.className = "pulse-marker-container";
        pulsingMarker.innerHTML = `
          <div class="pulse-ring pulse-ring-1"></div>
          <div class="pulse-ring pulse-ring-2"></div>
          <div class="pulse-marker-core">
            <div class="pulse-marker-inner"></div>
          </div>
        `;

        new maplibregl.Marker({ element: pulsingMarker, anchor: "center" })
          .setLngLat(current)
          .setPopup(
            new maplibregl.Popup({
              offset: 25,
              className: "premium-popup",
            }).setHTML(`
              <div style="padding: 8px 12px;">
                <div style="font-weight: 600; font-size: 14px; color: #f1f5f9; margin-bottom: 4px;">
                  ${route[route.length - 1].name}
                </div>
                <div style="font-size: 12px; color: #5eead4; display: flex; align-items: center; gap: 6px;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: #14b8a6; border-radius: 50%; animation: blink 1.5s infinite;"></span>
                  Current Location
                </div>
              </div>
            `)
          )
          .addTo(map.current);
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [route]);

  if (!route || route.length === 0) {
    return (
      <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center">
        <p className="text-gray-400 text-sm sm:text-base">No route to display</p>
      </div>
    );
  }

  return <div ref={mapContainer} className="h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden" />;
}
