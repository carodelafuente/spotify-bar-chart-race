import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Textfield from '@material-ui/core/Textfield';
import Typography from '@material-ui/core/Typography';

import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  login:  {
    padding: '20px',
    marginTop: '10%',
  },
  text:  {
    margin: '10px',
    minWidth: '80%'
  },
  button: {
    marginLeft: '10px'
  }
}));



function Login()  {
  const classes = useStyles();

  return(
      <Card className={classes.login}>
        <Typography variant='h6' style={{marginLeft: '20px'}}>
          Sign in.
        </Typography>
        <Grid container spacing={3} justify='flex-start'>
          <Grid item>
            <Textfield variant='filled' id='username' label='Username' className={classes.text}/>
            <Textfield variant='filled' id='password' label='Password' className={classes.text}/>
          </ Grid>
          <Grid item>
            <Button size='large' variant='contained' color='primary' className={classes.button} style={{ color: 'white'}}>
              Log In
            </Button>
          < /Grid>
        </ Grid>
      </ Card>
  )
}

export default Login;
