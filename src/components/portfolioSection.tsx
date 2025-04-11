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
    <div className="px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 pt-12">Portfolio</h1>

      <div className="grid gap-10 grid-cols-1">
        {projects.map((project) => (

          <div key={project.title}
               className="p-6 w-full max-w-[1080px] mx-auto bg-[var(--foreground)] text-[var(--background)] rounded-2xl overflow-hidden flex flex-col"
          >
          <h2 className="text-center text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>

              {project.features.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-[var(--background)] text-[var(--foreground)] rounded-xl shadow-md p-4"
                    >

                      <h3 className="text-lg font-semibold mb-1 text-center">{feature.title}</h3>
                      <div className="w-full mb-3 rounded-md overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={`${feature.title}`}
                          layout="responsive"
                          objectFit="cover"
                          width="720"
                          height="540"
                          className="rounded"
                        />
                      </div>
                      <p className="text-sm">{feature.description}</p>

                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;