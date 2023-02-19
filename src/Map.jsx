import React, { useState, useEffect } from 'react';
import {renderToString} from 'react-dom/server'
import mapboxgl from 'mapbox-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQuery } from "../convex/_generated/react";
// import populateDocs from './AddDocument';
// import query from './MyQueryFunction';
// import makeForm  from './AddDocument';
// import { useMutation } from 'convex/react';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const StanfordMap = () => {
    const [map, setMap] = useState(null);
    // let addDocs = true;
    // if (addDocs) {
    //     console.log('HIII')
    //     populateDocs()
    //     addDocs = false;
    // }

    const listings = useQuery("getListings") || [];
    console.log(listings);

    useEffect(() => {
        const initializeMap = () => {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-122.1708, 37.4241],
                zoom: 13
            });

            // function doCheckbook() {
            //     const doc = 
            //     console.log()
            // }

            function makeListing(business) {
                console.log(business)
                return (
                  <div>
                    <h3>{business.name}</h3>
                    {/* <img src={business.image} alt={business.product} style={{ width: '100%', maxWidth: '300px', border: 'none' }} /> */}
                    <p>
                      <strong>Price:</strong> {business.price}
                    </p>
                    <p>
                        <strong>Contact:</strong>
                        <a href={`mailto:${business.email}`}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </p>
                    <br></br>
                    <button>Buy now</button>
                    {/* <button onclick="doCheckbook()">Buy now</button> */}
                  </div>
                );
              }
              
              console.log("In initilize:", listings);

            listings.forEach((business) => {
                const popupHtml = makeListing(business)

                new mapboxgl.Marker()
                    .setLngLat(business.location)
                    .setPopup(new mapboxgl.Popup().setHTML(renderToString(popupHtml)))
                    .addTo(map);
            });
            // console.log(thing)
            // new mapboxgl.Marker()
            //     .setLngLat([-122.1679, 37.4276])
            //     .setPopup(new mapboxgl.Popup().setHTML(renderToString(thing)))
            //     .addTo(map);

            setMap(map);
        };

        if (!map && listings.length > 0) {
            initializeMap();
        }
    }, [map, listings]);

    return <div id="map" style={{ height: '500px' }} />;
};

export default StanfordMap;
