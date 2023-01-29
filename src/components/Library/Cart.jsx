import {
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  IconButton,
  Input,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BooksInCart = [
  {
    image:
      "https://newcdn.fidibo.com/images/books/139470_10192_normal.jpg?width=200",
    title: "هرگز ترکم مکن",
    writer: "کازوئو ایشی گورو",
    price: "19000",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/67011_83570_normal.jpg?width=200",
    title: "سقوط",
    writer: "آلبر کامو",
    price: "25000",
  },
  {
    image:
      "https://newcdn.fidibo.com/images/books/5280_86954_normal.jpg?width=200",
    title: "مرگ آن را تلخ مینوشد",
    writer: "وجدی الکومی",
    price: "23000",
  },
];

export default function Cart() {
  // useState

  // const signUp = async (email) => {
  //   const res = await fetch("http://185.226.116.255:8899/api/v1/users/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify({ email: email }),
  //   });
  //   console.log(await res.json());
  // };

  // const getAllBooks = async () => {
  //   const res = await fetch("http://185.226.116.255:8899/api/v1/books/all");
  //   return await res.json();
  // };

  // useEffect(() => {
  //   getAllBooks().then((response) => {
  //     setPrice(respose.price)
  //   });
  // }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: "10px" }}>
      {/* <Chip
          label={"ریالی"}
          sx={{ color: "white", backgroundColor: "#28c5cc", ml: "60px" }}
        /> */}
      <Box>
        {BooksInCart.map((bookInCart) => {
          return (
            <div>
              <Stack
                sx={{
                  width: "100%",
                  height: "225px",
                  direction: "rtl",
                  mt: "20px",
                }}
                direction={"row"}
              >
                <img
                  src={bookInCart.image}
                  alt={bookInCart.title}
                  style={{
                    height: "200px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
                <Box
                  sx={{
                    textAlign: "right",
                    paddingRight: "15px",
                    width: "70%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#757575",
                      fontSize: "17px",
                      paddingBottom: "10px",
                    }}
                  >
                    {bookInCart.title}
                  </Typography>
                  <Typography sx={{ color: "#656565", fontSize: "12px" }}>
                    {bookInCart.writer}
                  </Typography>
                </Box>
                <Stack sx={{ textAlign: "left" }} direction={"row"}>
                  <Typography sx={{ fontSize: "14px", color: "#4e4e4e" }}>
                    {bookInCart.price} تومان
                  </Typography>
                  <IconButton>
                    <DeleteOutlineIcon
                      sx={{
                        color: "red",
                        width: "30px",
                        position: "absolute",
                        top: "-2px",
                        left: "-20px",
                      }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
              <Divider />
            </div>
          );
        })}
      </Box>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          mt: "25px",
          padding: "25px",
          mx: "20px",
          borderRadius: "10px",
        }}
      >
        <Stack direction={"row"} spacing={21}>
          <Stack direction={"row"}>
            <Button
              sx={{
                backgroundColor: "#28c5cc",
                color: "white",
                fontSize: "18px",
                p: "10px 18px",
                height: "48px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                fontWeight: 250,
              }}
            >
              اعمال کد
            </Button>
            <Input
              placeholder="کد تخفیف"
              disableUnderline={true}
              sx={{
                p: "10px 16px",
                backgroundColor: "white",
                fontSize: "18px",
                border: "1px solid #ccc",
                borderLeft: "none",
                color: "#555",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                height: "48px",
                direction: "rtl",
              }}
            ></Input>
          </Stack>
          <Typography sx={{ direction: "rtl", fontSize: "14px", pt: "15px" }}>
            اگر کد تخفیف دارید در این بخش وارد کنید
          </Typography>
        </Stack>
      </Box>
      <Stack direction={"row"} sx={{ direction: "rtl" }}>
        <Radio size="small"/>
        <Typography sx={{ color: "#9e9e9e", fontSize: "13px" }}>
          استفاده از اعتبار
        </Typography>
        <Box sx={{ direction: "rtl", fontSize: "13px", color: "#9e9e9e" }}>
          0 تومان
        </Box>
      </Stack>
    </Container>
  );
}
