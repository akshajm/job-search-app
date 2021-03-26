import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Avatar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import "./Header.css";
import "./DetailedJob.css";
import Switch from "@material-ui/core/Switch";
import Moment from "react-moment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useSelector, useDispatch } from "react-redux";
import { loading_component as LoadingComponent } from "../../utils/loading_component";
import { dark_mode, detailed_data } from "../../actions/index";
import {
  DARK_BLUE,
  LIGHT_GREY,
  PURPLE,
  WHITE,
  LIGHT_BLUE,
} from "../../utils/colors";

const DetailedJob = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  const description = useSelector((state) => state.detailed_job_reducer);
  const current_dark_mode = useSelector((state) => state.dark_mode_reducer);

  const waiting_for_data = Object.keys(description).length === 0 ? true : false;

  const on_dark_mode_change = () => {
    dispatch(dark_mode());
  };

  useEffect(() => {
    fetch(
      `https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions/${id}.json?markdown=true`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(detailed_data(data));
      });
  }, []);
  return (
    <div
      className="detailed_page"
      style={
        current_dark_mode
          ? { backgroundColor: DARK_BLUE }
          : { backgroundColor: LIGHT_GREY }
      }
    >
      {waiting_for_data ? (
        <div className="center_loader">
          <LoadingComponent />
        </div>
      ) : (
        <div>
          <div className="detailed_header">
            <div className="title_bar_detailed">
              <div className="website_name_detailed">
                <h3>devjobs</h3>
              </div>
              <div className="night_mode_button_detailed">
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
            <div className="overview_card">
              <Card
                style={
                  current_dark_mode
                    ? { backgroundColor: LIGHT_BLUE }
                    : { backgroundColor: WHITE }
                }
              >
                <div className="header_elements">
                  <div className="logo">
                    <Avatar
                      src={description.company_logo}
                      alt={description.company}
                      variant="square"
                    ></Avatar>
                  </div>

                  <div className="job_details">
                    <div
                      className="header_detailes"
                      style={
                        current_dark_mode
                          ? { color: WHITE }
                          : { color: "black" }
                      }
                    >
                      <p>{description.company}</p>
                    </div>
                    <div
                      className="company_name"
                      style={
                        current_dark_mode
                          ? { color: WHITE }
                          : { color: "black" }
                      }
                    >
                      <p>{description.company}</p>
                    </div>
                  </div>
                  <div className="company_site_button">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: PURPLE }}
                    >
                      Company site
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="main_detailes">
            <div className="main_detail">
              <Card
                style={
                  current_dark_mode
                    ? { backgroundColor: LIGHT_BLUE }
                    : { backgroundColor: WHITE }
                }
              >
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={
                      current_dark_mode
                        ? { color: "rgb(255, 255, 255, 0.5)" }
                        : { color: "rgb(0, 0, 0, 0.9)" }
                    }
                    gutterBottom
                  >
                    <Moment fromNow>{description.created_at}</Moment>
                    <span> •</span> {description.type}
                  </Typography>
                  <div className="split_requirements">
                    <div
                      className="title"
                      style={
                        current_dark_mode
                          ? { color: WHITE }
                          : { color: LIGHT_BLUE }
                      }
                    >
                      <Typography variant="h6" component="h6">
                        {description.title}
                      </Typography>
                    </div>
                    <div className="apply_now_button">
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: PURPLE }}
                      >
                        Apply now
                      </Button>
                    </div>
                  </div>
                  <Typography color="primary" gutterBottom>
                    {description.location}
                  </Typography>
                  <p
                    style={
                      current_dark_mode
                        ? { color: "rgb(255, 255, 255, 0.5)" }
                        : { color: "rgb(0, 0, 0, 0.9)" }
                    }
                  >
                    {description.description}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="how_to_apply">
              <Card style={{ backgroundColor: PURPLE, color: WHITE }}>
                <CardContent>
                  <Typography variant="h6" component="h6" gutterBottom>
                    How to Apply
                  </Typography>
                  <p>{description.how_to_apply}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedJob;
