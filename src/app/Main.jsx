import React from "react";
import Box from "@mui/material/Box";
import Cluster from "./Cluster";

export default function Main() {
  let transportation = "Transportation";
  let transportation_list = [
    "Aircrafts",
    "Flights",
    "Pilots",
    "Baggage",
    "Boarding_Passes",
  ];

  let hospitality = "Hospitality";
  let hospitality_list = ["Hosts", "Passengers", "Reservations", "Duty Free"];

  let human_resources = "Human Resources";
  let human_resources_list = ["Payments", "Dependents", "Employees"];

  return (
    <Box>
      {/* 3 centered vertical sections */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <Cluster title={transportation} list={transportation_list} />
            <Cluster title={hospitality} list={hospitality_list} />
            <Cluster title={human_resources} list={human_resources_list} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
