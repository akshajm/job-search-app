import React from "react";
import { Link } from "react-router-dom";
import "./JobsPanel.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Avatar, Typography, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Moment from "react-moment";

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

const JobCard = (props) => {
  const job = props.job;
  const index = props.index;
  const classes = useStyles();

  return (
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
  );
};

export default JobCard;
