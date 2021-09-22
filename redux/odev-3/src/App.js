import { useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';
import { allRandomCards, skor } from './redux/cardsSlice';




function App() {
  const allRandom = useSelector(allRandomCards)
  const score = useSelector(skor)
  return (
    <div id="app">
      <div className="playground">
        {
          allRandom.map((card,i) => (
            <Card key={i} card={card}/>
          ))
        }
      </div>
      <div style={{padding:'40px', marginLeft:'100px'}}>
        {`Score : ${score}`}
      </div>
    </div>
  );
}

export default App;
