import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Events</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Info</h3>
          <div>
            <p>Noida Electronic Society,Block A</p>
            <p>Noida, UP 201009</p>
            <p>Email: parola@gmail.com</p>
            <p>Phone: 32456</p>
          </div>
        </div>
        <div className="footer-social">
          <h3>Find Us here</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/Parola.LiteraryHub/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/parola-the-literary-hub/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/parola.literaryhub"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; The Literary Society.JIIT-62</p>
      </div>
    </footer>
  );
}

export default Footer;
