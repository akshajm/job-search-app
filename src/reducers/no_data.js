const no_data_reducer = (state = false, action) => {
  switch (action.type) {
    case "NO_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default no_data_reducer;
