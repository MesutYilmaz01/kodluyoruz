import { useSelector } from 'react-redux';
import './App.css';
import Balance from './components/Balance';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  //const data = useSelector(state => state.items.items)
  return (
    <div className="container">
      <Header />
      <Balance />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
