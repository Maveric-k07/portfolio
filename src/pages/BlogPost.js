import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const BlogContainer = styled(Container)`
  background-color: white;
  color: black;
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 40px;
    max-width: 800px;
  }
`;

const BlogTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogDate = styled.p`
  margin-bottom: 1rem;
`;

const BlogContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  word-wrap: break-word;

  img {
    max-width: 100%;
    height: auto;
  }

  p, h2, h3, h4, h5, h6 {
    max-width: 100%;
    overflow-wrap: break-word;
  }
`;

const LoadingContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const ErrorContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`;

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
      <LoadingContainer>
        <Spinner animation="border" variant="dark" />
        <span className="ml-2">Loading blog post...</span>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <p>{error}</p>
      </ErrorContainer>
    );
  }

  if (!post) {
    return (
      <ErrorContainer>
        <p>Blog post not found.</p>
      </ErrorContainer>
    );
  }

  return (
    <BlogContainer>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogDate className="text-muted">{new Date(post.pubDate).toLocaleDateString()}</BlogDate>
      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogContainer>
  );
};

export default BlogPost;