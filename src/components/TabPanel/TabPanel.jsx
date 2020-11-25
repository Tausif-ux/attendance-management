import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListView from '../ListView/ListView';
import ActionsIcons from '../IconButtons/HolidayCalender/HolidayCalender';

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
        id: 4, date: { day: 25, month: 'JUN' }, leaveType: 'Paid Leave',
        startEndDate: { startDate: { day: 25, month: 'JUN' }, endDate: { day: 25, month: 'JUN' } },
        leaveStatus: 'Approved'
    },
    {
        id: 5, date: { day: 23, month: 'MAY' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: 23, month: 'MAY' }, endDate: { day: 27, month: 'MAY' } },
        leaveStatus: 'Rejected'
    },
    {
        id: 6, date: { day: 21, month: 'APR' }, leaveType: 'Leave Without Pay',
        startEndDate: { startDate: { day: 21, month: 'APR' }, endDate: { day: 23, month: 'APR' } },
        leaveStatus: 'Approved'
    },
];

const attendance = [
    {
        id: 1, date: { day: 25, month: 'AUG' }, weekDay: 'FRIDAY',
        reason: 'Late Muster',
        type: 'GO'
    },
    {
        id: 2, date: { day: 12, month: 'JUL' }, weekDay: 'FRIDAY',
        reason: 'Late Muster',
        type: 'GO'
    },
    {
        id: 3, date: { day: '03', month: 'MAY' }, weekDay: 'FRIDAY',
        reason: 'Late Muster',
        type: 'GO'
    },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [ leavesList, setLeavesList ] = useState(leaves);
    const [ attendanceList, setAttendance ] = useState(attendance);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleLeaveCancel = (itemId) => {
        const updatedList = leavesList.filter( leave => leave.id !== Number(itemId) );
        setLeavesList( updatedList );
        console.log(updatedList);
        console.log(itemId);
    };
    console.log(leavesList);
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="LEAVES" {...a11yProps(0)} />
                    <Tab label="ATTENDANCE" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            { value == 0 ? <ListView list = { leavesList } tab = { value } onLeaveCancel = { handleLeaveCancel } /> 
                : <ListView list = { attendanceList } tab = { value } /> 
            }
            <ActionsIcons />
        </div>
    );
}