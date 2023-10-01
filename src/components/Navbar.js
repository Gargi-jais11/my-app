import React from 'react'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
<nav className="navbar navbar-expand-lg  bg-body-tertiary" data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link  className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a  className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutus}</Link> */}
          {/* <Link className="nav-link" to="/about">{props.aboutus}</Link> */}
          <a className="nav-link" href="#">{props.aboutus}</a>

        </li>
      </ul>
      
    </div>
    {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-primary" type="submit">Search</button>
    </form> */}
      <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox"   role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmFor="flexSwitchCheckDefault">DarkMode</label>
  </div>

  </div>
</nav>
  )
}

Navbar.propTypes={title:propTypes.string,
                       aboutus:propTypes.string}

Navbar.defaultProps={
    title:"set title here",
    aboutus:"About"
}