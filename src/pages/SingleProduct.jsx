import { Divider } from "@material-ui/core";
import React from "react";
import RelatedProducts from "../components/RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <h2>Paralex Slider</h2>
      <Divider />
      <h2>Thumbnai carousel</h2>
      <Divider />
      <RelatedProducts />
      <Divider />
      <h2>Form</h2>
    </>
  );
};

export default SingleProduct;
