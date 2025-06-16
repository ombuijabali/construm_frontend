import React from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css';
import AdSense from './AdSense';

const About = () => {
  return (
    <main className="about-container">
      {/* Title Section */}
      <div className="about-header">
        <h1 className="about-title">Our Company</h1>
        <p className="about-subtitle">The Business of Providing Precision Data</p>
      </div>

      {/* AdSense Ad */}
      //<AdSense />

      <div className="row about-content">
        {/* Text Section */}
        <div className="col-md-6 about-text">
          <p>
            Construm Geosystems, founded in 2021 by Simion Ombui and Duncan Nyabuto, is a remote-based company in Kenya that values freedom to optimize productivity. Our team of dedicated GIS, mapping, and surveying professionals provides top-notch geospatial solutions. We are committed to delivering high-quality services that meet the needs of our clients, ensuring accuracy and reliability in every project we undertake.
          </p>
          <p>
            Our mission is to deliver precise data and insights to support your projects. We specialize in land surveying, GIS, remote sensing, geospatial data analysis, and custom web maps to help you make informed decisions and drive your projects forward. Our expertise in these areas allows us to offer a comprehensive suite of services tailored to your specific requirements, whether you are involved in urban planning, environmental conservation, infrastructure development, or agriculture.
          </p>
          
        </div>

        {/* Image Carousel Section */}
        <div className="col-md-6 about-carousel">
          <Carousel id="imageCarousel" interval={5000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/plan34.jpg"
                alt="Planning project overview"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/plan36.jpg"
                alt="Surveying a project site"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/plan38.jpg"
                alt="Analyzing geographic data"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="col-md-12 testimonial">
        <blockquote className="blockquote">
          <p className="mb-0">
            <i>"We are a dedicated team of GIS and surveying professionals with years of experience in providing top-notch geospatial solutions. Our commitment to accuracy and quality sets us apart in the industry."</i>
          </p>
          <footer className="blockquote-footer">Simion Ombui, CEO</footer>
          <img src="/images/file.enc" alt="Simion Ombui" className="img-fluid rounded-circle avatar-image" />
        </blockquote>
      </div>
    </main>
  );
};

export default About;
