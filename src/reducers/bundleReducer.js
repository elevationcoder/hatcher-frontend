export default function bundleReducer(state = { egg_bundles: [] }, action) {
  // debugger;
  switch (action.type) {
    case "FETCH_BUNDLES":
      return { bundles: action.payload };
    default:
      return state;
  }
}
