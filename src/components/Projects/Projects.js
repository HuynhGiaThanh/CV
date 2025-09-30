import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Website Quản lý chi tiêu',
      description: '',
      technologies: ['PHP', 'MySQL'],
      demoLink: '#',
      codeLink: 'https://github.com/HuynhGiaThanh/QLChiTieu'
    },
    {
      title: 'Web CV',
      description: '',
      technologies: ['React', 'CSS'],
      demoLink: '#',
      codeLink: 'https://github.com/HuynhGiaThanh/CV'
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="btn btn-small">Demo</a>
                <a href={project.codeLink} className="btn btn-small btn-outline">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;