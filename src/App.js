import SearchMovie from "./Components/SearchMovie";
import Movies from "./Components/Movies";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = `http://www.omdbapi.com/?apikey=a671825fc&`;

function App() {
  const [movies, setMovies] = useState([]);

  const callApi = async (name) => {
    let res = await axios.get(`${URL}s=${name}`);
    console.log(res);
    if (res.status === 200) {
      setMovies(res.data.Search);
    }
  };

  return (
    <>
      <SearchMovie onClick={callApi}></SearchMovie>
      <Movies movies={movies}></Movies>
    </>
  );
}

export default App;
