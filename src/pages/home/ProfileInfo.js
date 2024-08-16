import React from 'react';
import SocialLinks from '../../components/SocialLinks';

const ProfileInfo = () => {
  return (
    <div className="profile-info" style={{ 
      width: '55%', 
      paddingTop: '15px',
      color: 'black',
      backgroundColor: 'white',
      margin: "60px"
    }}>
      <h1 style={{ color: 'black' }}>
        <em>Hey, I am Akhileshwar</em>
        <h3>Engineer, Learner, and Tinkerer</h3>
      </h1>
      <br />
 
      <p>I'm a 22 year old software engineer with a passion for scalable backend systems, distributed datastores, infrastructure design, and the exciting world of GenAI.</p>
      
      <h3>My Journey So Far</h3>
      <p>My experience spans a diverse range of technologies and projects:</p>
      <ul>
        <li>Architecting robust REST APIs and implementing efficient gRPC and WebSocket solutions</li>
        <li>Developing cutting-edge GenAI features</li>
        <li>Implementing state-of-the-art RAG (Retrieval Augmented Generation) algorithms</li>
        <li>Creating AI-powered automations by integrating services like Shopify, Notion, and Firebase</li>
        <li>Implementing robust CI/CD pipelines with Pulumi for AWS and Cloud Build for GCP triggered by GitHub actions</li>
        <li>Dabbling in frontend development with React and HTMX</li>
      </ul>

      <p>Currently, I'm expanding my horizons by diving deeper into:</p>
      <ul>
        <li>Advanced concurrency programming paradigms</li>
        <li>Systems engineering</li>
        <li>Live video streaming</li>
        <li>Core machine learning and deep learning concepts</li>
      </ul>

    
      <p>I'm also an active contributor to open-source project <a href="https://github.com/DiceDB/dice" target="_blank" rel="noopener noreferrer">DiceDB</a>, a drop-in replacement for Redis that offers SQL-based real-time reactivity. My major contributions to DiceDB include implementing JSON as a datatype and adding support for JSONPath operations, similar to Redis. These enhancements significantly expand DiceDB's capabilities in handling complex data structures.
      <br /> I'm always on the lookout for intriguing projects where I can make meaningful contributions.</p>

      <blockquote style={{ 
        backgroundColor: '#eee', 
        padding: '15px', 
        borderLeft: '5px solid #000',
        marginBottom: '20px',
        color: 'black'
      }}>
        <p>💡 My experience in AI-first companies has shaped me into a versatile engineer capable of wearing multiple hats. I thrive on challenges, constantly pushing myself to excel and grow. This journey has equipped me with a unique blend of technical expertise and problem-solving skills, enabling me to tackle complex issues head-on. I'm driven by the potential of cutting-edge technology to create innovative, impactful solutions. Whether it's crafting sophisticated algorithms, optimizing systems, or collaborating across teams.</p>
      </blockquote>

      <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />

      <p>Connect with me on my social platforms below, where I share insights about my ongoing learning journey and experiences in the tech world.</p>
      <SocialLinks/>
    </div>
  );
};

export default ProfileInfo;