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

      <div className="grid grid-cols-1">
        {projects.map((project) => (

          <div key={project.title}
               className="p-6 w-full max-w-19/20 mx-auto bg-[var(--project)] text-[var(--foreground)] rounded-2xl overflow-hidden flex flex-col shadow-lg justify-center text-center border-4 border-[var(--foreground)] rounded-xl"
          >
          <h2 className="text-center text-3xl font-semibold mb-4">{project.title}</h2>
          <p className="mb-4">{project.description}</p>

              {project.features.length > 0 && (
                <div className="grid grid-cols-1 gap-16 justify-center">

                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-4 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Text section */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center text-center px-4 py-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-md">{feature.description}</p>
                    </div>
                
                    {/* Image section */}
                    <div className="w-full md:w-2/3 shadow-lg bg-[var(--background)] rounded-xl overflow-hidden border-4 border-[var(--foreground)] rounded-xl">
                      <div className="w-full">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          layout="responsive"
                          objectFit="cover"
                          width={720}
                          height={480}
                          className="rounded"
                        />
                      </div>
                    </div>
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