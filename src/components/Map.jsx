import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import {Polyline} from "google-maps-react";
import {Marker} from "google-maps-react";


const someCoords= [
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
];

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBhDyguP-Dme8qNjA_RM5CtGO8QwJyNQmc"
                }}
                center={{
                    lat: someCoords[0].lat,
                    lng: someCoords[0].lng,
                }}
                defaultZoom={15}>
                <Polyline
                    path={someCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
                <Marker lat={someCoords[0].lat} lng={someCoords[0].lng} text='My Marker' />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map