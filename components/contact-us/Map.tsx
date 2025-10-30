"use client";
import React, { useEffect, useState } from "react";

export default function MapSection() {
  const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(
    null
  );

  useEffect(() => {
    // Dynamically import the map component only on client side
    const loadMap = async () => {
      try {
        const { MapContainer, TileLayer, Marker, Popup, useMap } = await import(
          "react-leaflet"
        );
        const L = await import("leaflet");

        // Import CSS (ignore TypeScript error for CSS import)
        // @ts-expect-error CSS import not recognized by TypeScript
        await import("leaflet/dist/leaflet.css");

        // Fix for default markers in React Leaflet
        delete (
          L.Icon.Default.prototype as L.Icon.Default & {
            _getIconUrl?: () => void;
          }
        )._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        // Custom red marker icon
        const redIcon = new L.Icon({
          iconUrl:
            "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        const position: [number, number] = [25.3463, 55.4209];

        // Map control component to handle centering
        const MapController = ({
          targetPosition,
        }: {
          targetPosition: [number, number] | null;
        }) => {
          const map = useMap();

          React.useEffect(() => {
            if (targetPosition) {
              map.flyTo(targetPosition, 15, {
                duration: 1.5,
              });
            }
          }, [map, targetPosition]);

          return null;
        };

        const MapClient = () => {
          const [centerTarget, setCenterTarget] = React.useState<
            [number, number] | null
          >(null);

          const handleViewLargerMap = () => {
            if (typeof window !== "undefined") {
              const [lat, lng] = position;
              const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
              window.open(googleMapsUrl, "_blank");
            }
          };

          const handleCenterToMarker = () => {
            setCenterTarget(position);
            // Reset the target after a short delay to allow for future clicks
            setTimeout(() => setCenterTarget(null), 2000);
          };

          return (
            <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full relative">
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              >
                <MapController targetPosition={centerTarget} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={redIcon}>
                  <Popup className="custom-popup">
                    <div className="p-2">
                      <h3 className="font-bold text-lg mb-2">ADMS Office</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Al Majaz Jamal Abdul Nasser Street
                        <br />
                        Ground Floor (G-1)
                        <br />
                        Sharjah, UAE
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold">
                          Phone: +971 (02) 633 0660
                        </p>
                        <p className="font-semibold">Email: info@admsuae.com</p>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>

              {/* Info Card Overlay - Top Left */}
              <div className="absolute top-2 left-2 z-10 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    1 Building
                  </h3>

                  {/* direction for moving map */}
                  <button
                    onClick={handleCenterToMarker}
                    className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors duration-200 group"
                    title="Center map on location"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600 group-hover:text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="text-sm text-gray-600 mb-3 leading-relaxed">
                  <p>1 Building · 2 Jamal Abdul Naser St ·</p>
                  <p>Al Majaz 2 · Al Majaz · Sharjah ·</p>
                  <p>United Arab Emirates</p>
                </div>

                <button
                  onClick={handleViewLargerMap}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors cursor-pointer"
                >
                  View larger map
                </button>
              </div>
            </div>
          );
        };

        setMapComponent(() => MapClient);
      } catch (error) {
        console.error("Failed to load map:", error);
      }
    };

    loadMap();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 mb-20">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us On Map
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Visit our office location in Sharjah, UAE. We&apos;re conveniently
            located and easily accessible.
          </p>
        </div> */}

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {MapComponent ? (
            <MapComponent />
          ) : (
            <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Loading map...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
