import React from 'react'
import { GoogleMap, LoadScript, Polyline  } from '@react-google-maps/api';

const containerStyle = {
    marginLeft: '15%',
    width: '70%',
    height: '600px'

};

const center = {
    lat: 0,
    lng: -180
};

const onLoad = polyline => {
    console.log('polyline: ', polyline)
};

const path = [
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
];

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
    ],
    zIndex: 1
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBhDyguP-Dme8qNjA_RM5CtGO8QwJyNQmc"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {
                    <Polyline
                        onLoad={onLoad}
                        path={path}
                        options={options}
                    />
                }
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)