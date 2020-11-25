

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

import { useState } from 'react';


const leaves = [
    {
        id: 1, date: { day: 25, month: 'AUG' }, leaveType: 'Could not Sign In',
        startEndDate: { startDate: { day: 25, month: 'AUG' }, endDate: { day: 25, month: 'AUG' } },
        leaveStatus: 'In-Process'
    },
    {
        id: 2, date: { day: '03', month: 'SEP' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: '03', month: 'SEP' }, endDate: { day: '07', month: 'SEP' } },
        leaveStatus: 'In-Process'
    }, {
        id: 3, date: { day: '01', month: 'JUL' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: '03', month: 'JUL' }, endDate: { day: '07', month: 'JUL' } },
        leaveStatus: 'Rejected'
    },
    {
        id: 3, date: { day: 25, month: 'JUN' }, leaveType: 'Paid Leave',
        startEndDate: { startDate: { day: 25, month: 'JUN' }, endDate: { day: 25, month: 'JUN' } },
        leaveStatus: 'Approved'
    },
    {
        id: 4, date: { day: 23, month: 'MAY' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: 23, month: 'MAY' }, endDate: { day: 27, month: 'MAY' } },
        leaveStatus: 'Rejected'
    },
    {
        id: 5, date: { day: 21, month: 'APR' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: 21, month: 'APR' }, endDate: { day: 23, month: 'APR' } },
        leaveStatus: 'Approved'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '50%',
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

export default function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [leavesList, useLeavesList] = useState(leaves);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} classes={{ root: classes.tabView }} >
                    <div className={classes.demo}>
                        <List dense={dense} >
                            {leavesList.map(leave => (
                                <ListItem id={leave.id} >
                                    <ListItemAvatar>
                                        <AvatarWithText date={leave.date} status={leave.leaveStatus} />
                                        {/* <Avatar>
                                            <FolderIcon />
                                        </Avatar> */}
                                    </ListItemAvatar>
                                    <ListContent leave={leave} />
                                    {/* <ListItemText
                                        primary={leave.leaveType}
                                        secondary={`${leave.startEndDate.startDate.day} ${leave.startEndDate.startDate.month} - ${leave.startEndDate.endDate.day} ${leave.startEndDate.endDate.month}`}
                                    /> */}
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <CancelIcon color='error' classes={{ root: classes.cancelIcon }} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}