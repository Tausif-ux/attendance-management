import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchIconBtn = props => {
    return (
        <>
            <IconButton aria-label="show 4 new mails" color="inherit" {...props.bindTrigger(props.popupState)} >
                <SearchIcon />
            </IconButton>
        </>
    );
}

export default SearchIconBtn;

