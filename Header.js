import React from "react";

export default function Header() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Electricity Source
      </a>
      <br></br>
      <hr class="new4"></hr>
      <ul>
        <li>
          <a href="/About">Calculator</a>
        </li>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
