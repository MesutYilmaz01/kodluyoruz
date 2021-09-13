import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header'
import List from './components/Weather/List';
import "./css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
    <WeatherProvider>
      <Header/>
      <List/>
    </WeatherProvider>
    </div>
  );
}

export default App;
