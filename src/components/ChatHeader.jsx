import React from "react";
import { Typography, Grid } from "@mui/material";
import "./chatHeader.css";

const ChatHeader = ({ activeUser }) => {
  const { name, status, profile_pic } = activeUser[0];
  return (
    <Grid container className="chatHeader">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="chatHeaderStatus"
      >
        <Typography variant="caption">{status}</Typography>
      </Grid>
    </Grid>
  );
};

export default ChatHeader;
