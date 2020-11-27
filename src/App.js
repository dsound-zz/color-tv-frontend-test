import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "./app/components/Search";
import UserProfile from "./app/components/UserProfile";
import Image from "./app/components/Image";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <h1 className="title">Unsplash Seaerch</h1>
          <Switch>
            <Route path="/" component={Search} exact>
              <Search />
            </Route>
            <Route path="/userProfile" component={UserProfile} exact>
              <UserProfile />
            </Route>
            <Route path="/image" component={Image} exact>
              <Image />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
