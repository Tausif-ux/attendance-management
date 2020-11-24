import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const ShareIconBtn = props => {
    return (
        <>
            <IconButton aria-label="show 4 new mails" color="inherit" {...props.bindTrigger(props.popupState)} >
                <ShareIcon />
            </IconButton>
        </>
    );
}

export default ShareIconBtn;