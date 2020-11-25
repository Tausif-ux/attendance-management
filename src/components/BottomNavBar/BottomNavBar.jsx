import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GroupIcon from '@material-ui/icons/Group';
import ErrorIcon from '@material-ui/icons/Error';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: '#283593',
    color: 'white',
  },
  colorAction: {
    // backgroundColor: 'yellow',
    color: 'yellow',
  },
  label: {
    color: 'white',
  },
  'MuiBottomNavigation-root':{
    justifyContent: 'space-between',
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      }}
      showLabels
      className={classes.root}
      classes = { {'MuiBottomNavigation-root': classes['MuiBottomNavigation-root']} }
    > 
      <BottomNavigationAction classes = { classes } label="Favorites" icon={<FavoriteIcon color={value === 0 ? 'action' : ''} classes={classes} />} />
      <BottomNavigationAction classes = { classes } label="Team" icon={<GroupIcon color={value === 1 ? 'action' : ''} classes={classes} />} />
      <BottomNavigationAction classes = { classes } label="Approvals" icon={<ErrorIcon color={value === 2 ? 'action' : ''} classes={classes} />} />
      <BottomNavigationAction classes = { classes } label="Approvals" icon={<NotificationsIcon color={value === 3 ? 'action' : ''} classes={classes} />} />
    </BottomNavigation>
  );
}
