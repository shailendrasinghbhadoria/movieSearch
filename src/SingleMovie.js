import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Api_Url } from "./context";

function SingleMovie() {
  //const history = useHistory()
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const { imdbID, Title, Poster } = movie;

  const getMovieData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data) {
        setIsLoading(false);
        setMovie(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovieData(`${Api_Url}&i=${id}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <section className="single-moviePage">
          <div className="card">
            <h2>{Title}</h2>
            <p>
              <img src={Poster} alt={imdbID} />
            </p>
            <p>IMDB Ratings: {movie.Ratings[0].Value}</p>
            <p>Director: {movie.Director}</p>
            <NavLink to="/">Back</NavLink>
          </div>
        </section>
      )}
    </>
  );
}

export default SingleMovie;
