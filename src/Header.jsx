import React, { useState, useEffect } from "react";

import JobsPanel from "./JobsPanel";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, FormControl } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { PURPLE, WHITE, DARK_BLUE, LIGHT_BLUE, LIGHT_GREY } from "./colors";
import {
  description,
  fulltime,
  location,
  latitude,
  longitude,
  is_submitted,
  jobs,
  dark_mode,
} from "./actions/index";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  //Redux
  const dispatch = useDispatch();

  const on_description_change = (e) => {
    let value = e.target.value;
    dispatch(description(value));
  };

  const on_fulltime_change = () => {
    dispatch(fulltime());
  };

  const on_location_change = (e) => {
    dispatch(location(e.target.value));
  };

  const handle_form_submit = (e) => {
    e.preventDefault();
    dispatch(jobs([]));
    dispatch(is_submitted(true));
  };

  const get_current_position = (position) => {
    dispatch(latitude(position.coords.latitude));
    dispatch(longitude(position.coords.longitude));
  };

  const on_dark_mode_change = () => {
    dispatch(dark_mode());
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(get_current_position);
    } else {
      alert("Something went wrong getting location");
    }
  }, []);

  const current_fulltime = useSelector((state) => state.fulltime_reducer);
  const current_description = useSelector((state) => state.description_reducer);
  const current_location = useSelector((state) => state.location_reducer);
  const current_dark_mode = useSelector((state) => state.dark_mode_reducer);
  const classes = useStyles();

  return (
    <div className="header">
      <div className="title_bar">
        <div className="website_name">
          <h3>devjobs</h3>
        </div>
        <div className="night_mode_button">
          <FormControl>
            <FormControlLabel
              value="Dark Mode"
              control={
                <Switch
                  color="default"
                  checked={current_dark_mode}
                  onChange={() => on_dark_mode_change()}
                />
              }
              label="Dark Mode"
              labelPlacement="end"
            />
          </FormControl>
        </div>
      </div>

      <div className="filter">
        <form>
          <Card>
            <div
              className="main_filter"
              style={
                current_dark_mode
                  ? { backgroundColor: LIGHT_BLUE }
                  : { backgroundColor: WHITE }
              }
            >
              <div className="child_title">
                <TextField
                  id="description"
                  placeholder="Title, description..."
                  value={current_description}
                  onChange={(e) => on_description_change(e)}
                  // onChange={() => }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </div>
              <div className="child_location">
                <TextField
                  id="location"
                  placeholder="Location"
                  onChange={(e) => on_location_change(e)}
                  value={current_location}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="child_fulltime">
                <input
                  type="checkbox"
                  id="fulltime"
                  name="fulltime"
                  checked={current_fulltime}
                  onChange={() => on_fulltime_change()}
                />
                <label for="full_time_roles">Full time only</label>
              </div>
              <div className="child_button">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={(e) => handle_form_submit(e)}
                  style={{ backgroundColor: PURPLE }}
                >
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Header;
