import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./empty.css";

const Empty = ({ user }) => {
  const { name, profile_pic, status } = user;
  const firstName = name.split(" ")[0];

  return (
    <div className="empty">
      <Grid container className="gridContainer">
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="welcome">
          <Typography variant="h4">Welcome, {firstName}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="profile">
          <img src={profile_pic} alt={name} className="profilePic" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="status">
          <Typography
            variant="subtitle2"
            style={{ borderBottom: "solid 1px gray" }}
          >
            Status:&nbsp;
            {status}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className="buttonGrid"
        >
          <Button variant="contained">start a conversation</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="body">
          <Typography variant="body">
            Search for someone to start chatting with or go to contacts to see
            who is available
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Empty;
