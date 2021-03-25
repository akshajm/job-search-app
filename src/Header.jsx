import React, { useState, useEffect } from "react";

import JobsPanel from "./JobsPanel";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, FormControl } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useSelector, useDispatch } from "react-redux";
import {
  description,
  fulltime,
  location,
  latitude,
  longitude,
  is_submitted,
  jobs,
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
    // const new_description = useSelector((state) => state.description_reducer);
    // const new_location = useSelector((state) => state.location_reducer);
    // const is_fulltime = useSelector((state) => state.fulltime_reducer);
    // console.log(new_description, new_location, is_fulltime);
    // let temp = useSelector(state => state.)
    // let temp = useSelector(state => state.)
  };

  const get_current_position = (position) => {
    dispatch(latitude(position.coords.latitude));
    dispatch(longitude(position.coords.longitude));
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
  const classes = useStyles();
  return (
    <div className="header">
      <div className="night_mode_button">
        <Button variant="contained">Night Mode button</Button>
      </div>
      <div className="filter">
        <form>
          <Card className={classes.padd}>
            <div className="main_filter">
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
                  onClick={(e) => handle_form_submit(e)}
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
