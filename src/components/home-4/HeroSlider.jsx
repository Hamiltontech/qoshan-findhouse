import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings} arrows={false}>
      <div className="slide slide-one image-1" style={{height: "1000px"}}></div>
      <div className="slide slide-one image-2" style={{height: "1000px"}}></div>
      <div className="slide slide-one image-1"></div>
    </Slider>
  );
};

export default HeroSlider;
