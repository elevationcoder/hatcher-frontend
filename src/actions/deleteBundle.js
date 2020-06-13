export const deleteBundle = (bundleId, flockId) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/flocks/${flockId}/egg_bundles/${bundleId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "DELETE_BUNDLE",
          payload: data,
        })
      );
  };
};
export default deleteBundle;
