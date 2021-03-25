import description_reducer from "./description.js";
import fulltime_reducer from "./fulltime.js";
import latitude_reducer from "./latitude.js";
import longitude_reducer from "./longitude.js";
import location_reducer from "./location.js";
import job_reducer from "./all_jobs.js";
import is_submitted_reducer from "./is_submitted.js";

import { combineReducers } from "redux";

const root_reducer = combineReducers({
  description_reducer,
  fulltime_reducer,
  location_reducer,
  job_reducer,
  latitude_reducer,
  longitude_reducer,
  is_submitted_reducer,
});

export default root_reducer;
