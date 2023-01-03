import {useEffect, useState} from "react";
import MapContainer from "./Map";
import {GoogleMap, LoadScript, Polyline} from "@react-google-maps/api";

const MapsForm = () => {

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, Yo Mama House.',
    lat: 36.05298765935,
    lng: -112.083756616339,
  }


  const [path, setPath] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    let body = JSON.stringify({
      path: path,
    });
    try {
      let res = await fetch("http://104.45.183.75/api/maps/test", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json'
        },
        body: body,
      });
      let resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        setPath(resJson.Koordinate)
        setMessage("Path set sucesfully");
        setShowMap(true);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };




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

  var center = {lat: 46.0569474, lng: 14.5057471};

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


  return (
      <div className="setPath">
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={path}
              placeholder="Path"
              onChange={(e) => setPath(e.target.value)}
          />
          <button type="submit">Set path</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
        {showMap &&
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
        }
      </div>
  );
}


export default MapsForm
