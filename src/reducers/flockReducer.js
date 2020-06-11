export default function flockReducer(state = { flocks: [] }, action) {
  switch (action.type) {
    case "FETCH_FLOCKS":
      return { flocks: action.payload };
    default:
      return state;
  }
}
