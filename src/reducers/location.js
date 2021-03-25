const location_reducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

export default location_reducer;
