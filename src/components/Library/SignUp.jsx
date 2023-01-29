import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

export const SignUp = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const signUp = async () => {
    try {
      setIsLoading(true);
      const data = await axios({
        url: "http://185.226.116.255:8899/api/v1/users/signup",
        method: "POST",
        data: { email: email },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Button
        onClick={handleOpen}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        style={{ color: isHover ? "black" : "#8a8a8a", direction: "ltr" }}
        endIcon={<FontAwesomeIcon icon={faUser} fontSize="large" />}
      >
        ورود و ثبت نام
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogContent sx={{ px: 4, py: 2 }}>
          <CloseIcon onClick={handleClose} />
          <Stack sx={{ px: { xs: 0, sm: 3 } }} spacing={2} alignItems="center">
            <Box>
              <FontAwesomeIcon icon={faUser} fontSize="50px" color="#424242" />
            </Box>
            <Typography
              id="modal-modal-title"
              sx={{ textAlign: "center", fontSize: "20px" }}
            >
              ورود یا ثبت‌ نام
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{
                direction: "rtl",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {/* لطفا کد کشور را انتخاب و شماره همراه خود را وارد کنید */}
              لطفا ایمیل خود را وارد کنید
            </Typography>
            <Stack
              direction="row"
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                alignItems: "center",
                padding: "10px",
                width: "100%",
              }}
            >
              {/* <PublicIcon />
                  <Typography marginLeft="5px">(+98)</Typography>
                  <KeyboardArrowDownIcon marginLeft="5px"/>
                  <Divider orientation="vertical" sx={{ m: "0.5px 10px", height: 30 }} />
                  <InputBase
                    placeholder="9123456789"
                    sx={{
                      alignItems: "center",
                    }}
                  /> */}
              <AlternateEmailIcon
                sx={{ color: "#989898", paddingRight: "5px" }}
              />
              <InputBase
                placeholder="Email"
                disableUnderline={true}
                sx={{ width: "100%" }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Stack>
            <LoadingButton
              sx={{
                backgroundColor: "#28c5cc",
                borderRadius: "10px",
                color: "white",
                fontSize: "19px",
                mb: 4,
                py: 1,
              }}
              fullWidth
              loading={isLoading}
              onClick={() => signUp()}
            >
              ورود
            </LoadingButton>
            <Box sx={{ width: "100%" }}>
              <Divider>
                <Chip label="یا" />
              </Divider>
            </Box>
            <Stack alignItems="center" sx={{ pt: 2 }}>
              <Stack direction="row" spacing={1}>
                <Typography sx={{ paddingBottom: "30px" }}>
                  ورود با حساب گوگل
                </Typography>
                <GoogleIcon />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography sx={{ paddingBottom: "30px" }}>
                  ورود با ایمیل
                </Typography>
                <MailOutlineIcon />
              </Stack>
              <Typography sx={{ fontSize: "13px", color: "#9E9E9E" }}>
                قوانین استفاده از فیدیبو را پذیرفته‌ام
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
