import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Image = props => {
    console.log(props)
    return (
        <div>
        
        </div>
    );
}

const mapStateToProps = state => {
    return {
        fullPhoto: state.fullPhoto
    }
}

export default withRouter(connect(mapStateToProps, null)(Image));
