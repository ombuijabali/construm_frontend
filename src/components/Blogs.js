import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://backend-construm.onrender.com/api/blogs/')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Blogs</h2>
      <div className="blogs-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <img 
              src={`https://backend-construm.onrender.com${blog.preview_image}`} 
              alt={blog.title} 
              className="blog-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://backend-construm.onrender.com/static/images/default-blog.jpg';
              }}
            />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              {/* Limit description to 100 characters */}
              <p>{blog.short_description.substring(0, 100)}{blog.short_description.length > 100 ? '...' : ''}</p>
              <Link to={`/blogs/${blog.id}`} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
