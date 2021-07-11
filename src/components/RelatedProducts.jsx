import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getLimitedProducts } from "../Services/ProductApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { cancelOperation } from "../Services/http";
const useStyles = makeStyles({
  Card: {
    padding: "1rem !important",
    boxShadow: "none",
    margin: ".5rem .3rem",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      // border: ".5px solid #333",
      transition: ".2s ease-in",
      transform: "translateY(-3px)",
    },
  },
  Wrapper: {
    backgroundColor: "#fff",
    borderRadius: ".5rem",
    padding: "2rem",
    width: "100%",
  },
  TitleWrapper: {
    padding: " 0 0.6rem 0.6rem 0.6rem",
    marginRight: ".5rem",
  },
  AddToCardBtn: {
    backgroundColor: "#F13D53",
    color: "#fff",
    textAlign: "left",
  },
  PriceWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: ".3rem auto",
  },
});

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    focusOnSelect: true,
  };
  const classes = useStyles();
  useEffect(() => {
    getLimitedProducts(8).then((resp) => setProducts(resp));
    return () => cancelOperation.cancel();
  }, []);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.TitleWrapper}>
        <h2>محصولات مرتبط</h2>
      </div>
      <Slider {...settings}>
        {/* {products && */}
        {products.map((product, index) => (
          <ProductCard key={index} product={product} classes={classes} />
        ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
