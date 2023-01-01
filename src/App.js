import './App.css';
import Header from "./components/Header";
import ApiResponseText from "./components/ApiResponseText";
import MapContainer from "./components/Map"

function App() {

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, Yo Mama House.',
        lat: 36.05298765935,
        lng: -112.083756616339,
    }

  return (
    <div className="App">
        <Header/>
        <body>
            <ApiResponseText
                text="Glede na vreme vam za dostavljanje pošiljk priporočamo "
                api_link="http://104.45.183.75/api/weather/weather"
            />
            <ApiResponseText
                text="API response for microservice maps_containter is:"
                api_link="http://104.45.183.75/api/maps/test"
            />
            <ApiResponseText
                text="Trenutne cene bencina so:"
                api_link="http://104.45.183.75/api/gas/gas"
            />
            <MapContainer location={location} zoomLevel={10} /> {/* include it here */}
        </body>
    </div>
  );
}

export default App;
