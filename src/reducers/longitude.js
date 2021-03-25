const longitude_reducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_LONGITUDE":
      return action.payload;
    default:
      return state;
  }
};

export default longitude_reducer;
