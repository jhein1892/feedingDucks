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
    logFeeding,
    deleteRow
  } = useApplicationData(); 

  return (
    <div className={classes.root}>
      <h1>Who The Duck Has Been Feeding My Birds?</h1>
      <Top
        logFeeding={logFeeding}
      />
      <Bottom
        state={state}
        deleteRow={deleteRow}
      />
    </div>
  );
}

export default App;
