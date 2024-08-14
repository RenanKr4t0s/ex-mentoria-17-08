// Header.js
import React from 'react';
import navArray from "./navBarComp/toFurfill/navArray"
import NavItemDrop from "./navBarComp/navItemDrop"
import {dropItens, dropName} from "./navBarComp/toFurfill/navArrayDrop"

export default function NavBarSimple({siteName, domRouter}){
  return (
    <header id="title" className="text-bg-dark text-left container-fluid py-3 px-lg-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
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

            {/* Chamando um item no Array que tem subitens */}
            <NavItemDrop name={dropName} dropItens={dropItens} domRouter={domRouter} />
            
          </ul>
        </div>
      </nav>
    </header>
  );
};
