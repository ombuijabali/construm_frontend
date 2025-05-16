import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './Projects.css';  // Ensure styling is consistent with the Blogs component

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('ongoing');  // Default tab

  useEffect(() => {
    axios.get('https://backend-construm.onrender.com/api/projects/')
      .then(response => {
        console.log('Raw projects data:', response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredProjects = projects.filter(project => 
    activeTab === 'ongoing' ? project.status === 'ongoing' : project.status === 'completed'
  );

  return (
    <div className="projects-container">
      <h2 className='Teal'>Projects</h2>

      {/* Tabs for Ongoing and Completed */}
      <div className="tabs">
        <button 
          className={activeTab === 'ongoing' ? 'active' : ''} 
          onClick={() => handleTabChange('ongoing')}>
          Ongoing
        </button>
        <button 
          className={activeTab === 'completed' ? 'active' : ''} 
          onClick={() => handleTabChange('completed')}>
          Completed
        </button>
      </div>

      {/* Project Grid Layout */}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            {/* Display preview image */}
            <img 
              src={project.preview_image} 
              alt={project.title} 
              className="project-image"
              onError={(e) => {
                console.error('Image failed to load:', project.preview_image);
                e.target.onerror = null;
                e.target.src = 'https://backend-construm.onrender.com/static/images/default-project.jpg';
              }}
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              {/* Limit description to 100 characters */}
              <p>{project.description.substring(0, 100)}{project.description.length > 100 ? '...' : ''}</p>
              <Link to={`/projects/${project.id}`} className="read-more">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
