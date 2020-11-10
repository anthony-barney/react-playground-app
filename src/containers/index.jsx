import React from "react";
import Drawer from "./Drawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2089dc",
    },
  },
});
export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Drawer />
      </Router>
    </ThemeProvider>
  );
}
