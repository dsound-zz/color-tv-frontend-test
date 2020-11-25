import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink, Route, Switch } from "react-router-dom";
import Image from "./Image";

const UserProfile = (props) => {
  const { user } = props;

  const [photo, getPhoto] = useState("");

  return (
    <>
      <div className="user-prfile">
        <div className="username">{user && user.username}</div>
        <img
          className="profile-image"
          src={user.profile_image && user.profile_image.large}
          alt="profile"
        />
        <div className="photo-container">
          {user.photos &&
            user.photos.map((photo, idx) => {
              return (
                <div className="photo">
                  <NavLink
                    to={"/image"}
                    onClick={() => getPhoto(photo.urls.full)}
                  >
                    <img key={idx} src={photo.urls.small} alt={idx} />
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
      <Switch>
      <Route path="/image" component={Image}>
        <Image photo={photo} />
      </Route>
    </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.getUser.user,
  };
};

export default withRouter(connect(mapStateToProps, null)(UserProfile));
