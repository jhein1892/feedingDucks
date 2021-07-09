import logo from './logo.svg';
import './App.css';
import Top from './components/Top'
import { useApplicationData } from './hooks/useApplicationData';



function App() {

  const {
    logFeeding
  } = useApplicationData(); 

  return (
    <div className="App">
      <h1>Feeding the Ducks</h1>
      <Top
      logFeeding={logFeeding}
      />
    </div>
  );
}

export default App;
