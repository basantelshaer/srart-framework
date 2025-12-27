import"./Navbar.css"
import { NavLink } from "react-router-dom"
export default function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-main-color">
  <div className="container py-2">
    <NavLink className="navbar-brand fs-2 fw-bold text-white" to="/Home">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold text-uppercase" aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold text-uppercase" to="/Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold text-uppercase" to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}
