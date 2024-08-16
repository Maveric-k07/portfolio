import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gurramakhileshwar333`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const selectedPost = data.items.find(item => item.guid.endsWith(id));
        if (selectedPost) {
          setPost(selectedPost);
        } else {
          throw new Error('Blog post not found');
        }
      } catch (error) {
        console.error("Error fetching blog post: ", error);
        setError('Error fetching blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" variant="dark" />
        <span className="ml-2">Loading blog post...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px' }}>
        <p className="text-center">{error}</p>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px' }}>
        <p className="text-center">Blog post not found.</p>
      </Container>
    );
  }

  return (
    <Container className="blog-post" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px', maxWidth: '800px' }}>
      <h1>{post.title}</h1>
      <p className="text-muted">{new Date(post.pubDate).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
};

export default BlogPost;