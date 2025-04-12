/*
    Name:           William Anderson
    Date:           April 10, 2025
    Description:    Portfolio section. Holds info on all projects in a long scrollable page.
*/

import { Project } from '@/types/project'; 
import { getProjects } from '@/utils/getProjects'; 
import Image from 'next/image'; 

const projects: Project[] = getProjects().sort((projectA, projectB) => {
  if (projectB.year != projectA.year) return projectB.year - projectA.year; 
  return projectA.priority - projectB.priority;
});

console.log(projects.map(p => `${p.year} - ${p.title}`));

const groupedProjects: { [year: number]: Project[] } = {};
for (const project of projects) {
  if (!groupedProjects[project.year]) {
    groupedProjects[project.year] = [];
  }
  groupedProjects[project.year].push(project);
}

const PortfolioSection = () => {
  if (projects.length == 0) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
        <p className="text-gray-500">No projects found.</p>
      </main>
    );
  }

  return (
    <div className="px-4">
      {Object.entries(groupedProjects)
        .sort(([year1], [year2]) => Number(year2) - Number(year1)) // <-- Sort years descending
        .map(([year, yearProjects]) => (
          <div key={year}>
            {/* Year header (only one per year) */}
            <div className="w-[95%] max-w-[1536px] mx-auto">
              <h1 className="text-4xl font-bold text-center pb-8 pt-8 border-b-4 border-t-4 border-[var(--foreground)]">
                {year}
              </h1>
            </div>
  
            {/* Projects for this year */}
            {yearProjects.map((project) => (
              <div key={project.title} className="pt-16 pb-16 w-[95%] max-w-[1536px] mx-auto">
                <div className="p-6 bg-[var(--project)] text-[var(--foreground)] rounded-2xl overflow-hidden flex flex-col shadow-2xl justify-center text-center rounded-xl">
                <h2 className="text-center text-3xl font-semibold mb-4">{project.title}</h2>
                <p className="mb-4">{project.description}</p>

              {/* Project features */}
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
                      <div className="w-full md:w-2/3 shadow-2xl bg-[var(--background)] rounded-xl overflow-hidden">
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
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

export default PortfolioSection;