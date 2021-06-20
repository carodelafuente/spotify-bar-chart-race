// Dependencies
import { useState, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';



function Main(props) {

  return(
      <Container>
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
      </ Container>
  )
}


export default Main;
