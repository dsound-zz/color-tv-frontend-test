import React from "react";
import { Link } from "react-router-dom";
import { getUserAction } from "../actions/getUserAction";
import { connect } from "react-redux";
import "../../App.css";

const SearchResults = (props) => {
  console.log(props)
  const { results } = props.results.searches;
  const { getUser } = props;
  const handleClick = (result) => {
    getUser(result.username);
  };

  return (
    <>
      <div className="search-results">
        {results &&
          results.map((result, idx) => {
            return (
              <div>
                <Link
                  onClick={() => handleClick(result)}
                  to={"/userProfile"}
                  key={idx}
                >
                  <h3>{result.username}</h3>
                </Link>
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

export default connect(null, mapDispatchToProps)(SearchResults);
