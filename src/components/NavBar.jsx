// Dependecies
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
  return(
        <AppBar position='static' style={{background: 'rgba(0,0,0,.7)', color: 'white', padding: '5px'}}>
          <ToolBar>
              <SocialIcon url='https://www.spotify.com/us/' />
            <Typography >
            </Typography>
          </ToolBar>
        </AppBar>
  )
}

export default NavBar;
