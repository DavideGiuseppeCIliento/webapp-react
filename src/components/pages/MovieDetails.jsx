// # IMPORT HOOK
import { useEffect, useState } from "react";

// # IMPORT ROUTER
import { useParams } from "react-router-dom";

// # IMPORT AXIOS
import axios from "axios";

// # IMPORT COMPONENTS
import ReviewCard from "../elements/ReviewCard";

export default function MovieDetalis() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  function APIRequest() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const data = res.data;
      console.log(data);

      setMovie(data);
      setReviews(data.reviews);
      console.log(data.reviews);
    });
  }

  useEffect(() => {
    APIRequest();
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row align-items-center g-4">
          {/* Colonna immagine */}
          <div className="col-md-6 text-center">
            <img
              src={movie.image}
              alt={movie.title}
              className="img-fluid rounded shadow image-details"
            />
          </div>

          {/* Colonna testo */}
          <div className="col-md-6 text-light">
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
                Vote: {parseInt(movie.verage_vote) ?? "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <h3 className="pb-2 text-white">Recensioni</h3>
          </div>
        </div>
        <div className="row g-4 mt-3 text-white row-cols-1 row-cols-sm-2 row-cols-md-4">
          {reviews.map((review) => {
            return (
              <div className="col mb-4 " key={review.id}>
                <ReviewCard
                  name={review.name}
                  text={review.text}
                  vote={review.vote}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container p-5">
        <div className="row text-white">
          <h3 className="pb-4">Aggiungi una Recensione</h3>
        </div>
      </div>
    </>
  );
}
