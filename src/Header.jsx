import React, { useState, useEffect } from "react";

import JobsPanel from "./JobsPanel";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, FormControl } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  const classes = useStyles();
  const [check_box_value, set_check_box_value] = useState(false);
  const handle_check_box = () => {
    set_check_box_value(!check_box_value);
  };
  const get_form_data = () => {};
  const handle_submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("e", data);
    // alert("Here");
  };
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
                  checked={check_box_value}
                  onClick={handle_check_box}
                />
                <label for="full_time_roles">Full time only</label>
              </div>
              <div className="child_button">
                <Button
                  type="submit"
                  variant="contained"
                  // onClick={handle_submit}
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
