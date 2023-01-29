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
      "https://newcdn.fidibo.com/images/books/139470_10192_normal.jpg?width=200",
    title: "هرگز ترکم مکن",
    writer: "کازوئو ایشی گورو",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/139536_96620_normal.jpg?width=200",
    title: "اول شخص مفرد",
    writer: "هاروکی موراکامی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/150079_44019_normal.jpg?width=200",
    title: "گل پسری بسه",
    writer: "رابرت گلور",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/67011_83570_normal.jpg?width=200",
    title: "سقوط",
    writer: "آلبر کامو",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/135684_11806_normal.jpg?width=200",
    title: "قدرت شروع ناقص",
    writer: "جیمز کلییر",
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
      "https://newcdn.fidibo.com/images/books/88733_16016_normal.jpg?width=200",
    title: "خون‌خورده",
    writer: "مهدی یزدانی خرم",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/136690_95733_normal.jpg?width=200",
    title: "چرا تابه‌حال کسی این‌ها را به من نگفته بود؟",
    writer: "جولی اسمیت",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/135777_20737_normal.jpg?width=200",
    title: "عیبی ندارد اگر حالت خوش نیست",
    writer: "مگان دیواین",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/86186_36247_normal.jpg?width=200",
    title: "حافظه‌ی نامحدود",
    writer: "کوین هرسلی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/64721_26746_normal.jpg?width=200",
    title: "روش برخورد با افراد دشوار",
    writer: "سم هورن",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/81742_48382_normal.jpg?width=200",
    title: "هر بار معنی زندگی را فهمیدم، عوضش کردند",
    writer: "دانیل مارتین کلاین",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/121910_97435_normal.jpg?width=200",
    title: "وقتی موسی کشته شد",
    writer: "ضیا قاسمی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/100102_63516_normal.jpg?width=200",
    title: "آدم‌خواران",
    writer: "ژان تولی",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/85661_66642_normal.jpg?width=200",
    title: "پنهان‌نوشته‌های یک عاشق قرمعلی",
    writer: "نزار قبانی",
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
              <Typography
                sx={{
                  textAlign: "right",
                  marginTop: "15px",
                  fontSize: "14px",
                  paddingRight: "2px",
                }}
              >
                {book.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "right",
                  marginTop: "20px",
                  fontSize: "12px",
                  color: "#9e9e9e",
                  paddingRight: "2px",
                }}
              >
                {book.writer}
              </Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
