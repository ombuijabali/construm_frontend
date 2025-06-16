import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './Home.css';
import AdSense from './AdSense';

const Home = () => {
  const [latestVideo, setLatestVideo] = useState('qs7GSDrxpDA'); // Default video ID
  const channelId = 'UCYb6v1AlX6oNhgvxWksX4Pw'; // Replace with your actual channel ID
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
        );
        const data = await response.json();
        if (data.items && data.items[0]) {
          setLatestVideo(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error('Error fetching latest video:', error);
      }
    };

    if (apiKey) {
      fetchLatestVideo();
    }
  }, [apiKey]);

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
          <h1 className="white-text">Geospatial Technology, Geospatial Solutions</h1>
          <p className="white-text">Your trusted partner in geospatial consultancy services.</p>
          <Link to="/contact" className="btn cta-btn">Contact Us</Link>
        </div>
      </section>

      {/* AdSense Ad */}
      //<AdSense />

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          
          <div className="service-item">
            <i className="fas fa-map-marked-alt service-icon gis-icon"></i>
            <h3>GIS and Mapping</h3>
            <p>
              Our GIS and Mapping services provide comprehensive spatial analysis and mapping solutions. We use advanced GIS technology to create accurate and visually compelling maps, enhancing decision-making across various industries.
            </p>
            <Link to="/services#gis-mapping" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-satellite service-icon remote-sensing-icon"></i>
            <h3>Remote Sensing</h3>
            <p>
              Leverage satellite and aerial imaging technologies for high-resolution data capture. Our Remote Sensing services are essential for environmental monitoring, land use assessment, and detailed surveys without on-ground presence.
            </p>
            <Link to="/services#remote-sensing" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-code service-icon software-icon"></i>
            <h3>Geospatial Software Development</h3>
            <p>
              We develop custom geospatial software solutions to manage, analyze, and visualize spatial data effectively. Enhance your GIS capabilities with tools tailored to your organization's needs.
            </p>
            <Link to="/services#software-development" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-map service-icon cartography-icon"></i>
            <h3>Cartography</h3>
            <p>
              Our Cartography services produce visually stunning and informative maps. Whether you need thematic or topographic maps, we deliver high-quality products that effectively communicate spatial information.
            </p>
            <Link to="/services#cartography" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-chart-bar service-icon data-science-icon"></i>
            <h3>Data Science and Analysis</h3>
            <p>
              Transform raw spatial data into actionable insights with our Data Science services. We apply advanced analytical techniques, enabling informed decisions based on comprehensive data analysis.
            </p>
            <Link to="/services#data-science" className="learn-more">Learn More</Link>
          </div>

          <div className="service-item">
            <i className="fas fa-plane service-icon drone-icon"></i>
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
            src={`https://www.youtube.com/embed/${latestVideo}`}
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
