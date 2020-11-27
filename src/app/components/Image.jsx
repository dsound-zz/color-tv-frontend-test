import React from "react";
import { connect } from "react-redux";

const Image = (props) => {
  const { selectedPhotos } = props.photos

  return (
    <div>
        <img src={selectedPhotos.full} alt="selected"/>
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.selectedPhotos
  };
};

export default connect(mapStateToProps, null)(Image);
