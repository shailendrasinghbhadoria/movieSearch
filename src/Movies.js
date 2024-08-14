import React, { useContext } from "react";
import { AppContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Movies() {
  const { movie } = useContext(AppContext);

  return (
    <>
      <section className="container movie-page">
        <div className="row">
          {movie.map((currMovie) => {
            const { imdbID, Title, Poster } = currMovie;
            console.log();
            return (
              <div className="col-sm-3 my-3 text-center">
                <NavLink to={`movie/${imdbID}`}>
                  <div className="card">
                    <h3>
                      {Title.length < 15 ? Title : Title.slice(0, 15) + "..."}
                    </h3>
                    <p>
                      <img src={Poster} alt={imdbID} />
                    </p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Movies;
