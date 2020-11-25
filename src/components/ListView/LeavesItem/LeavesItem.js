import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import AvatarWithText from '../../Avatar/Avatar';
import ListContent from '../ListContent/ListContent';

const LeavesItem = (props) => {
    return ( 
        <ListItem id={props.leave.id} >
            <ListItemAvatar>
                <AvatarWithText date={props.leave.date} status={props.leave.leaveStatus} />
            </ListItemAvatar>
            <ListContent 
                firstLine= {props.leave.leaveType} 
                secondLine = { `${props.leave.startEndDate.startDate.day} ${props.leave.startEndDate.startDate.month} - ${props.leave.startEndDate.endDate.day} ${props.leave.startEndDate.endDate.month }`}
                thirdLine =  { props.leave.leaveStatus } />
            { props.leave.leaveStatus === 'In-Process' ? (
                <ListItemSecondaryAction onClick = { () => props.onLeaveCancel(props.leave.id) } >
                    <IconButton edge="end" aria-label="delete">
                        <CancelIcon color='error' classes={{ root: props.classes.cancelIcon }} />
                    </IconButton>
                </ListItemSecondaryAction>
            ) : null }
        </ListItem>
     );
}
 
export default LeavesItem;