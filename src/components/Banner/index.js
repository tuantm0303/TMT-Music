import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

const Banner = () => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
  };
  return (
    <div className="banner w-[1018px]">
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
            <Slide
              img={
                "https://photo-zmp3.zmdcdn.me/banner/4/d/d/5/4dd57b69bed51c2da8b50716b697677e.jpg"
              }
            />
            <Slide
              img={
                "https://photo-zmp3.zmdcdn.me/banner/1/0/7/3/107367e8de4ee33474d8fb33811c66bf.jpg"
              }
            />
            <Slide
              img={
                "https://photo-zmp3.zmdcdn.me/banner/2/c/1/6/2c16d9e4b5189c7712f50360ab7ac7a9.jpg"
              }
            />
            <Slide
              img={
                "https://photo-zmp3.zmdcdn.me/banner/d/7/0/b/d70bec2b7f86754b41f124e04a0704bf.jpg"
              }
            />
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
