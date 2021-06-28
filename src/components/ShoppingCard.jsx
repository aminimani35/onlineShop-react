import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, IconButton } from "@material-ui/core";
const ShoppingCard = () => {
  return (
    <>
      <IconButton
        style={{
          fontFamily: "shabnamFD",
          width: "1rem",
          margin: "auto 1.5rem",
        }}
        color="primary"
        aria-label="add to shopping cart"
      >
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
};

export default ShoppingCard;
