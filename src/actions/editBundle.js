export const editBundle = (eggBundles, flockId) => {
  return (dispatch) => {
    console.log(flockId);
    fetch(`http://localhost:3001/flocks/${flockId}/egg_bundles`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flockId, eggBundles),
    })
      .then((resp) => resp.json())
      .then((editBundle) =>
        dispatch({
          type: "EDIT_BUNDLE",
          payload: editBundle,
        })
      );
  };
};
export default editBundle;
