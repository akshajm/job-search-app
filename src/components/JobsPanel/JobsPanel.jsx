import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./JobsPanel.css";
import { loading_component as LoadingComponent } from "../../utils/loading_component";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./JobCard";
import {
  jobs,
  is_submitted,
  error_occured,
  no_data,
} from "../../actions/index";

const JobsPanel = () => {
  const dispatch = useDispatch();
  const current_latitude = useSelector((state) => state.latitude_reducer);
  const current_longitude = useSelector((state) => state.longitude_reducer);
  const current_page = useSelector((state) => state.page_reducer);
  const new_description = useSelector((state) => state.description_reducer);
  const new_location = useSelector((state) => state.location_reducer);
  const is_fulltime = useSelector((state) => state.fulltime_reducer);
  const is_submit = useSelector((state) => state.is_submitted_reducer);
  const if_error = useSelector((state) => state.error_occured_reducer);
  const if_no_data = useSelector((state) => state.no_data_reducer);

  const base_url =
    "https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json";

  useEffect(() => {
    if (is_submit) {
      fetch(
        base_url +
          `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
      )
        .then((response) => response.json())
        .then((data) => {
          data.length === 0
            ? dispatch(no_data(true))
            : dispatch(no_data(false));

          dispatch(jobs(data));
        })
        .catch(() => {
          dispatch(error_occured(true));
        });
    } else {
      if (current_latitude !== 0 && current_longitude !== 0) {
        if (current_page === 1) {
          fetch(base_url + `?lat=${current_latitude}&long=${current_longitude}`)
            .then((response) => response.json())
            .then((data) => {
              data.length === 0
                ? dispatch(no_data(true))
                : dispatch(no_data(false));

              dispatch(jobs(data));
            })
            .catch(() => {
              dispatch(error_occured(true));
            });
        } else {
          fetch(
            base_url +
              `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
          )
            .then((response) => response.json())
            .then((data) => {
              data.length === 0
                ? dispatch(no_data(true))
                : dispatch(no_data(false));

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
      fetch(
        base_url +
          `?description=${new_description}&location=${new_location}&full_time=${is_fulltime}&page=${current_page}`
      )
        .then((response) => response.json())
        .then((data) => {
          data.length === 0
            ? dispatch(no_data(true))
            : dispatch(no_data(false));

          dispatch(jobs(data));
          dispatch(is_submitted(false));
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
          <LoadingComponent />
        ) : (
          current_listings.map((job, index) => (
            <JobCard job={job} index={index} />
          ))
        )}
      </div>
    </Router>
  );
};

export default JobsPanel;
