import React from 'react';
import { Card, ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import projectsData from '../constants/projects.json';

const ProjectCard = ({ project }) => (
  <Card 
    style={{ 
      backgroundColor: '#f8f9fa', 
      color: 'black', 
      border: '1px solid #ddd', 
      transition: 'all 0.3s ease',
      height: '100%',
    }}
    className="project-card"
  >
    <Card.Body className="d-flex flex-column">
      <Card.Title style={{ fontSize: 'calc(1.1rem + 0.3vw)', fontWeight: 'bold', marginBottom: '10px' }}>
        {project.title}
      </Card.Title>
      <ListGroup variant="flush" className="flex-grow-1">
        {project.description.map((desc, idx) => (
          <ListGroup.Item 
            key={idx} 
            style={{ 
              backgroundColor: '#f8f9fa', 
              color: 'black', 
              borderColor: '#f8f9fa', 
              padding: '5px 0', 
            }}
          >
            <ReactMarkdown>{desc}</ReactMarkdown>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {project.githubLink && (
        <Button 
          variant="outline-dark" 
          href={project.githubLink} 
          target="_blank" 
          style={{ 
            marginTop: '15px',
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid black',
            width: '100%',
            transition: 'all 0.3s ease',
          }}
          className="github-button"
        >
          View on GitHub
        </Button>
      )}
    </Card.Body>
  </Card>
);

const Projects = () => {
  return (
    <Container fluid style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh', padding: '20px' }}>
      <h1 className="text-center" style={{ marginBottom: '30px', fontSize: 'calc(1.5rem + 1.5vw)' }}>Projects</h1>

      <Row>
        <Col xs={12} lg={8} className="mb-4">
          <h2 style={{ marginBottom: '20px', textAlign: "center", fontSize: 'calc(1.3rem + 0.6vw)' }}>Completed Projects</h2>
          <Row>
            {projectsData.completedProjects && projectsData.completedProjects.length > 0 ? (
              projectsData.completedProjects.map((project, index) => (
                <Col sm={12} md={6} key={index} className="mb-4">
                  <ProjectCard project={project} />
                </Col>
              ))
            ) : (
              <p>No completed projects available at the moment.</p>
            )}
          </Row>
        </Col>
        
        <Col xs={12} lg={4}>
          <h2 style={{ marginBottom: '20px', textAlign: "center", fontSize: 'calc(1.3rem + 0.6vw)' }}>Work in Progress</h2>
          <Row>
            {projectsData.wipProjects && projectsData.wipProjects.length > 0 ? (
              projectsData.wipProjects.map((project, index) => (
                <Col xs={12} key={index} className="mb-4">
                  <ProjectCard project={project} />
                </Col>
              ))
            ) : (
              <p>No work-in-progress projects available at the moment.</p>
            )}
          </Row>
        </Col>
      </Row>

      <style jsx>{`
        @media (max-width: 991px) {
          .container-fluid {
            padding-left: 5px;
            padding-right: 5px;
          }
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .github-button:hover {
          background-color: white !important;
          color: black !important;
        }
      `}</style>
    </Container>
  );
};

export default Projects;