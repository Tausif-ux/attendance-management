import React from 'react';
import classes from './Avatar.module.css';

const AvatarWithText = props => {
    return ( 
        <div className = { classes.AvatarWithText } >
            <span className = { classes.DateDay } >{props.date.day}</span>
            <span className = { classes.DateMonth } >{props.date.month}</span>
        </div>
     );
}
 
export default AvatarWithText;

