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
      return state.flocks.filter((f) => f.id !== action.payload.id);
    // let flocks = state.flocks.map((flock) => {
    //   if (flock.id === action.payload.id) {
    //     return action.payload;
    //   } else {
    //     return flock;
    //   }
    // });
    // return { ...state, flocks: flocks };
    default:
      return state;
  }
}
