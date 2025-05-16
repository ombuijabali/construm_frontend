import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    // Fetch blog post details
    axios.get(`https://backend-construm.onrender.com/api/blogs/${id}/`)
      .then(response => {
        console.log('Raw blog data:', response.data);
        setBlog(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog post:', error);
        setLoading(false);
      });

    // Fetch comments for this blog post
    axios.get(`https://backend-construm.onrender.com/api/comments/?blog=${id}`)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, [id]);

  const handleAddComment = () => {
    if (!commentAuthor || !commentContent) return;

    axios.post(`https://backend-construm.onrender.com/api/comments/`, {
      blog: id,
      author: commentAuthor,
      content: commentContent
    })
    .then(response => {
      setComments([...comments, response.data]);
      setCommentAuthor('');
      setCommentContent('');
    })
    .catch(error => {
      console.error('Error adding comment:', error);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <h2>{blog.title}</h2>
      <p className="blog-author">By {blog.author}</p>
      <img 
        src={blog.preview_image} 
        alt={blog.title} 
        className="blog-post-image"
        onError={(e) => {
          console.error('Image failed to load:', blog.preview_image);
          e.target.onerror = null;
          e.target.src = 'https://backend-construm.onrender.com/static/images/default-blog.jpg';
        }}
      />
      
      {/* Render the blog content as HTML */}
      <div 
        className="blog-content" 
        dangerouslySetInnerHTML={{ __html: blog.content }} 
      />

      <div className="comments-section">
        <h3>Comments</h3>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p><strong>{comment.author}:</strong> {comment.content}</p>
            </li>
          ))}
        </ul>
        <div className="add-comment">
          <h4>Add a Comment</h4>
          <input
            type="text"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
            placeholder="Your name"
          />
          <textarea
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="Your comment"
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
