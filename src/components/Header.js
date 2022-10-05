import React from "react";
import './Header.css'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header--navbar">
          <div className="header--logo">
            <img src=".\images\logo.svg" alt="logo" />
            <h2>Meme Generator</h2>
          </div>          
          <h4>React Course - Project 3</h4>
        </nav>
      </header>
    </>
  )
}