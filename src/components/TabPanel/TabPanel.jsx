import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ListView from '../ListView/ListView';
import ActionsIcons from '../IconButtons/HolidayCalender/HolidayCalender';
import axios from 'axios';
import ErrorMessage from '../Message/Message';
import Slide from '@material-ui/core/Slide';



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

//Popup Message Transition
function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}


export default function FullWidthTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [ leavesList, setLeavesList ] = useState([]);
    const [ attendanceList, setAttendanceList ] = useState([]);
    const [ error, setError ] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);


    // Load leaves and attendance at initial load of page
    useEffect(() => {
        axios.get( 'https://attendance-management-ap-67217.firebaseio.com/jsonData.json' )
            .then( response => {
                setAttendanceList( response.data.attendance );
                setLeavesList( response.data.leaves );
                handleCloseErrorMessage();
                // console.log(response.data);
            } )
            .catch( error => {
                setError(error.message);
                setTransition(() => TransitionUp);
                setOpen(true);
                // console.log(error.message);
            } );
    }, []);
    

    const handleCloseErrorMessage = () => {
        setOpen(false);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLeaveCancel = (itemId) => {
        const updatedList = leavesList.filter( leave => leave.id !== Number(itemId) );
        setLeavesList( updatedList );
    };


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
            { 
                value == 0 ? <ListView 
                    list = { leavesList } tab = { value } onLeaveCancel = { handleLeaveCancel } /> 
                : <ListView 
                    list = { attendanceList } tab = { value } /> 
            }
            <ActionsIcons />
            <ErrorMessage 
                onErrorMessageClose = { handleCloseErrorMessage } 
                open = { open } 
                transition = { transition }
                errorMessage = { error }/>
        </div>
    );
}