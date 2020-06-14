import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "120px",
  padding: "12px",
  margin: "0 3px 3px",
  background: "navy",
  textDecoration: "none",
  color: "white",
  borderRadius: "4px",
  float: "right",
  textAlign: "center",
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/flocks"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          My Flocks
        </NavLink>
        <NavLink
          to="/flocks/new"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Add New Flock
        </NavLink>
        {/* <NavLink
          to="/flock/:id/"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink> */}
      </div>
    );
  }
}

export default Navbar;
