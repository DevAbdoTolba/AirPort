"use client";

import React, { useState } from "react";

import Header from "../../../components/Header";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
export default function Page({ params }) {
  const { entity } = params;
  const attr = ["id", "first_name", "last_name", "email"];
  const [search, setSearch] = React.useState("");

  const [items, setItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setItems((prevItems) => [...prevItems, value]);
    } else {
      setItems((prevItems) => prevItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search + "\n" + items);
    // go to ./table?search=...&attr=...

    window.location.href =
      "/pages/table/" + "?search=" + search + "&attr=" + items.join(",");
  };

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
            <Box
              sx={{
                flexGrow: 1,
                fontWeight: "900",
                paddingBlock: "1rem",
                position: "absolute",
                top: "10%",
                textAlign: "center",
              }}
            >
              <Typography variant="h3" component="div">
                {entity}
              </Typography>
              <Paper elevation={1}>
                <FormGroup
                  sx={{
                    padding: "1rem",
                    marginTop: "1rem",
                    maxWidth: "80vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {attr.map((item, index) => (
                    <>
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            onChange={handleCheckboxChange}
                            value={item}
                          />
                        }
                        label={item}
                      />
                    </>
                  ))}
                </FormGroup>
              </Paper>
            </Box>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
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
                  label="Search"
                  variant="outlined"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoComplete="off"
                  required
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
