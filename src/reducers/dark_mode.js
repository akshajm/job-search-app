const dark_mode_reducer = (state = false, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return !state;
    default:
      return state;
  }
};

export default dark_mode_reducer;
