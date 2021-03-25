const page_reducer = (state = 1, action) => {
  switch (action.type) {
    case "UPDATE_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export default page_reducer;
