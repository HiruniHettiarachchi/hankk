import "./App.css";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Landingpage from "./components/landingpage/Landingpage";
import React from "react";
import { BrowserRouter as Router, Route, Switch , Link} from "react-router-dom";

function App() {
  return (
    <div className="navbar">
      <Router>
        <Link to="/landingpage"> Homepage </Link>
        <Link to="/signin"> Sign in </Link>
        <Link to="/signup"> Create an account </Link>
        <Switch>
          <Route path="/landingpage" component={Landingpage} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
