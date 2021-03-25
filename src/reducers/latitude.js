const latitude_reducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_LATITUDE":
      return action.payload;
    default:
      return state;
  }
};

export default latitude_reducer;
