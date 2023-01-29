import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const book = {
  image:
    "https://newcdn.fidibo.com/images/books/136690_95733_normal.jpg?width=200",
  title: "چرا تابه‌حال کسی این‌ها را به من نگفته بود؟",
  writer: "جولی اسمیت",
  description:
    "در این کتاب هرآنچه در طی سال‌ها فعالیتم در رشته‌ی روان‌شناسی آموخته‌ام به‌تفکیک با شما درمیان می‌گذارم. این کتاب دربرگیرنده‌ی مهم‌ترین چیزهایی است که تاکنون یاد گرفته‌ام، چیزهایی که به خودم و مراجعانم کمک کرده به‌جای تقلا و دست‌وپا زدن میان احساسات راه درستی را پیش بگیریم. خواندن این کتاب تضمین نمی‌کند که شما باقی عمرتان لبخندبه‌لب زندگی خواهید کرد؛ اما به شما یاد می‌دهد از کدام ابزار بهره بگیرید تا لبخندهایتان واقعی و از صمیم ‌قلب باشد. دکتر جولی اسمیت، با تکیه بر تجربه‌ی روان‌شناسی بالینی در طی سال‌ها، مهارت‌هایی را با شما در میان می‌گذارد که برای عبور از فراز و نشیب‌های زندگی نیاز دارید. چرا کسی تا به‌حال این‌ها را به من نگفته بود، همچون جعبه‌ابزاری مفید، راهنمایی ضروری برای بهبود و ارتقای سلامت روان شماست. توصیه‌های ساده اما تخصصی دکتر اسمیت و تکنیک‌های مقابله‌ای قدرتمندش به شما کمک می‌کند فارغ از مشکلات و مسائل زندگی، انعطاف‌پذیری خود را حفظ کنید. مدیریت اضطراب، برخورد با انتقاد، مقابله با بدخلقی، ایجاد اعتماد به نفس، یافتن انگیزه، پرورش حس خودارزشمندی، بخشش خود و موارد بسیاری از این دست کشمکش‌هایی هستند که خیلی از ما سال‌هاست با آن‌ها دست و پنجه نرم می‌کنیم. این کتاب راهکارهای عملی مناسب و روش‌های اثبات‌شده‌‌‌ای را برای حل‌وفصل این مسائل به ما ارائه می‌دهد. چرا کسی تابه‌حال این‌ها را به من نگفته بود؟ مرجعی عالی با راهکارهای عملی برای هرکسی است که به سلامت روان خویش اهمیت می‌دهد و همه، حتی بدون پیش‌زمینه‌ای از روان‌شناسی، کاملاً می‌توانند با آن ارتباط برقرار کنند.",
};

export default function BookCard() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e9e9e9",
          width: "100%",
          textAlign: "center",
          height: "70px",
          padding: "23px",
          fontSize: "14px",
        }}
      >
        کتاب {book.title}
      </Box>
      <Container>
        <Stack
          direction={"row"}
          sx={{ direction: "rtl", marginTop: "25px", padding: "0px 80px" }}
        >
          <img src={book.image} alt={book.title} />
          <Box sx={{ padding: "15px 40px" }}>
            <Typography sx={{ fontSize: "20px", marginBottom: "10px" }}>
              کتاب {book.title}
            </Typography>
            <Typography sx={{ fontSize: "14px", marginBottom: "30px" }}>
              {book.writer}
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              نسخه الکترونیک {book.title} به همراه هزاران کتاب دیگر از طریق
              اپلیکیشن رایگان فیدیبو در دسترس است. همین حالا دانلود کنید!
            </Typography>
          </Box>
          <Box
            sx={{
              border: "2px solid #e3e3e3",
              backgroundColor: "#f5f5f5",
              padding: "15px 10px",
              width: "375px",
              height: "210px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "#4c4c4c",
                marginBottom: "15px",
                fontSize: "18px",
              }}
            >
              24.800 تومان
            </Typography>
            <Button
              sx={{
                fontSize: "12px",
                width: "100%",
                height: "40px",
                color: "white",
                backgroundColor: "#28c5cc",
                borderRadius: "7px",
                marginBottom: "13px",
              }}
            >
              خرید نسخه الکترونیک
            </Button>
            <Button
              sx={{
                fontSize: "12px",
                width: "100%",
                height: "40px",
                color: "#28c5cc",
                backgroundColor: "#f5f5f5",
                borderRadius: "7px",
                border: "2px solid #28c5cc",
              }}
            >
              دانلود رایگان فیدیبو
            </Button>
            <Stack
              direction={"row"}
              sx={{ marginTop: "20px", marginRight: "50px" }}
            >
              <MobileScreenShareIcon sx={{ fontSize: "15px" }} />
              <Typography
                sx={{
                  color: "#4c4c4c",
                  fontSize: "12px",
                }}
              >
                اشتراک‌گذاری
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#ffcd63",
            margin: "20px 80px",
            padding: "30px 190px",
            direction: "rtl",
          }}
          direction={"row"}
        >
          <CardGiftcardIcon
            sx={{ color: "#d14244", marginLeft: "5px", fontSize: "28px" }}
          />
          <Typography sx={{ fontSize: "18px" }}>
            با کد تخفیف hifidibo این کتاب را در اولین خریدتان با «۵۰٪ تخفیف»
            بخرید!
          </Typography>
        </Stack>
        <Box sx={{ padding: "0px 120px" }}>
          <div
            style={{
              fontSize: "17px",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            درباره کتاب {book.title}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: "30px",
              textAlign: "justify",
              direction: "rtl",
            }}
          >
            {book.description}
          </div>
          {/* <div>ادامه/بستن</div> */}
        </Box>
        {/* rate and review */}
      </Container>
    </>
  );
}
