export const addBundle = (eggBundles, flockId) => {
  return (dispatch) => {
    console.log(flockId);
    fetch(`http://localhost:3001/flocks/${flockId}/egg_bundles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eggBundles, flockId),
    })
      .then((resp) => resp.json())
      .then((bundle) =>
        dispatch({
          type: "ADD_BUNDLE",
          payload: bundle,
        })
      );
  };
};
export default addBundle;
