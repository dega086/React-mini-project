import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;