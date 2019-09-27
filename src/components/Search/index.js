import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Search = () => (
  <div className="row justify-content-center mt-3">
    <div className="col-6">
      <form className="form-inline">
        <input
          type="text"
          className="form-control w-75 ml-2"
          id="search-field"
          placeholder="Type GitHub username..."
        />

        <button className="btn btn-outline-success px-2 ml-2 w-1" id="btn-go">
          <Link
            to="/user"
            className="text-decoration-none font-weight-normal text-success"
          >
            GO
          </Link>
        </button>
      </form>
    </div>
  </div>
);

export default Search;
