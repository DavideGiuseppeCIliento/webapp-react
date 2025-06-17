export default function Main({ children }) {
  return (
    <div className="container-fluid container-main d-flex">
      <div className="row">{children}</div>
    </div>
  );
}
