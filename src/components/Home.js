import './Home.css';
import Header from "./Header";
import ApiResponseText from "./ApiResponseText";
import MapContainer from "./Map"
import MapsForm from "./MapsForm";

function App() {

  return (
    <div className="App">
        <Header/>
        <body>
            <ApiResponseText
                text="Glede na vreme vam za dostavljanje pošiljk priporočamo "
                api_link="http://104.45.183.75/api/weather/weather"
            />
            {/*
            <ApiResponseText
                text="API response for microservice maps_containter is:"
                api_link="http://104.45.183.75/api/maps/test"
            />
            */}
            <ApiResponseText
                text="Trenutne cene bencina so:"
                api_link="http://104.45.183.75/api/gas/gas"
            />
            <MapsForm/>
        </body>
    </div>
  );
}

export default App;
