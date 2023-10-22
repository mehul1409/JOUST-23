import "./homepage.css";
import React, { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Greeting from "../Greeting/Greeting";


const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cursordot = document.querySelector("#cursor-dot");
    const cursoroutline = document.querySelector("#cursor-outline");
    const homeSection = document.querySelector(".homeSection");
    let scrollTimeout;

    const handleMouseMove = (event) => {
      const posx = event.clientX;
      const posy = event.clientY;

      cursordot.style.left = `${posx}px`;
      cursordot.style.top = `${posy}px`;

      cursoroutline.animate(
        {
          left: `${posx}px`,
          top: `${posy}px`,
        },
        { duration: 500, fill: "backwards" }
      );
    };

    const handleScroll = () => {
      cursordot.style.display = "none";
      cursoroutline.style.display = "none";

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        cursordot.style.display = "block";
        cursoroutline.style.display = "block";
      }, 1000);
    };

    homeSection.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      homeSection.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div className="homeSection" id="homesection">

        <div class="cursor-dot" id="cursor-dot"></div>
        <div class="cursor-outline" id="cursor-outline"></div>


        <div className="navbar-fixed">
          <div className="navBar">

            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="clubName" id="parola">
              PAROLA
            </div>
            <div
              className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
            >
              <a href="#joust" onClick={closeMobileMenu}>JOUST</a>
              <a href="#competition" onClick={closeMobileMenu}>COMPETITIONS</a>
              <a href="#events" onClick={closeMobileMenu}>EVENTS</a>
              <a href="#contactus" onClick={closeMobileMenu}>CONTACT US</a>
              <a href="https://linktr.ee/parola_literaryhub" onClick={closeMobileMenu} target="_blank">REGISTER NOW</a>
            </div>
          </div>
        </div>


        <div className="homePageContent">
          <img
            className="debsocLogo"
            src="images/Untitled-1.png"
            alt="debsocLogo"
          />
          <div className="rightSide">
            <div className="animationsociety">
              <div className="society">THE JOUST 2023</div>
              <div className="place eventdate">4-5 NOV</div>
            </div>

            <div className="hline1"></div>
            <div className="place">BATTLEFIELD OF WORDS</div>
            <div className="hline2"></div>
            <div className="knowMoreButton" onClick={onOpenModal}>Invitation</div>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              styles={{
                modal: {
                  maxHeight: '90%',
                  overflowY: 'auto',
                  padding: '0'
                },
                closeButton: {
                  height: '30px',
                  backgroundColor: "#FFC72C",
                  border: "0",
                  outline: "0"
                }
              }
              } closeOnOverlayClick={false}>
              <Greeting />
            </Modal>
          </div>
        </div>


      </div>



    </>
  );
};

export default Homepage;
