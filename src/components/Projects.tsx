import gameHubImg from "../assets/Gamehub.png";
import sharksImg from "../assets/Sharks.png";
import ProjectItemGameHub from "./ProjectItemGameHub";
import ProjectItemSharks from "./ProjectItemSharks";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8"></p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItemGameHub img={gameHubImg} title="Game Hub" />
        <ProjectItemSharks img={sharksImg} title="Sharks Website" />
      </div>
    </div>
  );
};

export default Projects;
