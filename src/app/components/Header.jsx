import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header({ title }) {
  title = title || "Aswan AirPort";

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "10vh",
        }}
      >
        <Toolbar>
          {title !== "Aswan AirPort" ? (
            <a href="/">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </a>
          ) : (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
