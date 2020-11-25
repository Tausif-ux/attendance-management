import React from 'react';
import classes from './ListContent.module.css';

const ListContent = (props) => {
    return ( 
        <div className = { classes.ListContent } >
            <span className = { classes.FirstLine } >{props.firstLine}</span>
            <span className = { classes.SecondLine } >{props.secondLine}</span>
            <span className = { classes.ThirdLine } >{ props.thirdLine }</span>
        </div>
     );
}
 
export default ListContent;