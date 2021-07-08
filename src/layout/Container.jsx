// import { Grid } from "@material-ui/core";
import React from "react";
// import RelatedProducts from "../components/RelatedProducts";
import SingleProduct from "../pages/SingleProduct";
import RenderRoutes from "../routes/Routes";

const Container = () => {
  return (
    <div style={{ padding: "0.6rem 3rem" }}>
      <RenderRoutes />
      {/* <SingleProduct /> */}
      {/* <RelatedProducts /> */}
    </div>
  );
};

export default Container;
