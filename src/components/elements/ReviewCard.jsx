export default function ReviewCard({ name, text, vote }) {
  return (
    <div className="card h-100 mb-0" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{vote}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
