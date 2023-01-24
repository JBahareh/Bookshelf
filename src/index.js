import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookShelf from "./pages/BookShelf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={createTheme({
        typography: {
          fontFamily: "IRANYekanWeb",
        },
      })}
    >
      <BookShelf />
    </ThemeProvider>
  </React.StrictMode>
);
