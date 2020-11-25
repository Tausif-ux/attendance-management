import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AvatarWithText from '../../Avatar/Avatar';
import ListContent from '../ListContent/ListContent';

const AttendanceItem = (props) => {
    return (
        <ListItem id={props.attendance.id} >
            <ListItemAvatar>
                <AvatarWithText date={props.attendance.date} status={props.attendance.reason} />
            </ListItemAvatar>
            <ListContent
                firstLine={props.attendance.weekDay}
                secondLine={props.attendance.reason}
                thirdLine={props.attendance.type} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <AddCircleIcon color='success' classes={{ root: props.classes.cancelIcon }} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default AttendanceItem;