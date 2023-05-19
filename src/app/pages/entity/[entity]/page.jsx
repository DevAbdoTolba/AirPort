"use client";

import React, { useState } from "react";

import Header from "../../../components/Header";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
export default function Page({ params }) {
  const { entity } = params;
  const attr = ["id", "first_name", "last_name", "email"];
  const [search, setSearch] = React.useState("");

  const [items, setItems] = useState([]);

  const [value, setValue] = React.useState([]);

  const handleCheckboxChange = (event, item) => {
    if (event.target.checked) {
      setValue((val) => [...val, item]);
    } else {
      setValue((val) => val.filter((text) => text !== item));
    }

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
              <Box
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
                <List
                  variant="outlined"
                  aria-label="Screens"
                  role="group"
                  orientation="horizontal"
                  sx={{
                    bgcolor: "background.body",
                    flexGrow: 0,
                    "--List-gap": "20px",
                    "--List-padding": "8px",
                    "--List-radius": "8px",
                  }}
                >
                  {attr.map((item) => (
                    <ListItem key={item}>
                      <Checkbox
                        disableIcon
                        overlay
                        label={item}
                        value={item}
                        checked={value.includes(item)}
                        color="neutral"
                        variant={value.includes(item) ? "outlined" : "plain"}
                        onChange={(event) => {
                          handleCheckboxChange(event, item);
                        }}
                        slotProps={{
                          action: ({ checked }) => ({
                            sx: {
                              bgcolor: checked
                                ? "background.level1"
                                : "transparent",
                              boxShadow: checked ? "sm" : "none",
                            },
                          }),
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
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
