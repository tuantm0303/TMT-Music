import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { slidesApi } from "../../services/slide";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

const Banner = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await slidesApi.list();
      console.log(data);
      setSlides(data);
    })();
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
  };
  return (
    <div className="banner w-[1048px]">
      <Box m="20">
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)",
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "cyan.500",
              },
            },
            ".slick-arrow": {
              backgroundColor: "cyan.500",
              color: "white",
              w: "30px",
              h: "50px",
              transition: "0.2s",
              _hover: {
                backgroundColor: "cyan.500",
                color: "white",
              },
              _focus: {
                backgroundColor: "cyan.500",
                color: "white",
              },
              _before: {
                transition: "0.2s",
              },
            },
            ".slick-prev": {
              left: "-40px",
              _before: {
                content: '"◀"',
              },
            },
            ".slick-next": {
              right: "-40px",
              _before: {
                content: '"▶"',
              },
            },
          }}
        >
          <Slider {...slickSettings}>
            {slides.map((item, index) => (
              <Slide key={index} img={item.image} name={item.name} />
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
