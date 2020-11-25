import React from 'react';
import classes from './Avatar.module.css';

const AvatarWithText = props => {
    let dynamicBorder = '';
    switch (props.status) {
        case 'In-Process':
            dynamicBorder = '8px solid orange';
            break;
        case 'Rejected':
            dynamicBorder = '8px solid red';
            break;
        case 'Late Muster':
            dynamicBorder = '8px solid red';
            break;
        default:
            dynamicBorder = '8px solid green'; 
            break;
    }
    return (
        <div className={classes.AvatarWithText} style = { { borderLeft: dynamicBorder } } >
            <span className={classes.DateDay} >{props.date.day}</span>
            <span className={classes.DateMonth} >{props.date.month}</span>
        </div>
    );
}

export default AvatarWithText;

