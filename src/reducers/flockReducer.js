export default function flockReducer(state = [], action) {
  // debugger;
  switch (action.type) {
    case "FETCH_FLOCKS":
      return action.payload;
    case "ADD_FLOCK":
      return [...state, action.payload];
    case "ADD_BUNDLE":
      return state.map((flock) => {
        if (flock.id === action.payload.flock_id) {
          return {
            ...flock,
            egg_bundles: [...flock.egg_bundles, action.payload],
          };
        } else {
          return flock;
        }
      });
    case "DELETE_BUNDLE":
      // debugger;
      return state.map((flock) => {
        if (flock.id === action.payload.id) {
          return action.payload;
        } else {
          return flock;
        }
      });
    default:
      return state;
  }
}
