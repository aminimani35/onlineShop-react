import React, { useState } from "react";
import {
  Paper,
  TextField,
  makeStyles,
  Card,
  Button,
  InputAdornment,
  Divider,
  Typography,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  Paper: {
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "Transparent",
    boxShadow: "none",
  },
  Textfield: {
    backgroundColor: "#e5e5e5",
    borderRadius: "0.6rem",
    padding: "0.4rem",
    width: "100%",
    margin: "1rem",
    textAlign: "left",
  },
  Card: {
    maxWidth: "60vw",
    padding: "5rem",
  },
  LoginBtn: {
    width: "100%",
    backgroundColor: "#EF233C",
    border: "1px solid #EF233C",
    color: "#fff",
    borderRadius: "0.6rem",
    padding: "0.4rem",
    margin: "1rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#EF233C",
      border: "1px solid #EF233C",
    },
  },
  Hr: {
    margin: "0 1rem 1rem 1rem",
    width: "100%",
  },
  ForgotLink: {
    "&:link": {},
  },
});
const AuthPage = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Paper className={classes.Paper}>
        <Card className={classes.Card}>
          <form onSubmit={submitHandler}>
            <TextField
              className={classes.Textfield}
              placeholder="نام کاربری"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.Textfield}
              placeholder="گذرواژه"
              type={show ? "password" : "text"}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
            />
            <Button className={classes.LoginBtn}>ورود</Button>
            <Divider className={classes.Hr} />
            <Typography className={classes.Hr} variant="body1">
              <Link to="/"> مشکلی در فرایند ورود دارید؟</Link>
            </Typography>
          </form>
        </Card>
      </Paper>
    </>
  );
};

export default AuthPage;
