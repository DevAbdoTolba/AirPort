import React from "react";

import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
export default function Cluster({ title, list }) {
  return (
    <>
      <Paper
        sx={{
          aspectRatio: "3 / 3",
          width: "15vw",
          //   only border to the right but the last one doesn't have it
          borderRight: "1px solid black",
          borderRadius: "0rem",
          "&:last-child": {
            borderRight: "none",
          },
        }}
        elevation={0}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "900", paddingBlock: "1rem" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "50%",
            lineHeight: "1.5rem",
          }}
        >
          {list.map((item, index) => {
            return (
              <a href={"/pages/entity/" + item} key={index}>
                <Typography variant="p" sx={{ flexGrow: 1, display: "block" }}>
                  - {item}
                </Typography>
              </a>
            );
          })}
        </Box>
      </Paper>
    </>
  );
}
