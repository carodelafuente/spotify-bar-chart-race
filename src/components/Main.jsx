// Dependencies
import { useState } from 'react';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';

import Grid from '@material-ui/core/Grid';


function Main() {

  return(
      <Grid container justify='center' alignItems="center">
        <Grid item xs={11} sm={4}>
          <Login />
        </ Grid>
      </ Grid>
  )
}


export default Main;
