import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features.js/movieSlice";
import user from "../../images/user.png";
import "../Header/Header.scss";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();

    if (searchText === "") {
      alert("please search any movie");
    } else {
      dispatch(fetchAsyncMovies(searchText));
      dispatch(fetchAsyncShows(searchText));
      setSearchText("");
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      {/* search */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="search anything here"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
