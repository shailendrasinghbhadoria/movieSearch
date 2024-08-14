import React, { useContext } from "react";
import { AppContext } from "./context";
import Movies from "./Movies";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function Home() {
  const { movie, isLoading } = useContext(AppContext);
  console.log(movie);

  return (
    <>
      <Search />
      {isLoading ? <h2 className="text-center">Loading...</h2> : <Movies />}
    </>
  );
}

export default Home;
