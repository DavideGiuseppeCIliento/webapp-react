// IMPORT ROUTER
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black p-3 ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand text-white" to="/">
            AppMovies
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active text-white" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link text-white" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link text-white" to="movies">
                Movies
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
