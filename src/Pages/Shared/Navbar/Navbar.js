import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Promit Biswas
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" onClick={()=> scroll.scrollToTop()}>Home</Link>
            </li>
            <li>
            <HashLink to='#projects' smooth={true} duration={1000}>Projects</HashLink>
            </li>
            <li>
              <HashLink to='#contact' smooth={true} duration={1000}>Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
