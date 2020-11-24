import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import TabPanel from '../TabPanel/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(300),
      height: theme.spacing(16),
    },
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
  },
  imageSlider: {
      width: '100%',
      margin: 5,
      marginRight: 10,
  },
  listView: {},
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}variant>
        <Paper elevation={3} classes = { { root: classes.imageSlider } } >
            <ImageCarousel />
        </Paper>
        <Paper elevation={3} variant classes = { { root: classes.imageSlider } }>
            <TabPanel />
        </Paper>
      </Paper>
    </div>
  );
}


