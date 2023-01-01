import React, {useEffect, useState} from 'react'
import { GoogleMap, LoadScript, Polyline  } from '@react-google-maps/api';

const Map = () => {
    const [path, setPath] = useState('no_data')

    // API CALL
    const fetchApiData = async () => {
        const res = await fetch("http://104.45.183.75/api/maps/test")
        const data = await res.json()

        return data
    }

    useEffect(() => {
        const getResponse = async () => {
            const responseFromServer = await fetchApiData()
            setPath(responseFromServer.Koordinate)
            console.log(path)
        }

        getResponse()
    }, [])


    // PATH
    const onLoad = polyline => {
        console.log('polyline: ', polyline)
    };


    // STYLE
    const containerStyle = {
        marginLeft: '15%',
        width: '70%',
        height: '600px'
    };

    const center = {
        lat: path[0].lat,
        lng: path[0].lng
    };

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
        paths: path,
        zIndex: 1
    };


    // RETURN
    return (
        <LoadScript
            googleMapsApiKey=""
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