import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Assuming article URL is passed as an ID or URL parameter
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gurramakhileshwar333");
        const data = await response.json();
        const article = data.items.find(item => item.guid === id); // Adjust this to match your identifier
        setArticle(article || null);
        console.log(article)
      } catch (error) {
        console.error("Error fetching article content: ", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }

    };

    fetchContent();
  }, [id]);

  if (loading) {
    return (
      <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px' }}>
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>{article.title}</h1>
        <iframe 
          src={article.link} // Assuming `link` is the Medium URL
          title={article.title}
          style={{ width: '100%', height: '600px', border: 'none' }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default BlogPost;
