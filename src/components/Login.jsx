import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Textfield from '@material-ui/core/Textfield';
import Typography from '@material-ui/core/Typography';

import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  box:  {
    padding: '20px',
    marginTop: '10%'
  }
}));



function Login()  {
  const classes = useStyles();

  return(
    <Card className={classes.box}>
      <Typography variant='p'>
        Sign in to your acccount.
      </Typography>
      <form>
        <Grid item>
          <Textfield id='username' label='Username' style={{ margin: 10 }} />
          <Textfield id='password' label='Password' style={{ margin: 10 }} />
        </ Grid>
        <Grid item>
          <Button size='large' variant='contained' color='primary' style={{ color: 'white', margin: 10 }}>
            Log In
          </Button>
        </ Grid>
      </form>
    </ Card>
  )
}

export default Login;
