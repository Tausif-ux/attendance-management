import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import LeavesItem from './LeavesItem/LeavesItem';
import AttendanceItem from './AttendanceItem/AttendanceItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
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
        sizes: '2rem',
    }
}));


export default function InteractiveList(props) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

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
                                    classes = {classes} />
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}