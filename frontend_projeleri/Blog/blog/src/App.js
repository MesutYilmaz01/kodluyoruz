import './css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { BlogProvider } from './context/BlogContext';
import Anasayfa from './components/Anasayfa';
import Hakkimda from './components/Hakkimda/Hakkimda';
import Iletisim from './components/Iletisim'
import Bloglar from './components/Blog/Bloglar'
import BlogDetay from './components/Blog/BlogDetay';


function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Anasayfa</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/hakkimda">Hakkımda</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/bloglar">Bloglar</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/iletisim">İletişim</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Anasayfa}/>
            <Route path="/hakkimda" component={Hakkimda}/>
            <Route path="/bloglar" component={Bloglar}/>
            <Route path="/iletisim" component={Iletisim}/>
            <Route path="/blog/:id" component={BlogDetay}/>
          </Switch>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
