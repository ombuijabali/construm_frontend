import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <Slider {...settings}>
          <div>
            <img src="/images/hero.jpg" alt="Hero 1" className="hero-image" />
          </div>
          <div>
            <img src="/images/hero2.jpg" alt="Hero 2" className="hero-image" />
          </div>
          <div>
            <img src="/images/hero3.jpg" alt="Hero 3" className="hero-image" />
          </div>
        </Slider>
        <div className="hero-text">
        <h1 class="white-text">Geospatial Technology, Geospatial Solutions</h1>
          <p class="white-text">Your trusted partner in geospatial consultancy services.</p>
          <Link to="/contact" className="btn cta-btn">Contact Us</Link>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          
          <div className="service-item">
            <i className="fas fa-map-marked-alt service-icon"></i> {/* GIS and Mapping Icon */}
            <h3>GIS and Mapping</h3>
            <p>
              Our GIS and Mapping services provide comprehensive spatial analysis and mapping solutions. We use advanced GIS technology to create accurate and visually compelling maps, enhancing decision-making across various industries.
            </p>
            <Link to="/services#gis-mapping" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-satellite service-icon"></i> {/* Remote Sensing Icon */}
            <h3>Remote Sensing</h3>
            <p>
              Leverage satellite and aerial imaging technologies for high-resolution data capture. Our Remote Sensing services are essential for environmental monitoring, land use assessment, and detailed surveys without on-ground presence.
            </p>
            <Link to="/services#remote-sensing" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-code service-icon"></i> {/* Software Development Icon */}
            <h3>Geospatial Software Development</h3>
            <p>
              We develop custom geospatial software solutions to manage, analyze, and visualize spatial data effectively. Enhance your GIS capabilities with tools tailored to your organization's needs.
            </p>
            <Link to="/services#software-development" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-map service-icon"></i> {/* Cartography Icon */}
            <h3>Cartography</h3>
            <p>
              Our Cartography services produce visually stunning and informative maps. Whether you need thematic or topographic maps, we deliver high-quality products that effectively communicate spatial information.
            </p>
            <Link to="/services#cartography" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-chart-bar service-icon"></i> {/* Data Science Icon */}
            <h3>Data Science and Analysis</h3>
            <p>
              Transform raw spatial data into actionable insights with our Data Science services. We apply advanced analytical techniques, enabling informed decisions based on comprehensive data analysis.
            </p>
            <Link to="/services#data-science" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-plane service-icon"></i> {/* Drone Mapping Icon */}
            <h3>Drone Mapping</h3>
            <p>
              Obtain high-resolution aerial imagery and 3D models with our Drone Mapping services. Essential for detailed site analysis, construction planning, and environmental monitoring using state-of-the-art drone technology.
            </p>
            <Link to="/services#drone-mapping" className="learn-more">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src="/images/about.jpg" alt="About Us" className="about-image" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Construm Geosystems is a remote-based geospatial consultancy firm, dedicated to providing top-tier GIS services to clients worldwide. Our team of experts combines cutting-edge technology with innovative methodologies to deliver solutions that are accurate, reliable, and tailored to meet your unique needs.
            </p>
            <Link to="/about" className="btn about-btn">Read More</Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Latest from Our Channel</h2>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/qs7GSDrxpDA"
            title="Latest ConstrumGIS Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <a 
          href="https://www.youtube.com/@ConstrumGIS" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn youtube-btn"
        >
          Visit Our Channel
        </a>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Our Clients</h2>
        <div className="client-logos">
          <img src="/images/gok.png" alt="Client 1" className="client-logo" />
          <img src="/images/nema.png" alt="Client 2" className="client-logo" />
          <img src="/images/ngo.jpeg" alt="Client 3" className="client-logo" />
          <img src="/images/upwork.png" alt="Client 4" className="client-logo" />
          <img src="/images/fiver.png" alt="Client 5" className="client-logo" />
        </div>
        <Link to="/clients" className="btn">See All Clients</Link>
      </section>
    </main>
  );
};

export default Home;
