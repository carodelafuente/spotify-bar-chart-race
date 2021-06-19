// Dependencies
import { useState } from 'react';
import Login from './Login.jsx';
import Playlist from './Playlist.jsx';

import Grid from '@material-ui/core/Grid';


function Main() {

  return(
      <div className='main-contain'>
        <Login />
        <Playlist style={{border: '1px solid black'}}/>
      </div>
  )
}


export default Main;
