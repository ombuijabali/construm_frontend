import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Career.css';

const Careers = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    axios.get('https://backend-construm.onrender.com/api/career/')
      .then(response => {
        setCareers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the careers!', error);
      });
  }, []);

  return (
    <div className="careers-container">
      <section id="job-opening" className="job-opening-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-description">
              <h2 className="section-title">CAREERS</h2>
              <p>Join Our Team! If you are passionate, talented, and looking for an exciting career opportunity, we invite you to join our team. Discover the possibilities of working with us and contribute to our mission of delivering exceptional results for our clientele. Explore our current openings, submit your application, and take the first step towards an enriching and fulfilling career with us!</p>
              
              <p>Discover the possibilities of working with us and contribute to our mission of delivering exceptional results for our clientele. Explore our current openings, submit your application, and take the first step towards an enriching and fulfilling career with us!</p>
            </div>
            <div className="col-md-6 job-image">
              <img src="/images/carr.jpg" alt="Job Opening" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="qualifications" className="qualifications-section">
        <div className="container">
          <h2 className="section-title">Desired Qualities</h2>
          <ul className="qualities-list">
            <li><img src="/images/adapt.png" alt="Adaptability" className="equal-size-logo" /> Adaptability</li>
            <li><img src="/images/customer.png" alt="Customer-First" className="equal-size-logo" /> Customer-First Mentality</li>
            <li><img src="/images/motivated.png" alt="Self-motivated" className="equal-size-logo" /> Self-motivated</li>
            <li><img src="/images/attitude.png" alt="Great Attitude" className="equal-size-logo" /> A Great Attitude</li>
            <li><img src="/images/creative.png" alt="Creative" className="equal-size-logo" /> Creative and Innovative</li>
          </ul>
        </div>
      </section>

      <section id="view-and-apply" className="view-and-apply-section">
        <div className="container">
          <h5 className="section-subtitle">Current Openings</h5>
          {careers.length === 0 ? (
            <p>No careers at the moment. Please check back later for opportunities!</p>
          ) : (
            <div className="row">
              {careers.map(career => (
                <div key={career.id} className="col-md-12 career-opening">
                  <h3>{career.title}</h3>
                  <p>{career.content}</p>
                  {/* If you have links to detailed job descriptions or applications, you can add them here */}
                  <a href={`/careers/${career.id}`} className="btn btn-outline-info btn-sm">
                    View and Apply
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Careers;
