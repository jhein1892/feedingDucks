import logo from './logo.svg';
import './App.css';
import Top from './components/Top'
import Bottom from './components/Bottom'
import { makeStyles } from '@material-ui/core'
import { useApplicationData } from './hooks/useApplicationData';

const useStyles = makeStyles(() => ({
  root:{
    textAlign: 'center',
    paddingTop:'5%'
  }
}))

function App() {
  const classes = useStyles('');
  const {
    state,
    logFeeding
  } = useApplicationData(); 

  return (
    <div className={classes.root}>
      <h1>Who the Duck has been feeding my Birds?</h1>
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
