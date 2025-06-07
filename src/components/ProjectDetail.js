import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // For getting the project ID from the URL
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();  // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);  // Handle loading state

  useEffect(() => {
    // Fetch project details by ID
    axios.get(`https://backend-construm.onrender.com/api/projects/${id}/`)
      .then(response => {
        console.log('Raw project data:', response.data);
        setProject(response.data);
        setLoading(false);  // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching project details:', error);
        setLoading(false);  // Stop loading on error
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;  // Display while loading
  }

  if (!project) {
    return <div>Project not found</div>;  // If no project is found
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <p className="project-status">Status: {project.status}</p>
      <img 
        src={project.preview_image} 
        alt={project.title} 
        className="project-detail-image"
        onError={(e) => {
          console.error('Preview image failed to load:', project.preview_image);
          e.target.onerror = null;
          e.target.src = 'https://backend-construm.onrender.com/static/images/default-project.jpg';
        }}
      />
      <div className="project-description">
        <p>{project.description}</p>
      </div>
      {project.images && project.images.length > 0 && (
        <div className="project-gallery">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt={`${project.title} - Image ${index + 1}`}
              className="gallery-image"
              onError={(e) => {
                console.error('Gallery image failed to load:', image.image);
                e.target.onerror = null;
                e.target.src = 'https://backend-construm.onrender.com/static/images/default-project.jpg';
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
