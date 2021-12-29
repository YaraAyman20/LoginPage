import { makeStyles } from "@material-ui/core";
import red_bridge from '../Image/red_bridge.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${red_bridge})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    button: {
        width: '100%',
    },
    alert: {
      color: '#dc143c',
    }
  }));

  export default useStyles;