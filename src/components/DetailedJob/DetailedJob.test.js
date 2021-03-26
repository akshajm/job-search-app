import React from "react";
import { DARK_BLUE, LIGHT_GREY } from "../../utils/colors";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-react";
import DetailedJob from "./DetailedJob";
import { shallow, configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "test",
  }),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: (callback) =>
    callback({
      detailed_job_reducer: {},
      dark_mode_reducer: true,
    }),
  useDispatch: () => () => {},
}));

describe("Detailed components", () => {
  it("Check if background color matches dark mode color", () => {
    const detailed_job = shallow(<DetailedJob />);
    const detailed_job_style = detailed_job.get(0).props.style;
    expect(detailed_job_style).toHaveProperty("backgroundColor", DARK_BLUE);
  });
});
