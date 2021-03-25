const detailed_job_reducer = (state = {}, action) => {
  switch (action.type) {
    case "DETAILED_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default detailed_job_reducer;
