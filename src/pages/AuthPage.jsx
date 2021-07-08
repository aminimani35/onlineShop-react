import { Paper, TextFields } from "@material-ui/core";
import React from "react";

const AuthPage = () => {
  return (
    <>
      <Paper>
        <TextFields
          placeholder="نام کاربری"
          InputProps={{ disableUnderline: true }}
        />
      </Paper>
    </>
  );
};

export default AuthPage;
