import React from 'react';

function FirstSection() {
  return (
    <section className="firstsection" id="home">
      <div class="leftsection">Hi, My Name Is <span class="purple">Garv</span>
            <div>And I am a</div>
            <span id="element"></span>
            <div><a href="https://www.linkedin.com/in/garv-malik-9a98091bb/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/garvmalik11"><i class="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/GarvMalik11"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/garv_malik_/"><i class="fa-brands fa-instagram"></i></a>
        </div>
        </div>
        <div class="rightsection">
            <img src="images/bg.png" alt=""/>
            
        </div>
    </section>
  );
}

export default FirstSection;
