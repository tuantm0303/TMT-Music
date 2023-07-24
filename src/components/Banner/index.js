import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { slidesApi } from "../../services/slide";
import './Banner.scss';

const Banner = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await slidesApi.list();
      setSlides(data);
    })();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="kxbovgjmpw">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div className="ohwxinitqm" key={index}>
            <img src={item?.image} alt={item?.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
