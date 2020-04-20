import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'
import RedLogo from '../images/logos/marti-logo-red.png';
import '../styles/sidebar-nav.css';

export default function Sidebar({ expanded, toggleSidebar }) {
  const iconSize = expanded ? "1x" : "2x"
  return (
    <div className={`sidenav ${expanded ? "sidenav-expanded": "sidenav-collapsed"}`}>
      <div className="logo-block">
        <Link to="/">
          {renderHomeIcon(expanded)}
        </Link>
      </div>

      <Link className="link" to="/addresses">
        <span className="align-middle" style={{"marginRight": '4px'}} >
          <FontAwesomeIcon
            icon={faBuilding}
            size={iconSize}
            color="#FD2937"
            title="Addresses"
          />
        </span>
        {expanded && <span> Addresses</span>}
      </Link>

      <Link to="/people">
        <span className="align-middle">
          <FontAwesomeIcon
            icon={faUser}
            size={iconSize}
            color="#FD2937"
            title="People"
          />
        </span>
        {expanded && <span className="nav-text"> People</span>}
      </Link>
    </div>
  )
}

function renderHomeIcon(expanded) {
  if(expanded) {
    return (
      <img
        id={expanded ? "home-link-expanded" : "home-link-collapsed"}
        src={RedLogo}
        alt="Home"
      />
    )
  } else {
    return (
      <FontAwesomeIcon
        icon={faHome}
        size="2x"
        color="#FD2937"
        title="Home"
      />
    )
  }
}
