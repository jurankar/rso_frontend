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
                microservice_name="posts_containter"
                api_link="http://20.237.81.147:8000/api/test"
            />
            <ApiResponseText
                microservice_name="maps_container"
                api_link="http://20.237.81.147:8000/api/maps"
            />
            <MapContainer location={location} zoomLevel={10} /> {/* include it here */}
        </body>
    </div>
  );
}

export default App;
