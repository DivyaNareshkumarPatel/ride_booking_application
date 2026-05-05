'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const driverIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3202/3202926.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

interface MapProps {
    center?: [number, number];
    pickup?: [number, number] | null;
    destination?: [number, number] | null;
    driverLocation?: [number, number] | null;
    status?: string;
}

function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 13);
        }
    }, [center, map]);
    return null;
}

export default function Map({ center = [23.0225, 72.5714], pickup, destination, driverLocation, status }: MapProps) {
    const [currentPos, setCurrentPos] = useState<[number, number] | null>(null);
    const [route, setRoute] = useState<[number, number][]>([]);

    useEffect(() => {
        if ("geolocation" in navigator) {
            const watchId = navigator.geolocation.watchPosition((position) => {
                setCurrentPos([position.coords.latitude, position.coords.longitude]);
            }, (error) => console.warn(error), {
                enableHighAccuracy: false,
                maximumAge: 10000,
                timeout: 10000
            });
            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    useEffect(() => {
        const fetchRoute = async (start: [number, number], end: [number, number]) => {
            try {
                const response = await axios.get(`https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`);
                if (response.data.routes && response.data.routes[0]) {
                    const coords = response.data.routes[0].geometry.coordinates.map((c: any) => [c[1], c[0]]);
                    setRoute(coords);
                }
            } catch (error) {
                console.error('Error fetching route:', error);
            }
        };

        if (status === 'ongoing' && driverLocation && destination) {
            fetchRoute(driverLocation, destination);
        } else if ((status === 'accepted' || status === 'arrived') && driverLocation && pickup) {
            fetchRoute(driverLocation, pickup);
        } else if (pickup && destination) {
            fetchRoute(pickup, destination);
        } else {
            setRoute([]);
        }
    }, [pickup, destination, driverLocation, status]);

    const mapCenter = driverLocation || pickup || currentPos || center;

    return (
        <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeView center={mapCenter} />

            {pickup && (
                <Marker position={pickup} icon={icon}>
                    <Popup>Pickup Location</Popup>
                </Marker>
            )}

            {destination && (
                <Marker position={destination} icon={icon}>
                    <Popup>Destination</Popup>
                </Marker>
            )}

            {driverLocation && (
                <Marker position={driverLocation} icon={driverIcon}>
                    <Popup>Driver</Popup>
                </Marker>
            )}

            {!driverLocation && currentPos && (
                <Marker position={currentPos} icon={icon}>
                    <Popup>You</Popup>
                </Marker>
            )}

            {route.length > 0 && (
                <Polyline positions={route} color="#000" weight={4} opacity={0.6} />
            )}
        </MapContainer>
    );
}
