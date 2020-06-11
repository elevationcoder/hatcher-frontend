export default function fetchFlocks() {
  return (dispatch) => {
    fetch("http://localhost:3001/flocks")
      .then((resp) => resp.json())
      .then((flock) =>
        dispatch({
          type: "FETCH_FLOCKS",
          payload: flock,
        })
      );
  };
}
