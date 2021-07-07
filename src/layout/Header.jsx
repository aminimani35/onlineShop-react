import { Grid, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { ReactComponent as Logo } from "../assets/svg/slack-new-logo.svg";
import AuthButton from "../components/AuthButton";
import ShoppingCard from "../components/ShoppingCard";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  Header: {
    backgroundColor: "#fff",
    padding: ".6rem 2rem",
    WebkitBoxShadow: "0px 14px 19px -16px rgba(0,0,0,0.2)",
    MozBoxShadow: "0px 14px 19px -16px rgba(0,0,0,0.2)",
    boxShadow: "0px 14px 19px -16px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
  },
  ShoppingCardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Searchbar: {
    backgroundColor: "#E5E5E5",
    borderRadius: ".6rem",
    width: "100%",
    padding: ".25rem",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.Header} container>
      <Grid lg={3}>
        <Logo />
      </Grid>
      <Grid lg={6}>
        <TextField
          placeholder="دنبال چی میگردی ؟"
          className={classes.Searchbar}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid className={classes.ShoppingCardWrapper} align="left" lg={3}>
        <AuthButton />
        <ShoppingCard />
      </Grid>
    </Grid>
  );
};

export default Header;
