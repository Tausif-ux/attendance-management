import React from 'react';
import classes from './ListContent.module.css';

const ListContent = (props) => {
    return ( 
        <div className = { classes.ListContent } >
            <span className = { classes.LeaveType } >{props.leave.leaveType}</span>
            <span className = { classes.StEndDate } >{ `${props.leave.startEndDate.startDate.day} ${props.leave.startEndDate.startDate.month} - ${props.leave.startEndDate.endDate.day} ${props.leave.startEndDate.endDate.month }`}</span>
            <span className = { classes.LiveStatus } >{ props.leave.leaveStatus }</span>
        </div>
     );
}
 
export default ListContent;