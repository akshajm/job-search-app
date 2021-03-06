export const description = (str) => {
  return {
    type: "UPDATE_DESCRIPTION",
    payload: str,
  };
};

export const fulltime = () => {
  return {
    type: "IS_FULLTIME",
  };
};

export const location = (location) => {
  return {
    type: "UPDATE_LOCATION",
    payload: location,
  };
};

export const latitude = (latitude) => {
  return {
    type: "UPDATE_LATITUDE",
    payload: latitude,
  };
};

export const longitude = (longitude) => {
  return {
    type: "UPDATE_LONGITUDE",
    payload: longitude,
  };
};

export const jobs = (jobs) => {
  return {
    type: "UPDATE_JOBS",
    payload: jobs,
  };
};

export const is_submitted = (is_submitted) => {
  return {
    type: "IS_SUBMITTED",
    payload: is_submitted,
  };
};

export const error_occured = (error) => {
  return {
    type: "ERROR",
    payload: error,
  };
};

export const no_data = (is_data) => {
  return {
    type: "NO_DATA",
    payload: is_data,
  };
};

export const dark_mode = () => {
  return {
    type: "DARK_MODE",
  };
};

export const detailed_data = (data) => {
  return {
    type: "DETAILED_DATA",
    payload: data,
  };
};

export const page = (page) => {
  return {
    type: "UPDATE_PAGE",
    payload: page,
  };
};
