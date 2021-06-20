// Dependencies
import { React, useState } from 'react';

// Components
import NavBar from './components/NavBar.jsx';
import Main from './components/Main.jsx';

// Style
import './App.css';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:  {
    primary:  {
      main: '#1db954'
    },
  }
});


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <ThemeProvider theme={theme}>
        <NavBar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Main
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </ ThemeProvider>
  );
}

export default App;
