import './homepage.css';
import React, { useEffect } from 'react';

const Homepage = () => {

  useEffect(() => {
    const cursordot = document.querySelector("#cursor-dot");
    const cursoroutline = document.querySelector("#cursor-outline");
    const homeSection = document.querySelector(".homeSection");

    homeSection.addEventListener("mousemove", function (event) {
      const posx = event.clientX;
      const posy = event.clientY;

      cursordot.style.left = `${posx}px`;
      cursordot.style.top = `${posy}px`;

      cursoroutline.animate(
        {
          left: `${posx}px`,
          top: `${posy}px`,
        },
        {duration:500, fill:"backwards"}
      );
    });


    return () => {
      window.removeEventListener("mousemove", () => { });
    };
  }, []);

  return (
    <>
      <div className="homeSection">

        <div class="cursor-dot" id="cursor-dot"></div>
        <div class="cursor-outline" id="cursor-outline"></div>


        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="navBar">
          <div className='clubName'>PAROLA</div>
          <div className='navbar-items'>
            <a href="#home">HOME</a>
            <a href="#aboutus">ABOUT US</a>
            <a href="#events">EVENTS</a>
            <a href="#contactus">CONTACT US</a>
          </div>
        </div>
        <div className="homePageContent">
          <img className='debsocLogo' src="images/DebsocLogo.png" alt="debsocLogo" />
          <div className='rightSide'>
            <div className='animationsociety'>
              <div className='society'>THE <span>LITERARY</span> SOCIETY</div>
            </div>
            <div className='place'>JIIT - 62</div>
            <div className='homecontent'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse dicta, assumenda possimus vitae ea. Eos, recusandae? Sunt, amet atque.
              Lorem ipsum dolor sit amet conslam accustempExplicabo molestiae a, eaque optio veniam officia ex asperiores fugiat, architecto repudiandae quos temporibus.
            </div>
            <div className="knowMoreButton">Know More</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
