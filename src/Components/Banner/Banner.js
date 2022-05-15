import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  banner: {
    backgroundImage: "url(./banner2.jpeg)",
  },
  bannerContent: {
    height: "40vh", //400 value here
    display: "flex",
    flexDirection: "column",
    paddingTop: "25",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: "15" }}
          >
            CRYPTOZEN
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: "darkgrey", textTransform: "capitalize" }}
          >
            Get all the info regarding your favourite Crypto Currency
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
