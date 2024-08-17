// Header.js
import React from 'react';
import navArray from "./navBarComp/toFurfill/navArray"

export default function NavBarSimple({siteName, domRouter}){
  return (
    <header id="title" className="text-bg-primary text-left container-fluid py-3 px-lg-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-primary">
        <a className="navbar-brand px-lg-5" href="/">{siteName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            {navArray.map((item, index) => (
              <li key={index} className="nav-item px-3">
                <a className="nav-link" href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
