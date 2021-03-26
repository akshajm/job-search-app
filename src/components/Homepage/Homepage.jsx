import React from "react";
import Header from "../Header/Header";
import "./Homepage.css";
import JobsPanel from "../JobsPanel/JobsPanel";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
  PURPLE,
  WHITE,
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_GREY,
} from "../../utils/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Pagination from "../../utils/Pagination";

const Homepage = () => {
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
  const current_listings = useSelector((state) => state.job_reducer);

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
        {current_listings.length === 50 && <Pagination />}
      </div>
    </ThemeProvider>
  );
};

export default Homepage;
