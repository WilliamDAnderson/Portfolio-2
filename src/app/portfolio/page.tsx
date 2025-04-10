/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Projects page. Holds info on all projects in a long scrollable page.
*/

import { Project } from '../../types/project'; 
import { getProjects } from '../../utils/getProjects'; 

const PortfolioPage = async () => {
  //  Get the projects from json data.
  const projects: Project[] = getProjects(); 

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.length == 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <h2>{project.title}</h2>
              <p><strong>priority:</strong> {project.tag}</p>
              <p><strong>Year:</strong> {project.year}</p>
              <p><strong>Description:</strong>{project.description}</p>
              <ul>
                <li><strong>Technologies:</strong> {project.technologies.join(', ')}</li>
                <li><strong>Concepts:</strong> {project.concepts.join(', ')}</li>
                <li><strong>Programmers:</strong> {project.programmers.join(', ')}</li>
              </ul>
              <div>
                {project.images.map((image, index) => (
                  <img key={index} src={`/${image}`} alt={`${project.title} - ${index}`} width={540} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PortfolioPage;