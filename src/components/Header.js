import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import useData from '../hooks/useData';

const Header = () => {
  const { user, logoutUser } = useAuth();
  const { search, setSearch } = useData();
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
    document.querySelector('.navbar-toggler').classList.toggle('is-active');
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    console.log('SEARCH ==> ', event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-lg-5">
        <a className="navbar-brand px-4 py-2" href="/">NightLife</a>
        <button 
          className={`navbar-toggler ${isNavOpen ? 'is-active' : ''} py-2`} 
          type="button" 
          onClick={handleNavToggle}
        >
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </button>
        <div 
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">All Parties</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/parties/create">Create Party</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            
            <li className="nav-item">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control me-lg-1 search-input"
                  placeholder="Search Parties"
                  value={search}
                  onChange={handleSearchChange}
                />
                
              </div>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={logoutUser}>Log Out</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Log In</a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link" href="/register">Register</a>
                </li>
              </>
            )}
            
          </ul>
        </div>
      </nav>
    </>
  )
};

export default Header;