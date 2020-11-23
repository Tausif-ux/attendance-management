import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

export default function SwipeableTemporaryDrawer(props) {
    const classes = useStyles();


    const list = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={props.toggleDrawer(false)}
            onKeyDown={props.toggleDrawer(false)}
        >
            <List>
                {['Home', 'Settings', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor='left'
                open={props.state}
                onClose={props.toggleDrawer(false)}
                onOpen={props.toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}
