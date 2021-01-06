import React from "react";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar(props) {
  // detecting Enter key press
  function handleSearch(e) {
    if (e.key === "Enter") {
      props.search();
    }
  }

  return (
    <div className="search-bar">
      <input placeholder="Search a movie you want to nominate" onKeyPress={handleSearch}></input>
      <button onClick={props.search}>
        <SearchIcon />
      </button>
    </div>
  );
}
export default SearchBar;
