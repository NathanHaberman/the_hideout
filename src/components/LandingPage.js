import React from "react";
// import { firebaseApp } from "../firebase";

import Login from "./Login";
import Register from "./Register";

class LandingPage extends React.Component {
  signIn = id => {
    localStorage.setItem("userId", id);
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="p-3">
        <div className="row ">
          <div className="col">
            <Login signIn={this.signIn} />
          </div>
          <div className="col">
            <Register signIn={this.signIn} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
