import { Grid, IconButton, InputBase } from "@mui/material";
import "./message.css";
import { Send } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage, setTypingValue } from "../actions/actions";

const Message = ({ value }) => {
  const typing = useSelector((state) => state.typing);
  const activeUserId = useSelector((state) => state.activeUserId);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = (e) => {
    dispatch(sendMessage(typing, activeUserId, value));
  };
  return (
    <Grid container className="message">
      <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
        <InputBase
          fullWidth
          placeholder="Enter message"
          sx={{
            color: "inherit",
            background: "black",
            borderRadius: "0.4rem",
            padding: "0.4rem",
          }}
          value={value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className="send">
        <IconButton sx={{ color: "inherit" }} onClick={handleSubmit}>
          <Send />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Message;
