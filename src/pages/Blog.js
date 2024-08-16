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

  if (loading) {
    return (
      <div className="text-center" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px 160px' }}>
        <Spinner animation="border" variant="dark" />
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="text-center" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px 160px' }}>
        <p>No blog posts available at the moment. Please check back later.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px 160px' }}>
      <ListGroup variant="flush">
        {articles.map((article, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '50px', borderBottom: '1px solid #ddd' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flexBasis: '30%', color: '#666' }}>
                <small>{moment(article.pubDate).format('MMMM Do, YYYY')}</small>
              </div>
              <div style={{ flexBasis: '70%' }}>
                <h5 className="text-dark">
                  <Link
                    to={`/blog/${getBlogPostId(article.guid)}`} 
                    style={{ 
                      color: 'black', 
                      textDecoration: 'none', 
                      fontFamily: 'Times New Roman, serif',
                      fontSize: "25px"
                    }}
                    onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                  >
                    {article.title}
                  </Link>
                </h5>
                <p className="text-dark mt-2">
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