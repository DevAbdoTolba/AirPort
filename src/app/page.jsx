"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header.jsx";
import Main from "./Main.jsx";

export default function page() {
  return (
    <Box>
      <Header />
      <Main />
    </Box>
  );
}
