import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import Image from "./Image";

const UserProfile = (props) => {
  const { user } = props;
  const [photo, getPhoto] = useState("");
  console.log(photo);
  const handleClick = (e, selectedPhoto) => {
    e.preventDefault();
    return getPhoto(selectedPhoto);
  };

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
                <div key={idx} className="photo">
                  <Link
                    to={"/image"}
                    onClick={(e) => handleClick(e, photo.urls.full)}
                  >
                    <img src={photo.urls.small} alt={idx} />
                  </Link>
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

export default connect(mapStateToProps, null)(UserProfile);
