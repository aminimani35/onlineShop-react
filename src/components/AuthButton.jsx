import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useModal } from "../hooks/useModal";

const AuthButton = () => {
  useModal(<Button>Salam</Button>);
  return (
    <>
      <ButtonGroup
        // variant="text"
        color="primary"
        aria-label="outlined primary button group"
      >
        <Button startIcon={<PersonIcon />}>ورود</Button>
        <Button startIcon={<PersonAddIcon />}>ثبت نام</Button>
      </ButtonGroup>
    </>
  );
};

export default AuthButton;
