export default function bundleReducer(state = [], action) {
  // debugger;
  switch (action.type) {
    case "FETCH_BUNDLES":
      return action.payload;
    default:
      return state;
  }
}
