import React from 'react';
import Tag from './home/Tag';
import ProfileInfo from './home/ProfileInfo';


const Home = () => {
  return (
    <div className="home" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '0 20px',
      color: 'white',
      minHeight: '90vh'
    }}>
      
      <ProfileInfo />
      <div style={{ width: '40%', height: '80vh' }}>
        <Tag />
      </div>
    </div>
  );
};

export default Home;