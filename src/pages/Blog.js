import React, { useState, useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';

const extractFirstParagraphText = (htmlString) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;
  const firstParagraph = tempDiv.querySelector('p');
  return firstParagraph ? firstParagraph.textContent || '' : '';
};

const getBlogPostId = (guid) => {
  const parts = guid.split('/');
  return parts[parts.length - 1];
};

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gurramakhileshwar333")
      .then(res => res.json())
      .then(data => {
        setArticles(data.items || []);
        console.log(data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching articles: ", err);
        setLoading(false);
      });
  }, []);

  const containerStyle = {
    backgroundColor: 'white',
    color: 'black',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (minWidth: 768px)': {
      padding: '40px'
    }
  };

  const articleStyle = {
    marginBottom: '20px',
    padding: '20px',
    borderBottom: '1px solid #ddd',
    '@media (minWidth: 768px)': {
      padding: '50px'
    }
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    '@media (minWidth: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  };

  const dateStyle = {
    color: '#666',
    marginBottom: '10px',
    '@media (minWidth: 768px)': {
      flexBasis: '30%',
      marginBottom: '0'
    }
  };

  const contentStyle = {
    '@media (minWidth: 768px)': {
      flexBasis: '70%'
    }
  };

  const titleStyle = {
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Times New Roman, serif',
    fontSize: 'calc(1.2rem + 0.5vw)',
    '@media (minWidth: 768px)': {
      fontSize: '25px'
    }
  };

  if (loading) {
    return (
      <div className="text-center" style={containerStyle}>
        <Spinner animation="border" variant="dark" />
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="text-center" style={containerStyle}>
        <p>No blog posts available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <ListGroup variant="flush">
        {articles.map((article, index) => (
          <div key={index} style={articleStyle}>
            <div style={flexContainerStyle}>
              <div style={dateStyle}>
                <small>{moment(article.pubDate).format('MMMM Do, YYYY')}</small>
              </div>
              <div style={contentStyle}>
                <h5 className="text-dark">
                  <Link
                    to={`/blog/${getBlogPostId(article.guid)}`} 
                    style={titleStyle}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    {article.title}
                  </Link>
                </h5>
                <p className="text-dark mt-2" style={{ fontSize: 'calc(0.9rem + 0.1vw)' }}>
                  {extractFirstParagraphText(article.description).length > 500 ? extractFirstParagraphText(article.description).substring(0, 500) + '...' : extractFirstParagraphText(article.description)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ListGroup>
    </div>
  );
};

export default Blog;