// Dependencies
import { useState, useCallback } from 'react';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';
import Grid from '@material-ui/core/Grid';


function Main(props) {

  return(
      <Grid container justify='center' alignItems="center">
      {props.loggedIn &&
        <Grid item xs={11} sm={6} md={5} lg={4} xl={1}>
          <Playlist />
        </ Grid>
      }
      {!props.loggedIn &&
        <Grid item xs={11} sm={6} md={5} lg={4} xl={1}>
          <Login
            loggedIn={props.loggedIn}
            setLoggedIn={props.setLoggedIn}
          />
        </ Grid>
      }
      </ Grid>
  )
}


export default Main;
