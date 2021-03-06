import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

const NotificationsIconBtn = props => {
    return ( 
        <>
            <IconButton aria-label="show 17 new notifications" color="inherit" {...props.bindTrigger(props.popupState)} >
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </>
     );
}
export default NotificationsIconBtn;