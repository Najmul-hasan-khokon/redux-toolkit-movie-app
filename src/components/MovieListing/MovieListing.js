import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features.js/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" &&
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />);

  renderShows =
    shows.Response === "True"
      ? shows.Search.map((movieShow, index) => (
          <MovieCard key={index} data={movieShow} />
        ))
      : "failed to fetch data!";

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
