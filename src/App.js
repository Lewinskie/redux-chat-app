import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { Grid } from "@mui/material";
import "./app.css";

function App() {
  return (
    <Grid container className="appContainer">
      <Grid className="sidebarWrapper" item xs={12} sm={4} md={3} lg={3} xl={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={0} sm={8} md={9} lg={9} xl={9} className="mainWrapper">
        <Main />
      </Grid>
    </Grid>
  );
}

export default App;
