interface ProjectItemProps {
  img: string;
  title: string;
}

const ProjectItemSharks = ({ img, title }: ProjectItemProps) => {
  return (
    <div className="relative flex items-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <a href="https://sharks-swimming-club.vercel.app/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            Visit
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItemSharks;
