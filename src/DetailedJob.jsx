import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Avatar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./Header.css";
import "./DetailedJob.css";
import Moment from "react-moment";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: blue,
  },
  back: {
    backgroundColor: "#5865e0",
    color: "#ffffff",
  },
}));

const DetailedJob = () => {
  const classes = useStyles();
  let { id } = useParams();
  const [description, setDescription] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(
      `https://damp-taiga-98560.herokuapp.com/jobs.github.com/positions/${id}.json?markdown=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setDescription(data);
        console.log(data, "detailed");
      });
  }, []);
  return (
    <div className="detailed_job">
      <div className="header">
        <div className="header_child">
          <Card>
            <CardContent>
              <div className="header_elements">
                <div className="logo">
                  <Avatar
                    src={description.company_logo}
                    alt={description.company}
                    variant="square"
                  ></Avatar>
                </div>
                <div className="job_details">
                  <div className="header_detailes">
                    <p>{description.company}</p>
                  </div>
                  <div className="company_name">
                    <p>{description.company}</p>
                  </div>
                </div>
                <div className="company_site_button">
                  <Button variant="contained" color="primary">
                    Company site
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="main_details">
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <Moment fromNow>{description.created_at}</Moment>
              <span> •</span> {description.type}
            </Typography>
            <div className="split_requirements">
              <div className="title">
                <Typography variant="h6" component="h6">
                  {description.title}
                </Typography>
              </div>
              <div className="apply_now_button">
                <Button variant="contained" color="primary">
                  Apply now
                </Button>
              </div>
            </div>
            <Typography color="primary" gutterBottom>
              {description.location}
            </Typography>
            <p>{description.description}</p>
          </CardContent>
        </Card>
      </div>

      <div className="apply_now">
        <Card className={classes.card}>
          <CardContent className={classes.back}>
            <Typography variant="h6" component="h6" gutterBottom>
              How to Apply
            </Typography>
            <p>{description.how_to_apply}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetailedJob;
