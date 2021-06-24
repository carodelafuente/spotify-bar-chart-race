// Dependencies
import React from 'react';

// Style components
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

const useStyle = makeStyles(() => ({
  appBar: {
    background: 'rgba(0,0,0,.7)',
    color: 'white',
    padding: '5px'
  },
  userOptionsAll: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 10,
    position: 'absolute',
    width: '20em',
    right: '2px'
  },
  userInfo: {
    borderRight: '1px solid white',
    display: 'flex',
    justifyContent: 'space-evenly',
    minWidth: '50%',
  },
  logOutButton: {
    borderLeft: '1px solid white',
    minWidth: '50%',
    display: 'flex',
    justifyContent: 'center',
  }
}));

function NavBar({loggedIn, setLoggedIn}) {

  const classes = useStyle();

  return(
        <AppBar position='static' className={classes.appBar}>
          <ToolBar>
              <SocialIcon url='https://www.spotify.com/us/' />
              {
                loggedIn &&
                <div className={classes.userOptionsAll}>
                  <div className={classes.userInfo}>
                    <Typography variant='title' style={{marginTop: '.5em'}}>
                      Clayton O.
                    </Typography>
                    <AccountCircle fontSize='large' />
                    </div>
                    <div className={classes.logOutButton}>
                      <Button
                        onClick={()=> setLoggedIn(!loggedIn)}
                        color='secondary'
                        size='small'>
                        log out
                      </Button>
                    </div>
                  </div>
              }
          </ToolBar>
        </AppBar>
  )
}

export default NavBar;
