// # IMPORT HOOK
import { useEffect, useState } from "react";

// # IMPORT ROUTER
import { useParams } from "react-router-dom";

// # IMPORT AXIOS
import axios from "axios";

// # IMPORT COMPONENTS
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  function APIRequest() {
    axios.get("http://localhost:3000/movies").then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      setMovies(data);
    });
  }

  useEffect(() => {
    APIRequest();
  }, []);

  return (
    <div className="container p-5 ">
      <div className="row g-4">
        {movies.map((movie) => {
          return (
            <div className="col-12 col-md-4 " key={movie.id}>
              <MovieCard
                id={movie.id}
                image={movie.image}
                title={movie.title}
                abstract={movie.abstract}
                director={movie.director}
                genre={movie.genre}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
