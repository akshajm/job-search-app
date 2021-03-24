import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./JobsPanel.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Typography, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DetailedJob from "./DetailedJob";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    overflow: "visible",
    height: "100%",
    position: "relative",
  },
  icon: {
    transform: "translatey( -90%)",
    zIndex: 2,
    borderRadius: 5,
  },
}));

const JobsPanel = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(
      "https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions.json?description=python&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);
  return (
    <Router>
      <div className="job_listings">
        {jobs.map((job, index) => (
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
        ))}
      </div>
    </Router>
  );
};

export default JobsPanel;
