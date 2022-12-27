import React, { useState } from "react";
import '../components/Header.css'

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://149837790.v2.pressablecdn.com/wp-content/uploads/2019/01/Saab-logo.png"
              alt=""
              style={{ width: "60px", height: "50px" }}
            />
            Carbnb
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/create-new-parking-place">
            Create new parking place
          </a>
        </li>
        </ul>
        </div>

        <div className="input-group mb-2 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search parking place"
            aria-label="Search parking place"
            aria-describedby="basic-addon2"
          />
          <div className="search-input input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
      </nav>
      <h1></h1>
    </>
  );
}
