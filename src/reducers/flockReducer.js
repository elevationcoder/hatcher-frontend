export default function flockReducer(state = { flocks: [] }, action) {
  // debugger;
  switch (action.type) {
    case "FETCH_FLOCKS":
      return { flocks: action.payload };
    case "ADD_FLOCK":
      return { ...state, flocks: [...state.flocks, action.payload] };
    case "ADD_BUNDLE":
      let flock = state.flocks.map((flock) => {
        if (flock.id === action.payload.id) {
          return action.payload;
        } else {
          return flock;
        }
      });
      return { ...state, flocks: flock };
    case "DELETE_BUNDLE":
      // debugger;
      let flocks = state.flocks.map((flock) => {
        if (flock.id === action.payload.id) {
          return action.payload;
        } else {
          return flock;
        }
      });
      return { ...state, flocks: flocks };
    default:
      return state;
  }
}
