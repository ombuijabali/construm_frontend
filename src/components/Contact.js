import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import AdSense from './AdSense';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', form);
  };

  return (
    <main>
      <div className="container mb-6">
        <h2 style={{ color: 'teal' }}>Talk To Us</h2>
        {/* AdSense Ad */}
        <AdSense />
        <div className="row">
          <div className="col-md-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-4">
            {/* Contact Details */}
            <h3 style={{ color: 'teal' }}>Contact Details</h3>
            <p><strong>Phone:</strong> +254 (706 881 849)</p>
            <p><strong>Phone:</strong> +254 (714 998651)</p>
            <p><strong>Email:</strong> construmgis@gmail.com</p>
            <h3>Follow Us</h3>
            <a href="https://x.com/OmbuiSimio27785" className="btn btn-outline-primary btn-social-icon btn-twitter mr-2">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://www.linkedin.com/company/construmgis/?viewAsMember=true" className="btn btn-outline-primary btn-social-icon btn-linkedin mr-2">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="https://www.youtube.com/@construmgis" className="btn btn-outline-primary btn-social-icon btn-youtube mr-2">
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: 'teal' }}>Our Location</h2>
            {/* Google Maps iframe embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7614097666584!2d36.87752731475547!3d-1.3294344990342854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b6e8be0b57%3A0x85208a2ec9397f89!2sGateway%20Mall!5e0!3m2!1sen!2ske!4v1679901234567!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gateway Mall Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};


export default Contact;
