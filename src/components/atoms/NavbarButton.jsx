import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const NavbarButton = styled(Button)({
  color: "#212121",
  borderRadius: 0,
  "&:hover": {
    borderBottom: "2px solid #28c5cc",
    backgroundColor: "unset",
  },
});
