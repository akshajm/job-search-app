import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./JobsPanel.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Typography, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DetailedJob from "./DetailedJob";
import Moment from "react-moment";
import { loading_component as LoadingComponent } from "./loading_component";
import { useSelector, useDispatch } from "react-redux";
import {
  jobs,
  latitude,
  longitude,
  is_submitted,
  description,
  fulltime,
  location,
  error_occured,
  no_data,
  page,
} from "./actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    overflow: "visible",
    height: "100%",
    position: "relative",
    backgroundColor: theme.palette.primary.dark,
  },
  icon: {
    transform: "translatey( -90%)",
    zIndex: 2,
    borderRadius: 5,
  },
}));

const JobsPanel = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const current_latitude = useSelector((state) => state.latitude_reducer);
  const current_longitude = useSelector((state) => state.longitude_reducer);
  const current_page = useSelector((state) => state.page_reducer);
  const new_description = useSelector((state) => state.description_reducer);
  const new_location = useSelector((state) => state.location_reducer);
  const is_fulltime = useSelector((state) => state.fulltime_reducer);
  const is_submit = useSelector((state) => state.is_submitted_reducer);
  const if_error = useSelector((state) => state.error_occured_reducer);
  const if_no_data = useSelector((state) => state.no_data_reducer);

  const fetch_url =
    "https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json";
  // "https://jobs.github.com/positions.json";

  useEffect(() => {
    if (is_submit) {
      console.log(1);
      fetch(
        fetch_url +
          `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(
            `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
          );
          if (data.length === 0) {
            dispatch(no_data(true));
          } else {
            dispatch(no_data(false));
          }
          dispatch(jobs(data));
        })
        .catch(() => {
          dispatch(error_occured(true));
        });
    } else {
      if (current_latitude !== 0 && current_longitude !== 0) {
        console.log(2); // Check for initial click
        if (current_page === 1) {
          fetch(
            fetch_url + `?lat=${current_latitude}&long=${current_longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.length === 0) {
                dispatch(no_data(true));
              } else {
                dispatch(no_data(false));
              }
              // dispatch(jobs(data));
              console.log(
                `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
              );

              dispatch(jobs(data));
            })
            .catch(() => {
              dispatch(error_occured(true));
            });
        } else {
          console.log("AA");
          fetch(
            fetch_url +
              `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(
                data,
                `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
              );
              if (data.length === 0) {
                dispatch(no_data(true));
              } else {
                dispatch(no_data(false));
              }
              dispatch(jobs(data));
            })
            .catch(() => {
              dispatch(error_occured(true));
            });
        }
      }
    }
  }, [current_latitude, current_longitude, current_page]);

  useEffect(() => {
    if (is_submit) {
      console.log(3);
      fetch(
        fetch_url +
          `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            dispatch(no_data(true));
          } else {
            dispatch(no_data(false));
          }
          dispatch(jobs(data));
          dispatch(is_submitted(false));
          // dispatch(description(""));
          // dispatch(location(""));
        })
        .catch(() => {
          dispatch(error_occured(true));
        });
    }
  }, [is_submit]);

  const current_listings = useSelector((state) => state.job_reducer);

  return (
    <Router>
      <div className="job_listings">
        {if_error ? (
          <h2>
            Error occured while getting data from heroku app. Try hard reload.
          </h2>
        ) : if_no_data ? (
          <h2>No job listing found.</h2>
        ) : current_listings.length === 0 ? (
          // <div>
          //   <h3> Loading</h3> <CircularProgress />{" "}
          // </div>
          <LoadingComponent />
        ) : (
          current_listings.map((job, index) => (
            <div className="box_container" key={index}>
              <Link to={`${job.id}`} style={{ textDecoration: "none" }}>
                <Card className={classes.root}>
                  <CardContent>
                    <div className="avatar">
                      <Avatar
                        src={job.company_logo}
                        alt={job.company}
                        className={classes.icon}
                        variant="square"
                      ></Avatar>
                    </div>
                    <div className="card_content">
                      <div className="card_content_top">
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          gutterBottom
                        >
                          <Moment fromNow>{job.created_at}</Moment>
                          <span> •</span> {job.type}
                        </Typography>
                        <Typography variant="h6" component="h6">
                          {job.title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          {job.company}
                        </Typography>
                      </div>
                      <div className="location">
                        <Typography color="primary" gutterBottom>
                          {job.location}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))
        )}
      </div>
    </Router>
  );
};

export default JobsPanel;
