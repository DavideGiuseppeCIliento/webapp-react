import RatingStars from "./RatingStars";

export default function ReviewCard({ name, text, vote }) {
  return (
    <div className="card h-100 mb-0" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title pb-2 border-bottom border-1">{name}</h5>
        {<RatingStars vote={vote} /> ?? "Nessun voto"}
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
