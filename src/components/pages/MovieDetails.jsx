// # IMPORT HOOK
import { useEffect, useState } from "react";

// # IMPORT ROUTER
import { useParams } from "react-router-dom";

// # IMPORT AXIOS
import axios from "axios";

export default function MovieDetalis() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  function APIRequest() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const data = res.data;
      console.log(data);
      setMovie(data);
    });
  }

  useEffect(() => {
    APIRequest();
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        {/* Colonna immagine */}
        <div className="col-md-5 text-center">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow image-details"
          />
        </div>

        {/* Colonna testo */}
        <div className="col-md-7 text-light">
          <h2 className="fw-bold">{movie.title}</h2>
          <p className="mb-1 text-uppercase text-secondary">
            Directed by{" "}
            <span className="text-white fw-semibold">{movie.director}</span>
          </p>
          <p className="lead">{movie.abstract}</p>

          <div className="d-flex gap-3 mt-4">
            <span className="badge bg-primary fs-6">
              Year: {movie.release_year}
            </span>
            <span className="badge bg-warning text-dark fs-6">
              Vote: {movie.verage_vote ?? "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
