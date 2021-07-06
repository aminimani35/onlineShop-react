import Slider from "react-slick";

const TopSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      focusOnSelect: true,
    };
    return (
      <>
        <Slider {...settings}>
        
        </Slider>
      </>
    );
};

export default TopSlider;
