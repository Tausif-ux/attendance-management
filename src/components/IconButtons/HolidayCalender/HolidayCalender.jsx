import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import TodayIcon from '@material-ui/icons/Today';
import AddIcon from '@material-ui/icons/Add';
import PopoverPopupState from '../../Popover/Popover';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
    position: 'absolute',
    bottom: '55px',
    right: '15px',
  },
  pink: {
    // color: theme.palette.getContrastText(pink[500]),
    // backgroundColor: pink[500],
    color: '#fff',
    backgroundColor: '#4842f5',
  },
  green: {
    color: '#fff',
    backgroundColor: '#42a4f5',
  },
}));

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.green}>
        <PopoverPopupState popoverContent="You clicked search" render={props => <TodayIcon {...props} />} />
      </Avatar>
      <Avatar className={classes.pink}>
        <PopoverPopupState popoverContent="You clicked search" render={props => <AddIcon {...props} />} />
      </Avatar>
    </div>
  );
}
