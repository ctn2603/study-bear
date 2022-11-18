import './App.css';
import Navbar from "./Components/Navbar";
import Map from "./Components/Map";

function App() {
 
    return (
      <div className="App">
        <Navbar/>
          <div id = "headerDiv"> 
            <h1 id="mainHeader">welcome to <i>appnamehere</i>.</h1>
            <p> a website designed to help Berkeley students to find study groups across campus.</p>
            <div id = "horizantalDiv">
              <MapContainer height = "300px" width = "300px"/>
            </div>
            <button id = "plusButton"> + </button>
          </div>  
      </div>
    );
}

export default App;