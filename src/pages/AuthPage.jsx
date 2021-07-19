import React, { useEffect, useState } from "react";
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
import { fetchToken, fetchUser } from "../Services/http.js";
import { useAuthDispatch } from "../context/AuthContext.jsx";
import { actionTypes } from "../context/reducer.js";

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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const dispatch = useAuthDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchToken.login(userName, password).then((resp) => {
      if (resp?.data) setToken(resp.data.data);
    });
  };

  useEffect(() => {
    if (token) {
      fetchUser(token).then((resp) => {
        if (resp.data.success) {
          localStorage.setItem("token", token);
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
              user: resp.data,
              token: token,
            },
          });
        }
      });
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) setToken(localStorage.getItem("token"));
  }, []);
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
                    {!show ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                ),
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={submitHandler} className={classes.LoginBtn}>
              ورود
            </Button>
            <Divider className={classes.Hr} />
            <Typography className={classes.Hr} variant="body1">
              <Link to="/"> مشکلی در فرایند ورود دارید؟</Link>
            </Typography>
            <h2>{localStorage.getItem("token")}</h2>
          </form>
        </Card>
      </Paper>
    </>
  );
};

export default AuthPage;
