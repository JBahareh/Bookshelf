import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faBookOpen,
  faHouse,
  faPodcast,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IconButton } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import { NavbarButton } from "../atoms/NavbarButton";

export default function SecondaryNavBar() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        paddingTop: "20px",
      }}
    >
      <Container>
        <Stack
          sx={{
            backgroundColor: "#FFFFFF",
            direction: "rtl",
            width: "100%",
          }}
          direction="row"
          justifyContent={"space-between"}
        >
          <Stack direction="row">
            <NavbarButton>
              <IconButton sx={{ fontSize: "large", color: "#757575" }}>
                <FontAwesomeIcon icon={faHouse} />
              </IconButton>
              خانه
            </NavbarButton>
            <NavbarButton>
              <IconButton sx={{ fontSize: "large", color: "#757575" }}>
                <FontAwesomeIcon icon={faBookOpen} />
              </IconButton>
              کتاب‌های الکترونیکی و صوتی
            </NavbarButton>
            <NavbarButton>
              <IconButton sx={{ fontSize: "large", color: "#757575" }}>
                <FontAwesomeIcon icon={faPodcast} />
              </IconButton>
              پادکست
            </NavbarButton>
            <NavbarButton>
              <IconButton sx={{ fontSize: "large", color: "#757575" }}>
                <FontAwesomeIcon icon={faNewspaper} />
              </IconButton>
              مجله
            </NavbarButton>
            <NavbarButton sx={{ color: "#69009e" }}>
              <IconButton sx={{ fontSize: "large", color: "#69009e" }}>
                <FontAwesomeIcon icon={faStarOfLife} />
              </IconButton>
              فیدی‌پلاس
            </NavbarButton>
          </Stack>
          <Button
            sx={{
              backgroundColor: "#28c5cc",
              color: "#ffffff",
              borderRadius: "10px",
              padding: "14px 57px",
              margin: "13px",
            }}
          >
            دانلود اپلیکیشن
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
