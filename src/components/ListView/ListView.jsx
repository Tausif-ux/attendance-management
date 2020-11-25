

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import AvatarWithText from '../Avatar/Avatar';
import ListContent from './ListContent/ListContent';
import LeavesItem from './LeavesItem/LeavesItem';
import AttendanceItem from './AttendanceItem/AttendanceItem';

import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        // display: 'block',
        // overflow: 'scroll',
        // height: '62%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    tabView: {
        minWidth: '100%',
    },
    cancelIcon: {
        size: '1.25rem',
    }
}));

// function generate(element) {
//     return leavesList.map((value) =>
//         React.cloneElement(element, {
//             key: value,
//         }),
//     );
// }

export default function InteractiveList(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} classes={{ root: classes.tabView }} >
                    <div className={classes.demo}>
                        <List dense={dense} >
                            {
                                props.list.map(item => (
                                props.tab == 0 ? <LeavesItem 
                                    key = { item.id } 
                                    leave = { item } classes = {classes}
                                    onLeaveCancel = { props.onLeaveCancel } /> 
                                : <AttendanceItem 
                                    key = { item.id } 
                                    attendance = { item } 
                                    classes = {classes}/>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}