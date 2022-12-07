import './App.css';
// import Precipitation from './Components/Precipitation';
import Sidebar from './Components/Sidebar';
import SunriseSunset from './Components/SunriseSunset';
import Wind from './Components/Wind';
import WeeklyForecast from './Components/WeeklyForecast';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <h1>Project 2</h1>
      <Input />
      <Sidebar />
      {/* <Precipitation /> */}
      <Wind />
      <SunriseSunset />
      <WeeklyForecast />

    </div>
  );
}

export default App;
