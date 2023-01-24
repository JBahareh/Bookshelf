import * as React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../../assets/styles/drag.css";


const books = [
  {
    image:
      "https://newcdn.fidibo.com/images/books/2428_78200_normal.jpg?width=200",
    title: "بابا لنگ‌دراز",
    writer: "جین وبستر",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/5280_86954_normal.jpg?width=200",
    title: "مرگ آن را تلخ مینوشد",
    writer: "وجدی الکومی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/125302_50943_normal.jpg?width=200",
    title: "کتابخانه نیمه‌شب",
    writer: "مت هیگ",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2118_27928_normal.jpg?width=200",
    title: "بینوایان",
    writer: "ویکتور هوگو",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2136_40896_normal.jpg?width=200",
    title: "آوای وحش",
    writer: "جک لندن",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2428_78200_normal.jpg?width=200",
    title: "بابا لنگ‌دراز",
    writer: "جین وبستر",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/5280_86954_normal.jpg?width=200",
    title: "مرگ آن را تلخ مینوشد",
    writer: "وجدی الکومی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/125302_50943_normal.jpg?width=200",
    title: "کتابخانه نیمه‌شب",
    writer: "مت هیگ",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2118_27928_normal.jpg?width=200",
    title: "بینوایان",
    writer: "ویکتور هوگو",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2136_40896_normal.jpg?width=200",
    title: "آوای وحش",
    writer: "جک لندن",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2428_78200_normal.jpg?width=200",
    title: "بابا لنگ‌دراز",
    writer: "جین وبستر",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/5280_86954_normal.jpg?width=200",
    title: "مرگ آن را تلخ مینوشد",
    writer: "وجدی الکومی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/125302_50943_normal.jpg?width=200",
    title: "کتابخانه نیمه‌شب",
    writer: "مت هیگ",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2118_27928_normal.jpg?width=200",
    title: "بینوایان",
    writer: "ویکتور هوگو",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/2136_40896_normal.jpg?width=200",
    title: "آوای وحش",
    writer: "جک لندن",
  },
];

export default function DragList() {
  return (
    <Container className="drag-list">
      <Typography sx={{ marginTop: "40px", textAlign: "right" }}>
        پرفروش‌های هفته
      </Typography>
      <Swiper
        slidesPerView={6}
        spaceBetween={25}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="swiper"
      >
        {books.map((book) => {
          return (
            <SwiperSlide>
              <img src={book.image} alt="fidibook" />
              <Typography sx={{ textAlign: "right", marginTop: "15px", fontSize: "14px", paddingRight: "2px" }}>{book.title}</Typography>
              <Typography sx={{ textAlign: "right", marginTop: "20px", fontSize: "12px", color: "#9e9e9e", paddingRight: "2px" }}>{book.writer}</Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
