import logo from './logo.svg';
import './css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bmi from './components/Bmi';
import BmiNedir from './components/BmiNedir';
import OncekiSonuclar from './components/OncekiSonuclar';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">BMI Hesapla</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bminedir">BMI Nedir?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/oncekisonuclar">Önceki Sonuçlar</Link>
            </li>
          </ul>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Bmi}/>
          <Route exact path="/bminedir" component={BmiNedir}/>
          <Route exact path="/oncekisonuclar" component={OncekiSonuclar}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
