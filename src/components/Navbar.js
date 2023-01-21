import React from 'react'
import PropTypes from 'prop-types'
// import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link" aria-current="page">{props.sec}</a>
              </li>
              <li className="nav-item">
                <a href='/about' className="nav-link" >{props.thi}</a>
              </li>
            </ul>

          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable' : 'Disable'} DarkMode</label>
          </div>
        </div>
      </nav>
    </>

  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  sec: PropTypes.string.isRequired,
  thi: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  sec: 'set link here',
  thi: 'set docs here'
}