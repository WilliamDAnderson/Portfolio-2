/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Portfolio section. Holds info on all projects in a long scrollable page.
*/

import { Project } from '@/types/project'; 
import { getProjects } from '@/utils/getProjects'; 
import Image from 'next/image'; 

const PortfolioSection = () => {
  //  Get the projects from json data.
  const projects: Project[] = getProjects(); 

  if (projects.length == 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
        <p className="text-gray-500">No projects found.</p>
      </main>
    );
  }

  return (
    <main className="px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 pt-12">Portfolio</h1>

      <div className="grid gap-10 grid-cols-1">
        {projects.map((project) => (
          <div key={project.title}
               className="max-w-[1080px] mx-auto bg-[var(--foreground)] text-[var(--background)] rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 w-full">
              <h2 className="text-center text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="mb-4">{project.description}</p>

              <div className="text-sm space-y-1">
                <p>
                  <span className="font-medium">Technologies:</span>{' '}
                  {project.technologies.join(', ')}
                </p>
                <p>
                  <span className="font-medium">Concepts:</span>{' '}
                  {project.concepts.join(', ')}
                </p>
              </div>
            </div>

            {project.images.length > 0 && (
              <div className="grid grid-cols-1 gap-2 p-4 pt-0">
                {project.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-full h-auto rounded-md overflow-hidden mx-auto"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - ${index + 1}`}
                      layout="responsive"
                      objectFit="cover"
                      width={540}
                      height={360}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="p-6 text-sm space-y-1">
              <p>
                <span className="font-medium">Programmers:</span>{' '}
                {project.programmers.join(', ')}
              </p>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioSection;