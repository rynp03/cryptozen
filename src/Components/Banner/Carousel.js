import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    carousel :{
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
});

const Carousel = () => {
  const classes = useStyles();

    return (
    <div className={classes.carousel}></div>
  )
}

export default Carousel;