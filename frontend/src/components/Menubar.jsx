import { Link } from "react-router-dom";  // ✅ Make sure this is imported
import { assets } from '../assets/assets';
import './Menubar.css';

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <Link className="navbar-brand" to="/">
        <img src={assets.logo} alt="Logo" height="50" />
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/explore">Explore</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manage-items">Manage Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manage-category">Manage Categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manage-users">Manage Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
