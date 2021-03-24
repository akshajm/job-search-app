import React, { Component } from "react";
import JobsPanel from "./JobsPanel";
import "./Header.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="night_mode_button">
          <Button variant="contained">Night Mode button</Button>
        </div>
        <div className="filter_box">
          <FormControl>
            <div className="search_box">
              <div className="description_input">
                <TextField
                  id="description"
                  placeholder="Filter by titles, companies, expertise..."
                />{" "}
                | <TextField id="location" placeholder="Filter by location" />
                {"  "} |
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label=" Full Time Only"
                  labelPlacement="end"
                />
              </div>
              <div className="submit_button">
                <Button type="submit" variant="contained">
                  Search
                </Button>
              </div>
            </div>
          </FormControl>
        </div>
      </div>
      //   </React.Fragment>
    );
  }
}

export default Header;
