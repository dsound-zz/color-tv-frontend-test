import React, { useState } from "react";
import { connect } from "react-redux";
import { queryAction } from "../actions/queryAction";
import SearchResults from "./SearchResults";
import "../../App.css";

const Search = (props) => {
  const { queryAction } = props;
  const [query, setQuery] = useState("");

  const searchPhotos = (e) => {
    e.preventDefault();
    queryAction(query);
  };

  return (
    <>
      <h1 className="title">Unsplash Seaerch</h1>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Enter a Unsplash User...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <SearchResults results={props.searches} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searches: state.searches
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    queryAction: (entry) => dispatch(queryAction(entry)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
