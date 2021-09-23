import './App.css';
import Body from './components/Body';
import { NotesProvider } from './context/NotesContext';


function App() {
  return (
    <div>
          <NotesProvider>
            <Body/>
          </NotesProvider>
   </div>
  );
}

export default App;
