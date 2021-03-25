const error_occured_reducer = (state = false, action) => {
  switch (action.type) {
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};

export default error_occured_reducer;
