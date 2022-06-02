import { Grid, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveUserId } from "../actions/actions";
import "./contact.css";
import { MoreVert } from "@mui/icons-material";
import DeleteContact from "./DeleteContact";

const Contact = ({ contact }) => {
  const [remove, setRemove] = useState(false);
  const dispatch = useDispatch();

  const { name, profile_pic, status, userId } = contact;

  const handleChange = () => {
    dispatch(setActiveUserId(userId));
  };

  const toggleButton = () => {
    setRemove(true);
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {remove ? (
        <Grid container>
          <DeleteContact setRemove={setRemove} userId={userId} />
        </Grid>
      ) : (
        <Grid className="contact" container onClick={handleChange}>
          <Grid item xs={4} sm={3} md={2} lg={2} xl={2}>
            <img
              src={profile_pic}
              alt=""
              className="contactImg"
              onClick={handleChange}
            />
          </Grid>

          <Grid
            item
            xs={8}
            sm={9}
            md={10}
            lg={10}
            xl={10}
            container
            className="smallContainer"
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
              xl={10}
              onClick={handleChange}
            >
              <Typography>{name}</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} style={{ margin: 0 }}>
              <IconButton
                sx={{ height: "1rem", width: "1rem", color: "white" }}
                onClick={toggleButton}
              >
                <MoreVert
                  sx={{ height: "1rem", width: "1rem", color: "white" }}
                />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              onClick={handleChange}
            >
              <Typography variant="caption">{status}</Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Contact;
