import JobCard from "./JobCard";
import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const mock_props = {
  id: "88db8053-9d94-4ede-834f-943610e28e94",
  type: "Full Time",
  url: "https://jobs.github.com/positions/88db8053-9d94-4ede-834f-943610e28e94",
  created_at: "Thu Mar 25 22:10:19 UTC 2021",
  company: "nar.realtor",
  company_url: "http://nar.realtor/careers",
  location: "Chicago, IL",
  title: "Senior Cybersecurity Analyst",
  description: "\u003cp\u003eOrgani",
  how_to_apply:
    "\u003cp\u003ePlease visit our website at nar.realtor/careers to apply\u003c/p\u003e\n",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFdlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cfa2639baaabb58db3ae125d20b8105eda2e1bd2/Who%20we%20R%20LOGO.png",
};

describe("Job card test", () => {
  const job_card = shallow(<JobCard job={mock_props} index={1} />);
  it("check if Job card is defined", () => {
    expect(job_card).toBeDefined();
  });

  it("check if Job card has link", () => {
    const is_link = job_card.find("Link");
    expect(is_link).toBeTruthy();
  });
});
