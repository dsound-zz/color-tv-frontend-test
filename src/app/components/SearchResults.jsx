import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { getUserAction } from "../actions/getUserAction";
import { connect } from "react-redux";
import "../../App.css";

const SearchResults = (props) => {
  const { results } = props.results.searches;
  const { getUser } = props;

  const handleClick = (result) => {
    console.log(result);
    getUser(result.username);
  };

  return (
    <>
      <div className="results-container">
        {results &&
          results.map((result, idx) => {
            return (
              <div className="results">
                <NavLink
                  onClick={() => handleClick(result)}
                  to={"/userProfile"}
                  key={idx}
                >
                  <h3>{result.username}</h3>
                </NavLink>
              </div>
            );
          })}
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (query) => dispatch(getUserAction(query)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchResults));
