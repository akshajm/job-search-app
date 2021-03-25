const is_submitted_reducer = (state = false, action) => {
  switch (action.type) {
    case "IS_SUBMITTED": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default is_submitted_reducer;
