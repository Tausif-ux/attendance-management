import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TodayIcon from '@material-ui/icons/Today';
import AddIcon from '@material-ui/icons/Add';
import Popover from '../../SimplePopover/SimplePopover';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
    position: 'absolute',
    bottom: '55px',
    right: '44px',
  },
  pink: {
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
        <Popover content="You clicked Holiday Calendar" render={props => <TodayIcon {...props} />} />
      </Avatar>
      <Avatar className={classes.pink}>
        <Popover content="You clicked Apply Leave" render={props => <AddIcon {...props} />} />
      </Avatar>
    </div>
  );
}
