import React, { useContext } from "react";
import { AppContext } from "./context";

function Search() {
  const { query, setQuery, isError } = useContext(AppContext);

  return (
    <>
      <div className="container text-center my-5">
        <h2 className="pb-2">Search your favourate Movie</h2>
        <form
          action="#"
          className="searchForm"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="search"
            value={query}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="text-danger text-center">
        <p>{isError.show && isError.msg}</p>
      </div>
    </>
  );
}

export default Search;
