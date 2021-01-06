import React, { useState } from "react";
import Results from "./Results";
import Nominations from "./Nominations";
import SearchBar from "./SearchBar";

const App = () => {
  // searching movie async function
  const searchMovie = async () => {
    try {
      // getting user input value
      const userInput = document.querySelector(".search-bar input").value;
      // creating API search key word
      const srchKey = userInput.split(" ").join("+");
      // fetching data from API
      const url = `http://www.omdbapi.com/?apikey=95a2114b&type=movie&s=${srchKey}`;
      const response = await fetch(url);
      const data = await response.json();
      // error handling movie not found
      if (data.Response === "False") throw new Error(data.Error);
      // adding search result to the results array
      setResults(data.Search);
    } catch (err) {
      alert(`${err} Please try another movie.`);
    }
  };

  // search results list
  const [results, setResults] = useState([]);
  // nominations list
  const [nominees, setNominees] = useState([]);
  // adding item to nominations list
  const nominateMovie = (newNom) => {
    // pop an alert if user wants to add more than 5 movies
    if (nominees.length >= 5) {
      setPopup(true);
    } else {
      setNominees((prevNom) => {
        return [...prevNom, newNom];
      });
    }
  };
  // removing item from nominations list
  const removeMovie = (id) => {
    setNominees((prevNom) => {
      return prevNom.filter((item, index) => index !== id);
    });
  };

  // for conditional rendering popup alert in results
  const [popup, setPopup] = useState(false);
  // close popup function
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="app-div">
      <h1>The Shoppies</h1>
      <SearchBar search={searchMovie} />
      <Results results={results} nominees={nominees} nominate={nominateMovie} popup={popup} closePopup={closePopup} />
      <Nominations nominees={nominees} remove={removeMovie} />
    </div>
  );
};

export default App;
