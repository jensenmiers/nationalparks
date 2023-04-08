import mapboxToken from "../MapboxToken"
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = mapboxToken

function Map({ parkLat, parkLng}){

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(Number(parkLng));
    const [lat, setLat] = useState(Number(parkLat));
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
       
        map.current.on('load', () => {
            const marker = new mapboxgl.Marker()
              .setLngLat([Number(parkLng), Number(parkLat)])
              .addTo(map.current);
          });

    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return(
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map