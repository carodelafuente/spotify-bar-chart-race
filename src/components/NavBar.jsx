// Dependecies
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

const useStyle = makeStyles((theme) => ({
  appBar: {
    background: 'rgba(0,0,0,.7)',
    color: 'white',
    padding: '5px'
  },
  userOptions: {
    color: 'white',
    flexGrow: 1,
  },
}));

function NavBar(props) {

  const classes = useStyle();

  return(
        <AppBar position='static' className={classes.appBar}>
          <ToolBar>
              <SocialIcon url='https://www.spotify.com/us/' />
              {
                props.loggedIn &&
                <div className={classes.userOptions}>
                  <AccountCircle />
                  <Typography variant='title'>
                    Username
                  </Typography>
                  <Button
                    onClick={()=> props.setLoggedIn(!props.loggedIn)}
                    size='small'>
                    Log Out
                  </Button>
                </div>
              }
          </ToolBar>
        </AppBar>
  )
}

export default NavBar;
