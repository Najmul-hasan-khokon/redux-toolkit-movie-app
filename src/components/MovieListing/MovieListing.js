import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { getAllMovies, getAllShows } from "../../features.js/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  const renderMovies =
    movies.Response === "True" &&
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />);

  const renderShows =
    shows.Response === "True" &&
    shows.Search.map((movieShow, index) => (
      <MovieCard key={index} data={movieShow} />
    ));

  return (
    <>
      {movies.Response === "True" || shows.Response === "True" ? (
        <div className="movie-wrapper">
          <div className="movie-list">
            <h2>Movies</h2>
            <div className="movie-container">
              <Slider {...Settings}>{renderMovies} </Slider>
            </div>
          </div>
          <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
              <Slider {...Settings}>{renderShows}</Slider>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ color: "blue", textAlign: "center", margin: "15px 0" }}>
          Loading...
        </div>
      )}
    </>
  );
};

export default MovieListing;

// {/* <div className="movie-wrapper">
// <div className="movie-list">
//   <h2>Movies</h2>

//   <div className="movie-container">
//     <Slider {...Settings}>{renderMovies} </Slider>
//   </div>
// </div>
// <div className="movie-list">
//   <h2>Shows</h2>
//   <div className="movie-container">
//     <Slider {...Settings}>{renderShows}</Slider>
//   </div>
// </div>
// </div> */}
