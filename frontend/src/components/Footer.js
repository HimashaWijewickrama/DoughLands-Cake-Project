import React from 'react';
import './Footer.css';
export default function Footer(){
    return(
        <footer className="pt-4 pb-4 text-center bg-light">
  <div className="container">
    <div className="my-3">
      <div className="h4">DoughLands Cakes</div>
      <p>Pilana, Karapitiya, Sri Lanka</p>
      <div className="social-nav">
        <nav role="navigation">
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link" href="https://twitter.com/" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/" title="Youtube"><i className="fab fa-youtube"></i><span className="menu-title sr-only">Youtube</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="text-small text-secondary">
      <div class="mb-1">&copy; DoughLands. All rights reserved.</div>
      <div>
        <a></a></div>
    </div>
  </div>
</footer>
);
}
