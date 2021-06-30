import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import CopyRight from "../components/CopyRight";
import SocialIcons from "../components/SocialIcons";
import { ReactComponent as FooterWave } from "../assets/svg/footer.svg";
import Map from "../components/Map";
import About from "../components/About";
import QuickAccessNav from "../components/QuickAccessNav";

const useStyles = makeStyles({
  FooterWrapper: {
    backgroundImage: `url(${FooterWave})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#495057",
    color: "#fff",
    width: "100vw",
    height: "25%",
    padding: ".6rem 2rem",
  },
  SocialIconsWrapper: {
    display: "flex",
    // flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },
  FooterWave: {
    zIndex: "-1",
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.FooterWrapper}>
      <Grid container>
        <Grid item lg={3} className={classes.MapContainer}>
          <About />
        </Grid>
        <Grid item lg={3} className={classes.MapContainer}>
          <QuickAccessNav />
        </Grid>

        <Grid item lg={3} className={classes.MapContainer}>
          <Map />
        </Grid>
      </Grid>

      <Grid className={classes.SocialIconsWrapper} container>
        <Grid
          item
          lg={10}
          style={{ dispaly: "flex", justifyContent: "flex-end" }}
        >
          <CopyRight />
        </Grid>
        <Divider light={true} />
        <Grid
          style={{ dispaly: "flex", justifyContent: "flex-start" }}
          item
          lg={2}
        >
          <SocialIcons />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
