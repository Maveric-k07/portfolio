import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import experienceData from '../constants/experience.json';
import '../index.css'

const Experience = () => {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      color: 'black', 
      padding: '15px 5%',
      margin: '0 auto'
    }}>
      <h2 className="my-4" style={{ fontSize: 'calc(1.5rem + 1vw)' }}><strong>Experience</strong></h2>
      {experienceData && experienceData.length > 0 ? (
        experienceData.map((experience, index) => (
          <Card
            key={index}
            className="mb-3 shadow-sm border experience-card"
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: 'none',
              marginTop: '30px',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
          >
            <Card.Body style={{ 
              paddingLeft: '65px', 
              paddingTop: '20px', 
              paddingBottom: '20px',
              '@media (maxWidth: 768px)': {
                paddingLeft: '15px'
              }
            }}>
              <Image
                src={experience.logo}
                roundedCircle
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '10px',
                  width: '45px',
                  height: '45px',
                  transition: 'all 0.3s ease',
                  '@media (maxWidth: 768px)': {
                    position: 'static',
                    marginBottom: '10px'
                  }
                }}
                alt={`${experience.company} logo`}
              />
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '10px',
                '@media (minWidth: 768px)': {
                  flexDirection: 'row',
                  alignItems: 'center'
                }
              }}>
                <Card.Title style={{ 
                  fontSize: 'calc(1.1rem + 0.5vw)', 
                  fontWeight: 'bold', 
                  marginBottom: '5px'
                }}>
                  {experience.company}
                </Card.Title>
                <span style={{ 
                  fontSize: 'calc(0.8rem + 0.2vw)', 
                  color: 'gray', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <FaClock style={{ marginRight: '3px' }} /> {experience.duration_months}
                </span>
              </div>
              <p style={{ 
                fontSize: 'calc(0.7rem + 0.2vw)', 
                color: 'gray', 
                marginBottom: '10px' 
              }}>
                <FaCalendarAlt /> {experience.duration} | <FaMapMarkerAlt /> {experience.location} | <FaBriefcase /> {experience.type}
              </p>
              <ul style={{ paddingLeft: '20px', marginBottom: '0' }}>
                {experience.roles.map((role, idx) => (
                  <li key={idx} style={{ 
                    marginBottom: '5px', 
                    fontSize: 'calc(0.8rem + 0.2vw)' 
                  }}>
                    {experience.company === "being.app" && role.includes("Tech Crunch participation") ? (
                      <>
                        {' '}
                        <a href="https://techcrunch.com/2023/09/28/meet-being-app-wants-help-users-map-out-address-mental-health-concerns/" target="_blank" rel="noopener noreferrer">
                          Tech Crunch 
                        </a> participation showcasing many AI features that I've implemented.
                      </>
                    ) : (
                      role
                    )}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="text-center">No experience data available at the moment.</p>
      )}
    </div>
  );
};

export default Experience;