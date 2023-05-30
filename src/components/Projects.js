import React from "react";

const projects = [
  {
    title: "Projek 1",
    description: "Deskripsi tentang ini",
    imageUrl: "https://example.com/project1.jpg",
    projectUrl: "https://example.com/project1",
  },
  {
    title: "Projek 1",
    description: "Deskripsi tentang ini",
    imageUrl: "https://example.com/project1.jpg",
    projectUrl: "https://example.com/project1",
  },
  {
    title: "Projek 1",
    description: "Deskripsi tentang ini",
    imageUrl: "https://example.com/project1.jpg",
    projectUrl: "https://example.com/project1",
  },
];



const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.projectUrl}>View Project</a>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default Projects;
