import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
const SocialIcons = () => {
  return (
    <>
      <IconButton color="secondary">
        <FacebookIcon />
      </IconButton>
      <IconButton color="secondary">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="secondary">
        <InstagramIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
