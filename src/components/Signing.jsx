import { Paper } from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import React from "react";

const Signing = () => {
  return (
    <Paper>
      <TextFields
        placeholder="نام کاربری"
        InputProps={{ disableUnderline: true }}
      />
    </Paper>
  );
};

export default Signing;
