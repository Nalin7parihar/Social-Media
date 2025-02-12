import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
const Header = () => {
  return (
    <header className="p-3 text-bg-dark">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 text-white cursor-pointer">Home</Link></li>
        <li><Link to="/create-post" className="nav-link px-2 text-white cursor-pointer">Create Post</Link></li>
        <li><a href="#" className="nav-link px-2 text-white cursor-pointer">Profile</a></li>
        <li><a href="#" className="nav-link px-2 text-white cursor-pointer">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 text-white cursor-pointer">About</a></li>
      </ul>
      <SearchBar/>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2">Login</button>
        <button type="button" className="btn btn-warning">Sign-up</button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header
