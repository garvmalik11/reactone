import React from 'react';

function Navbar() {
  return (
    <nav>
      <div class="left"><a href="#home">Garv's Portfolio</a></div>
            <div class="right">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
    </nav>
  );
}

export default Navbar;
