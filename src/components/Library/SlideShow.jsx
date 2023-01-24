import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/styles/slide.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from "@mui/material";

const images = [
  {
    imgPath: "https://newcdn.fidibo.com/img/Slides/nd-self-improvement-lg.jpg",
  },
  {
    imgPath: "https://newcdn.fidibo.com/img/Slides/nd-literature-lg.jpg",
  },
  {
    imgPath: "https://newcdn.fidibo.com/img/Slides/nd-download-apps-lg.jpg",
  },
  {
    imgPath: "https://newcdn.fidibo.com/img/Slides/nd-fidiplus-lg.jpg",
  },
];

export default function SlideShow() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <Container className="slide-show-section">
      <Box
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          style={{ position: "relative" }}
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <img src={image.imgPath} alt="fidibook" />
              </SwiperSlide>
            );
          })}
          <IconButton
            sx={{
              position: "absolute",
              right: 40,
              top: "45%",
              zIndex: 2,
              borderRadius: "50%",
              backgroundColor: "#00000080",
              width: "50px",
              height: "50px", 
            }}
            ref={navigationNextRef}
          >
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              left: 40,
              top: "45%",
              zIndex: 2,
              borderRadius: "50%",
              backgroundColor: "#00000080",
              width: "50px",
              height: "50px",
            }}
            ref={navigationPrevRef}
          >
            <ArrowBackIosNewIcon sx={{ color: "white" }} />
          </IconButton>
        </Swiper>
      </Box>
    </Container>
  );
}
