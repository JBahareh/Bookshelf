import {
  Button,
  Container,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import LaptopIcon from "@mui/icons-material/Laptop";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f0f0f0", marginTop: "50px" }}>
      <Container>
        <Stack
          sx={{ direction: "rtl", paddingTop: "40px", paddingBottom: "40px" }}
          direction="row"
        >
          <Stack direction="row" sx={{ width: "50%" }}>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                }}
              >
                فیدیبو
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                درباره ما
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                ورود ناشران
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                تماس با ما
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                همکاری با ما
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                وبلاگ
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                رصد
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                راهنما
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                RSS کتاب‌ها
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                شرایط استفاده
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                حریم خصوصی
              </Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                }}
              >
                کتاب‌های پیشنهادی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                بهترین سال زندگی تو
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                تختت را مرتب کن
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                مردی به نام اوه
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                چهار اثر فلورانس
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                اثر مرکب
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                ملت عشق
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                نیمه تاریک وجود
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                میشل اوباما شدن
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                صبح جادویی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کیمیاگر
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                صد سال تنهایی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                شب‌های روشن
              </Typography>
            </Box>
            <Box sx={{ width: "30%" }}>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                }}
              >
                دسته‌بندی پیشنهادی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های دانشگاهی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های نوجوان
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                زندگی‌نامه، سفرنامه و خاطرات
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های کودک
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های آموزشی
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های تاریخ
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های رایگان
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  lineHeight: "30px",
                  textAlign: "right",
                }}
              >
                کتاب‌های سبک زندگی
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ width: "50%" }}>
            <Box sx={{ width: "100%", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                }}
              >
                اپلیکیشن فیدیبو
              </Typography>
              <Stack direction={"stretch"}>
                <IconButton>
                  <AppleIcon
                    sx={{ color: "#616161", width: "55px", height: "62px" }}
                  />
                </IconButton>
                <IconButton>
                  <AndroidIcon
                    sx={{ color: "#a4c639", width: "46px", height: "65px" }}
                  />
                </IconButton>
                <IconButton>
                  <LaptopIcon
                    sx={{ color: "#28c5cc", width: "74px", height: "65px" }}
                  />
                </IconButton>
                <Button
                  sx={{
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#28c5cc",
                    padding: "14px 57px",
                    margin: "auto",
                    marginLeft: "35px",
                    fontSize: "13px",
                  }}
                >
                  نصب اپلیکیشن فیدیبو
                </Button>
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                  marginTop: "20px",
                }}
              >
                درخواست کتاب
              </Typography>
              <Typography
                sx={{
                  color: "#9e9e9e",
                  fontSize: "13px",
                  marginBottom: "15px",
                }}
              >
                کتاب مورد نظرتان را درخواست کنید تا در صورت امکان آن را به
                فروشگاه اضافه کنیم.
              </Typography>
              <Input
                placeholder="نام کتاب"
                disableUnderline={true}
                sx={{
                  border: "1px solid #e9e9e9",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "6px 12px",
                  fontSize: "14px",
                  width: "148px",
                  height: "34px",
                  marginLeft: "5px",
                }}
              ></Input>
              <Input
                placeholder="نام نویسنده"
                disableUnderline={true}
                sx={{
                  border: "1px solid #e9e9e9",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "6px 12px",
                  fontSize: "14px",
                  width: "148px",
                  height: "34px",
                  marginLeft: "5px",
                }}
              ></Input>
              <Input
                placeholder="نام ناشر"
                disableUnderline={true}
                sx={{
                  border: "1px solid #e9e9e9",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "6px 12px",
                  fontSize: "14px",
                  width: "148px",
                  height: "34px",
                  marginLeft: "5px",
                }}
              ></Input>
              <Button
                sx={{
                  borderRadius: "10px",
                  color: "white",
                  backgroundColor: "#28c5cc",
                  padding: "7px 26px",
                  fontSize: "12px",
                }}
              >
                ارسال
              </Button>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#424242",
                  fontSize: "15px",
                  marginBottom: "15px",
                  marginTop: "30px",
                }}
              >
                پشتیبانی
              </Typography>
              <Stack direction="row" justifyContent={"space-between"}>
                <Typography sx={{ color: "#707070", fontSize: "13px" }}>
                  هفت روز هفته (ساعت ۹ الی ۱۷)
                </Typography>
                <Typography
                  sx={{
                    color: "#000000",
                    fontSize: "18px",
                    marginLeft: "40px",
                  }}
                >
                  021-91020010
                </Typography>
              </Stack>
              <Stack direction={"row"} sx={{ width: "min-content", marginRight: "auto", marginLeft: "29px" }}>
                <IconButton>
                  <GroupWorkIcon
                    sx={{ color: "#616161", width: "41px", height: "41px" }}
                  />
                </IconButton>
                <IconButton>
                  <TwitterIcon
                    sx={{ color: "#616161", width: "41px", height: "41px" }}
                  />
                </IconButton>
                <IconButton>
                  <InstagramIcon
                    sx={{ color: "#616161", width: "41px", height: "41px" }}
                  />
                </IconButton>
                <IconButton>
                  <FacebookIcon
                    sx={{ color: "#616161", width: "41px", height: "41px" }}
                  />
                </IconButton>
                <IconButton>
                  <TelegramIcon
                    sx={{ color: "#616161", width: "41px", height: "41px" }}
                  />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
      <Box sx={{ backgroundColor: "#cfcfcf" }}>
        <Container>
          <Stack direction="row">
            <img
              src="https://newcdn.fidibo.com/img/enamad.png"
              width="150"
              height="150"
              alt="namad"
              style={{ marginTop: "40px", marginRight: "20px" }}
            />
            <img
              src="logo.png"
              width="150"
              height="150"
              alt="samandehi"
              style={{ marginTop: "40px" }}
            />
            <Box sx={{ width: "67%", marginLeft: "auto" }}>
              <Typography
                sx={{
                  fontSize: "17px",
                  direction: "rtl",
                  color: "#616161",
                  padding: "30px 0 20px 0",
                }}
              >
                فیدیبو بزرگترین سامانه خرید کتاب الکترونیک، کتاب صوتی و مجله در
                ایران
              </Typography>
              <Typography
                sx={{
                  color: "#616161",
                  fontSize: "13px",
                  direction: "rtl",
                  paddingBottom: "40px",
                  textAlign: "justify",
                }}
              >
                فیدیبو می‌کوشد با گستره‌ای از کتاب‌ها و مجلات متنوع برای طیف
                وسیعی از کاربران تجربه فوق‌العاده خریدکتاب و خواندن آن در
                دستگاه‌های هوشمند را فراهم کند.در فیدیبو با خرید کتاب از بهترین
                ناشران ایرانی در موضوعات مختلف، کاربران می‌توانند در اپلیکیشن
                کتابخانه‌ای‌ شخصی برای خود بسازند و از امکانات منحصر به فرد آن
                استفاده کنند. برای تیم فیدیبو هدف خرید کتاب نیست بلکه ایجاد
                محیطی بری ارتباط بیشتر اهالی کتاب است.شایان ذکر است که فیدیبو
                بعد از خرید کتاب، با تیم پشتیبانی همیشه پاسخگوی کاربران محترم
                خواهد بود. با دانلود هزاران کتاب صوتی، کتاب دانشگاهی، شعر
                عاشقانه، رمان عاشقانه ، مادر و کودک و پادکست از فیدیبو، خواندن
                کتاب را به گونه ای متفاوت تجربه کنیم.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#616161",
          textAlign: "center",
          color: "white",
          fontSize: "13px",
          paddingTop: "5px",
          paddingBottom: "5px",
          direction: "rtl",
        }}
      >
        © کلیه حقوق این وب‌سایت متعلق به فیدیبو می‌باشد.
      </Box>
    </Box>
  );
}
