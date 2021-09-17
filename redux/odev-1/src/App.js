import './App.css';
import './css/bootstrap-5.0.2-dist/css/bootstrap.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/List'

function App() {
  return (
    <div className="App container">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
