import ProjectItem from "./ProjectItem";
import gameHubImg from "../assets/Gamehub.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={gameHubImg} title="Game Hub" />
      </div>
    </div>
  );
};

export default Projects;
