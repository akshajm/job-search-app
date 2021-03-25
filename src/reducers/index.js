import description_reducer from "./description.js";
import fulltime_reducer from "./fulltime.js";
import latitude_reducer from "./latitude.js";
import longitude_reducer from "./longitude.js";
import location_reducer from "./location.js";
import job_reducer from "./all_jobs.js";
import is_submitted_reducer from "./is_submitted.js";
import error_occured_reducer from "./error_occured.js";
import no_data_reducer from "./no_data.js";
import dark_mode_reducer from "./dark_mode.js";
import detailed_job_reducer from "./detailed_job.js";

import { combineReducers } from "redux";

const root_reducer = combineReducers({
  description_reducer,
  fulltime_reducer,
  location_reducer,
  job_reducer,
  latitude_reducer,
  longitude_reducer,
  is_submitted_reducer,
  error_occured_reducer,
  no_data_reducer,
  dark_mode_reducer,
  detailed_job_reducer,
});

export default root_reducer;
