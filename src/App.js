import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Search from "./app/components/Search";
import UserProfile from "./app/components/UserProfile";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Switch>
            <Route
              path="/"
              component={Search}
              exact
              render={(routerProps) => <Search {...routerProps} />}
            />
            
            <Route
              path="/userProfile"
              component={UserProfile}
              render={(routerProps) => <UserProfile {...routerProps} />}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default withRouter(App);
