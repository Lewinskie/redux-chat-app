import { IconButton, Typography, Grid } from "@mui/material";
import React from "react";
import "./deleteContact.css";
import { useDispatch } from "react-redux";
import { deleteContact, setActiveUserId } from "../actions/actions";
import { CheckCircle, Cancel } from "@mui/icons-material";

const DeleteContact = ({ setRemove, userId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(userId));
    dispatch(setActiveUserId(null));
  };
  const handleCancel = () => {
    setRemove(false);
  };
  return (
    <Grid container className="removeContact">
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        className="removeContactTypography"
      >
        <Typography>delete contact?</Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <IconButton onClick={handleDelete} style={{ color: "red" }}>
          <CheckCircle />
        </IconButton>
      </Grid>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <IconButton onClick={handleCancel} style={{ color: "#2188D7" }}>
          <Cancel />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default DeleteContact;
