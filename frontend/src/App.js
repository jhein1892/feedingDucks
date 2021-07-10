import logo from './logo.svg';
import './App.css';
import Top from './components/Top'
import Bottom from './components/Bottom'
import { useApplicationData } from './hooks/useApplicationData';



function App() {

  const {
    state,
    logFeeding
  } = useApplicationData(); 

  return (
    <div className="App">
      <h1>Feeding the Ducks</h1>
      <Top
        logFeeding={logFeeding}
      />
      <Bottom
        state={state}
      />
    </div>
  );
}

export default App;
