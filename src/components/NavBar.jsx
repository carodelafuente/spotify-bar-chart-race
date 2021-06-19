// Dependecies
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

function NavBar() {
  return(
        <AppBar position='static' color='transparent'>
          <ToolBar>
            <Typography variant='title'>
              Spotify Application
            </Typography>
          </ToolBar>
        </AppBar>
  )
}

export default NavBar;
