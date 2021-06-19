import { useState } from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box:  {
    padding: '20px',
    marginTop: '10%',
  }
}));


function Playlist() {

  const classes = useStyles();

  return(
    <Card className={classes.box}>
      <Grid item>
        <Paper/>
      </ Grid>
    </Card>
  )
}


export default Playlist;
