import { Button } from "@mui/material";
import React from "react";

const style = {
  backgroundColor: "teal",
  borderRadius: "30px",
  // padding: "7px 25px",
  textTransform: "capitalize",
  margin: "5px"
};
export default function TealButton({ label }) {
  return (
    <Button sx={style} variant="contained" size="large">
      {label}
    </Button>
  );
}
