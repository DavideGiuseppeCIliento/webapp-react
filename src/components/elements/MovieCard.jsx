export default function MovieCard({ image, title, abstract, director, genre }) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt="Film-Image"
          />
        </div>
        <div className="col-md-8">
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
  );
}
