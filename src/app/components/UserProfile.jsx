import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

import { selectPhotoAction } from "../actions/selectPhotoAction";

const UserProfile = (props) => {
  const { user, selectedPhoto } = props;

  const handleClick = (e, fullPhoto) => {
    e.preventDefault();
    selectedPhoto(fullPhoto);
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
                  <NavLink
                    to={"/image"}
                    onClick={(e) => handleClick(e, photo.urls.full)}
                  >
                    <img src={photo.urls.small} alt={idx} />
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.getUser.user,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    selectedPhoto: (fullPhoto) => dispatch(selectPhotoAction(fullPhoto)),
  };
};

export default withRouter(
  connect(mapStateToProps, dispatchStateToProps)(UserProfile)
);
