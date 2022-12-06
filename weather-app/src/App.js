import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';

function App() {
  return (
    <div className="App">
      <h1>Project 2</h1>
      <Sidebar />
      {/* <Precipitation /> */}
      <Wind />
      <SunriseSunset />
    </div>
  );
}

export default App;
