import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectPhotosAction } from "../actions/selectPhotosAction";

const UserProfile = (props) => {
  const { user, selectedPhotos } = props;

  const handleClick = (photos) => {
    selectedPhotos(photos);
  };

  return (
    <>
     
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
                  <Link onClick={() => handleClick(photo.urls)} to={"/image"}>
                    <img src={photo.urls.small} alt={idx} />
                  </Link>
                </div>
              );
            })}
        </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    selectedPhotos: (fullPhoto) => dispatch(selectPhotosAction(fullPhoto)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(UserProfile);
