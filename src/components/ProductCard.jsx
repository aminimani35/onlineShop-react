import { Button, Card, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React from "react";

const ProductCard = ({ product, classes }) => {
  return (
    <>
      <Card className={classes.Card}>
        <figure style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "5rem", height: "5rem" }}
            src={product.image}
            alt=""
          />
        </figure>
        <h3>{product.title.substring(0, 20)}...</h3>
        <div className={classes.PriceWrapper}>
          <Typography align="center" variant="body1">
            {"تومان " + parseInt(product?.price)}
          </Typography>
        </div>
        <Button
          variant="contained"
          className={classes.AddToCardBtn}
          endIcon={<AddShoppingCartIcon style={{ margin: "auto .3rem" }} />}
        >
          افزودن به سبد خرید
        </Button>
      </Card>
    </>
  );
};

export default ProductCard;
