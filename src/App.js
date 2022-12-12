import './App.css';
import Header from "./components/Header";
import ApiResponseText from "./components/ApiResponseText";

function App() {
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
        </body>
    </div>
  );
}

export default App;
