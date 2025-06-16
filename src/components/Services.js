import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Services.css';
import AdSense from './AdSense';

const Services = () => {
  // Define the mapping between hash fragments and tab indices
  const tabMapping = {
    'gis-mapping': 0,
    'remote-sensing': 1,
    'software-development': 2,
    'cartography': 3,
    'data-science': 4,
    'drone-mapping': 5,
  };

  // State to hold the selected tab index
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);
    // Set the tab index based on the hash
    if (tabMapping.hasOwnProperty(hash)) {
      setTabIndex(tabMapping[hash]);
    }
  }, []); // Added an empty dependency array

  return (
    <main className="services-container">
      
      {/* AdSense Ad */}
     
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>GIS and Mapping</Tab>
          <Tab>Remote Sensing</Tab>
          <Tab>Geospatial Software Development</Tab>
          <Tab>Cartography</Tab>
          <Tab>Data Science and Analysis</Tab>
          <Tab>Drone Mapping</Tab>
        </TabList>

        <TabPanel>
          <div className="service-content">
            <img src="/images/gis.jpg" alt="GIS and Mapping" className="service-image" />
            <div className="service-details">
              <h2>GIS and Mapping</h2>
              <p>
                Our GIS and Mapping Services are designed to provide comprehensive spatial analysis and mapping solutions tailored to meet the unique needs of our clients. We utilize cutting-edge Geographic Information Systems (GIS) technology to create highly accurate and visually compelling maps that enhance decision-making processes across various industries.
              </p>
              <h3>Why Choose Our GIS and Mapping Services?</h3>
              <ul>
                <li><strong>Customized Solutions:</strong> We develop GIS solutions that align with your specific goals.</li>
                <li><strong>High Precision and Accuracy:</strong> Our maps are accurate to the smallest detail.</li>
                <li><strong>Data Integration:</strong> We integrate various data sources for a comprehensive spatial overview.</li>
                <li><strong>Expertise Across Industries:</strong> We offer expertise in urban planning, environmental management, and more.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Enhanced decision-making through accurate spatial data.</li>
                <li>Improved project planning and resource management.</li>
                <li>Cost-effective solutions tailored to your needs.</li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-content">
            <img src="/images/rs.jpg" alt="Remote Sensing" className="service-image" />
            <div className="service-details">
              <h2>Remote Sensing</h2>
              <p>
                Our Remote Sensing Services leverage advanced satellite and aerial imaging technologies to capture high-resolution data over large areas. This service is essential for monitoring environmental changes, assessing land use, and conducting detailed surveys without the need for on-the-ground presence.
              </p>
              <h3>Why Choose Our Remote Sensing Services?</h3>
              <ul>
                <li><strong>Access to Advanced Technology:</strong> We use the latest remote sensing technologies for precise data.</li>
                <li><strong>Comprehensive Analysis:</strong> Our experts interpret data to provide valuable insights.</li>
                <li><strong>Scalability:</strong> Our services scale to meet your project's scope.</li>
                <li><strong>Environmental Monitoring:</strong> We monitor environmental changes effectively.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Access to high-quality data for large-scale projects.</li>
                <li>Cost savings by reducing the need for extensive fieldwork.</li>
                <li>Timely data collection and analysis for rapid decision-making.</li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-content">
            <img src="/images/sd.jpg" alt="Geospatial Software Development" className="service-image" />
            <div className="service-details">
              <h2>Geospatial Software Development</h2>
              <p>
                We specialize in developing custom geospatial software solutions that empower organizations to manage, analyze, and visualize spatial data effectively. Our software development team works closely with clients to build tools that enhance their GIS capabilities.
              </p>
              <h3>Why Choose Our Geospatial Software Development Services?</h3>
              <ul>
                <li><strong>Custom-Built Solutions:</strong> We develop software tailored to your needs.</li>
                <li><strong>User-Friendly Interfaces:</strong> Our software is designed for ease of use.</li>
                <li><strong>Integration with Existing Systems:</strong> We ensure seamless integration with your IT infrastructure.</li>
                <li><strong>Scalable and Future-Proof:</strong> Our solutions are scalable for long-term value.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Increased operational efficiency through customized tools.</li>
                <li>Enhanced data management and spatial analysis capabilities.</li>
                <li>Long-term value with scalable and adaptable software solutions.</li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-content">
            <img src="/images/carto.jpg" alt="Cartography" className="service-image" />
            <div className="service-details">
              <h2>Cartography</h2>
              <p>
                Our Cartography Services create visually stunning and informative maps that effectively communicate spatial information. Whether you need thematic maps, topographic maps, or custom map designs, our cartography team delivers high-quality products that meet your specific needs.
              </p>
              <h3>Why Choose Our Cartography Services?</h3>
              <ul>
                <li><strong>Aesthetic and Functional Design:</strong> We combine artistic design with technical precision.</li>
                <li><strong>Wide Range of Map Types:</strong> We offer thematic maps, topographic maps, and more.</li>
                <li><strong>Expert Cartographers:</strong> Our team ensures accuracy and clarity in every map.</li>
                <li><strong>Custom Map Solutions:</strong> We deliver maps that effectively convey the desired information.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Professional-grade maps that enhance communication and understanding.</li>
                <li>Custom designs that align with your brand and project needs.</li>
                <li>High accuracy and detail to support critical decision-making.</li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-content">
            <img src="/images/ds.jpg" alt="Data Science and Analysis" className="service-image" />
            <div className="service-details">
              <h2>Data Science and Analysis</h2>
              <p>
                Our Data Science and Analysis Services transform raw spatial data into actionable insights. We apply advanced analytical techniques to geospatial data, enabling organizations to make informed decisions based on comprehensive data analysis.
              </p>
              <h3>Why Choose Our Data Science and Analysis Services?</h3>
              <ul>
                <li><strong>Advanced Analytical Techniques:</strong> We use cutting-edge data science methods.</li>
                <li><strong>Big Data Handling:</strong> We handle large datasets to ensure valuable insights.</li>
                <li><strong>Tailored Analysis:</strong> We offer customized analysis services for your needs.</li>
                <li><strong>Comprehensive Reporting:</strong> Our detailed reports make it easy to understand and act upon the findings.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Deeper understanding of spatial data through advanced analysis.</li>
                <li>Enhanced decision-making with data-driven insights.</li>
                <li>Comprehensive reports that support strategic planning.</li>
              </ul>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="service-content">
            <img src="/images/drone.jpg" alt="Drone Mapping" className="service-image" />
            <div className="service-details">
              <h2>Drone Mapping</h2>
              <p>
                Our Drone Mapping Services utilize cutting-edge drone technology to capture high-resolution aerial imagery and data. This service is ideal for surveying large areas quickly and accurately, making it an essential tool for various industries.
              </p>
              <h3>Why Choose Our Drone Mapping Services?</h3>
              <ul>
                <li><strong>High-Resolution Imagery:</strong> We capture detailed images for precise analysis.</li>
                <li><strong>Fast and Efficient:</strong> Our drones cover large areas in a short time.</li>
                <li><strong>Cost-Effective Solutions:</strong> Reduce costs associated with traditional surveying methods.</li>
                <li><strong>Expert Analysis:</strong> Our team provides in-depth analysis of the collected data.</li>
              </ul>
              <h3>Client Benefits:</h3>
              <ul>
                <li>Timely access to accurate aerial data for informed decision-making.</li>
                <li>Cost savings through efficient mapping processes.</li>
                <li>Enhanced project planning and resource management capabilities.</li>
              </ul>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </main>
  );
};

export default Services;
