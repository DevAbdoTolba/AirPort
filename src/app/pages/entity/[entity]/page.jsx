"use client";

import React from "react";

import Header from "../../../components/Header";
import { Box, Button, TextField, Typography } from "@mui/material";
export default function Page({ params }) {
  const { entity } = params;

  return (
    <>
      <Header title={entity} />

      {/* in the big middle center of the bage title named on entity name and under neath search field with a search button */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            lineHeight: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50%",
              lineHeight: "1.5rem",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "900",
                paddingBlock: "1rem",
                position: "absolute",
                top: "10%",
              }}
            >
              {entity}
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("search");
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",

                  gap: "1rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                />

                <Button variant="contained" type="submit">
                  Search
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}
