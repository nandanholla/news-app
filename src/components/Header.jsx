import { Link } from 'react-router-dom'

export default function Header() {

  const toggleButton = () => {
    const search = document.getElementById('search-bar')
    const navLinks = document.getElementById('nav-links')
    if (search.classList.contains('d-none') && navLinks.classList.contains('d-none')) {
      search.classList.replace('d-none', 'd-block')
      navLinks.classList.replace('d-none', 'd-flex')
    }
    else {
      search.classList.replace('d-block', 'd-none')
      navLinks.classList.replace('d-flex', 'd-none')
    }
  }

  return (
    <header>
      <nav className="navbar d-flex justify-content-between align-content-center shadow position-fixed min-vw-100 py-3 px-3 px-md-5">

        {/* brand logo */}
        <div className="navbar__logo order-1 d-lg-block">
          <h1 className="navbar__logo-title h5 fw-bold m-0">News Zone</h1>
        </div>

        {/* toggle button */}
        <div className="navbar__toggle d-lg-none d-block order-2 order-lg-2" onClick={toggleButton}>
          <i className="bi bi-list fs-4"></i>
        </div>

        {/* searchbar */}
        <div className="navbar__search justify-content-end align-items-center order-3 order-lg-4 d-lg-block d-none" id="search-bar">
          <div className="input-box">
            <input type="text" placeholder='Search...' className="form-control" />
            <i className="fa fa-search"></i>
          </div>
        </div>

        {/* nav links */}
        <ul className="navbar__menu list-unstyled p-0 d-lg-flex d-none justify-content-center align-items-center m-0 mt-3 mt-lg-0 order-4 order-lg-3" id="nav-links" onClick={toggleButton}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/new'>Latest</Link></li>
          <li><Link to='/top'>Top Stories</Link></li>
          <li><Link to='/best'>Best Stories</Link></li>
        </ul>
      </nav>
    </header>
  )
}
