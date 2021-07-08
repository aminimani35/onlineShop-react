import { Paper, TextField } from "@material-ui/core";
import React from "react";

const AuthPage = () => {
  return (
    <>
      <Paper>
        <TextField
          placeholder="نام کاربری"
          InputProps={{ disableUnderline: true }}
        />
      </Paper>
    </>
  );
};

export default AuthPage;
