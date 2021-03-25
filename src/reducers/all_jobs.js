const job_reducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export default job_reducer;
