// Dependencies
import React, { useState, useCallback } from 'react';

// Style components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';



function Main({loggedIn, setLoggedIn}) {

  return(
      <Container>
        <Grid container justify='center' alignItems="center">
          {loggedIn
            ?
            <Grid item xs={11} sm={6} md={5} lg={4} xl={4}>
              <Playlist />
            </ Grid>
          :
            <Grid item xs={11} sm={6} md={5} lg={4} xl={4}>
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            </ Grid>
          }
        </ Grid>
      </ Container>
  )
}


export default Main;
