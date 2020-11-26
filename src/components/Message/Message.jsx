import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export default function DirectionSnackbar(props) {
  

  return (
    <div>
      <Snackbar
        open={props.open}
        onClose={ props.onErrorMessageClose }
        TransitionComponent={props.transition}
        message={props.errorMessage}
        key={props.transition ? props.transition.name : ''}
      />
    </div>
  );
}
