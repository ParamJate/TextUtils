import React from 'react'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid" >
    <a className={`navbar-brand text-${props.mode==='light'?'black':'light'}`} href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-a active text-${props.mode==='light'?'black':'light'}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-a text-${props.mode==='light'?'black':'light'}`} href="#">{props.aboutText}</a>
        </li>
      </ul>
      <div className="radio-mode">  
        <input type="radio" className="btn-check" onClick={props.lightMode} name="options-outlined" id="success-outlined"/>
        <label className="btn btn-outline-primary" htmlFor="success-outlined">Light Mode</label> 
        <input type="radio" className="btn-check" onClick={props.darkMode} name="options-outlined" id="danger-outlined" />
        <label className="btn btn-outline-primary" htmlFor="danger-outlined">Dark Mode</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input mx-1" onClick={props.themeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    aboutText: propTypes.string 
}

Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'About'
}