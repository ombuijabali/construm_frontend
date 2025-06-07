// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <p>&copy; {currentYear} Construm Geosystems. All rights reserved.</p>
          </div>

          {/* Footer Widgets Column 2 */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
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
                Mombasa Rd<br />
                Nairobi, Kenya
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:construmgis@gmail.com" style={{color: 'orange'}}>construmgis@gmail.com</a></strong>
              </li>
              <li>
                <strong><FontAwesomeIcon icon={faPhone} /> <a href="tel:+254706881849" style={{color: 'orange'}}>+254 706 881 849</a></strong>
              </li>
            </ul>

            <div className="social-icons">         
              <a href="https://x.com/OmbuiSimio27785" className="mr-3" style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.linkedin.com/company/construmgis/?viewAsMember=true" className="mr-3" style={{ color: 'blue' }}><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.youtube.com/@construmgis" className="mr-3" style={{ color: '#FF0000' }}><FontAwesomeIcon icon={faYoutube} /></a>
              {/* Add more social media icons and links as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="partners-section">
        <div className="container">
          <div className="partners-content">
            <h5 className="partner-heading">Our Partners</h5>
            <div className="partner-logos-container">
              <div className="partner-logos">
                <img src="/images/gok.png" alt="Government of Kenya" className="partner-logo" />
                <img src="/images/kura.png" alt="KURA" className="partner-logo" />
                <img src="/images/nema.png" alt="NEMA" className="partner-logo" />
                <img src="/images/ngo.jpeg" alt="NGO" className="partner-logo" />
                <img src="/images/upwork.png" alt="Upwork" className="partner-logo" />
                <img src="/images/fiver.png" alt="ConstrumGIS" className="partner-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
