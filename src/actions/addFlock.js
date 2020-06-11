export const addFlock = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3001/flocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((flock) =>
        dispatch({
          type: "ADD_FLOCK",
          payload: flock,
        })
      );
  };
};
