export default function fetchBundles() {
  return (dispatch) => {
    fetch("http://localhost:3001/egg_bundles")
      .then((resp) => resp.json())
      .then((bundle) =>
        dispatch({
          type: "FETCH_BUNDLES",
          payload: bundle,
        })
      );
  };
}
