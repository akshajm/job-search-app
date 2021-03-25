import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Homepage.css";
import JobsPanel from "./JobsPanel";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { PURPLE, WHITE, DARK_BLUE, LIGHT_BLUE, LIGHT_GREY } from "./colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  back: {
    backgroundColor: "#f0f0f0",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const light = createMuiTheme({
    type: "light",
    palette: {
      primary: {
        main: PURPLE,
        dark: WHITE,
      },
      secondary: {
        main: PURPLE,
        dark: LIGHT_GREY,
      },
    },
  });
  const dark = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: PURPLE,
        dark: LIGHT_BLUE,
      },
      secondary: {
        main: PURPLE,
        dark: DARK_BLUE,
      },
    },
  });
  const is_dark_mode = useSelector((state) => state.dark_mode_reducer);
  return (
    <ThemeProvider theme={is_dark_mode ? dark : light}>
      <div
        className="homepage"
        style={
          is_dark_mode
            ? { backgroundColor: DARK_BLUE }
            : { backgroundColor: LIGHT_GREY }
        }
      >
        <Header />
        <JobsPanel />
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
