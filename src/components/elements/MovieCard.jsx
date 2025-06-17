import { Link, useNavigate, useParams } from "react-router-dom";

export default function MovieCard({
  id,
  image,
  title,
  abstract,
  director,
  genre,
}) {
  return (
    <Link to={`/movies/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 mb-0" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={image}
              className="img-fluid rounded-start"
              alt="Film-Image"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{abstract}</p>
              <p className="card-text fw-bold	">{director}</p>
              <p className="card-text">
                <small className="text-body-secondary">{genre}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
