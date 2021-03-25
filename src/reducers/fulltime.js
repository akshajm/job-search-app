const fulltime_reducer = (state = false, action) => {
  switch (action.type) {
    case "IS_FULLTIME": {
      return !state;
    }
    default:
      return state;
  }
};

export default fulltime_reducer;
