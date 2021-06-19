// Dependencies
import React from 'react';

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

  return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <Main />
      </ ThemeProvider>
  );
}

export default App;
