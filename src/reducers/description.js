const description_reducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return action.payload;
    default:
      return state;
  }
};

export default description_reducer;
