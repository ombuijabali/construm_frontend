// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Footer Widgets Column 1 */}
          <div className="col-md-4">
            <h5>Construm Geosystems</h5>
            <p>
              We are a leading geospatial and survey company, dedicated to providing accurate
              geospatial solutions and surveying services.
            </p>
            <br />
            <br />
            <p>&copy; 2024 Construm Geosystems. All rights reserved.</p>
          </div>

          {/* Footer Widgets Column 2 */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/career">Careers</Link></li>
            </ul>
            <br />
            <a href="#top" className="back-to-top-link"><strong>Back to Top</strong></a>
          </div>

          {/* Footer Widgets Column 3 */}
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Gateway Mall</strong><br />
                3rd Floor Room 22<br />
                Kiungani Rd<br />
                Nairobi, Kenya
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:simion7ombui@gmail.com" style={{color: 'orange'}}>simion7ombui@gmail.com</a></strong>
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faPhone} /> <a href="tel:+254706881849" style={{color: 'orange'}}>+254 706 881 849</a></strong>
              </li>
            </ul>

            <div className="social-icons">         
              <a href="https://x.com/OmbuiSimio27785" className="mr-3" style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/in/simion-ombui-6b13a9178/" className="mr-3" style={{ color: 'blue' }}><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.youtube.com/@construmgis" className="mr-3" style={{ color: '#FF0000' }}><FontAwesomeIcon icon={faYoutube} /></a>
              {/* Add more social media icons and links as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="col-md-12 mt-4 d-flex align-items-center">
        <h5 className="partner-heading">Our Partners:</h5>
        <div className="partner-logos">
          <img src="images/gok.png" alt="Partner Logo 1" className="partner-logo" />
          <img src="images/kura.png" alt="Partner Logo 2" className="partner-logo" />
          <img src="images/nema.png" alt="Partner Logo 3" className="partner-logo" />
          <img src="images/ngo.jpeg" alt="Partner Logo 3" className="partner-logo" />
          <img src="images/upwork.png" alt="Partner Logo 4" className="partner-logo" />
          <img src="images/ConstrumGIS.png" alt="Partner Logo 4" className="partner-logo" />
          {/* Add more partner logos as needed */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
