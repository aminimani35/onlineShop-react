import { Button, ButtonGroup } from "@material-ui/core";
import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link, useHistory } from "react-router-dom";
// import { useModal } from "../hooks/useModal";

const AuthButton = () => {
  const history = useHistory();
  return (
    <>
      <ButtonGroup
        // variant="text"
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => history.push("/login")}
          startIcon={<PersonIcon />}
        >
          ورود
        </Button>

        <Button startIcon={<PersonAddIcon />}>ثبت نام</Button>
      </ButtonGroup>
    </>
  );
};

export default AuthButton;
