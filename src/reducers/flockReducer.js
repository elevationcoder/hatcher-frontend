export default function flockReducer(state = { flocks: [] }, action) {
  switch (action.type) {
    case "FETCH_FLOCKS":
      return { flocks: action.payload };
    case "ADD_FLOCK":
      return { ...state, flocks: [...state.flocks, action.payload] };
    default:
      return state;
  }
}
