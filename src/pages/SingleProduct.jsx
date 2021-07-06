import { Divider } from "@material-ui/core";
import React from "react";
import RelatedProducts from "../components/RelatedProducts";
import ContactForm from "../components/ContactForm";
const SingleProduct = () => {
  return (
    <>
      <h2>Paralex Slider</h2>
      <Divider />
      <h2>Thumbnai carousel</h2>
      <Divider />
      <RelatedProducts />
      <Divider />
      <ContactForm />
    </>
  );
};

export default SingleProduct;
