import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Homepage.css";
import JobsPanel from "./JobsPanel";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <JobsPanel />
    </div>
  );
};

export default Homepage;
