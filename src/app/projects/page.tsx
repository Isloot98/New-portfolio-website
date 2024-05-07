import Heading from "@/components/heading";
import Project from "@/components/project";
import projectsData from "../../data/projectsData";

const Projects = () => {
  return (
    <div>
      <Heading as="h1" size="xl" className="flex justify-center">
        Projects
      </Heading>
      <p className="mt-4 flex justify-center">
        Check out a few of the projects I have developed while honing my coding
        skills.
      </p>
      <p className="mt-2 text-left  md:hidden">
        Long press to view more details - Tap to view project
      </p>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          techUsed={project.techUsed}
          timeTaken={project.timeTaken}
          url={project.url}
          imagePath={project.imagePath}
        />
      ))}
    </div>
  );
};

export default Projects;
