import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import FooterWave from "../assets/svg/footer.svg";
const useStyles = makeStyles({
  FooterWrapper: {
    backgroundImage: `url${FooterWave}`,
    backgroundColor: "#495057",
    color: "#fff",
    width: "100vw",
    height: "25%",
    padding: ".6rem 2rem",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.FooterWrapper}>
      <h2>footer</h2>
      <Grid container>
        <Grid item></Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
