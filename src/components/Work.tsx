import WorkItem from "./WorkItem";

const data = [
  {
    year: 2018,
    title: "Part Time Swimming Coach",
    duration: "> 1 year",
    details:
      "Train and Prepare a team to represent the school in swimming competitions ",
  },
  {
    year: 2018,
    title: "Part Time Hockey Assistant Coach",
    duration: "> 1 year",
    details:
      "Assist the coach in training and preparing the junior hockey team for a school",
  },
  {
    year: 2021,
    title: "Quality Assurance Technician",
    duration: "> 1 year",
    details:
      "Perform Quality Assurance for Video Game Company Products and prepare thorough reporting for feedback contributing to product standards ",
  },
  {
    year: 2023,
    title: "Part-Time Software Tester",
    duration: "1 Year",
    details:
      "Assess Software Applications for clients to make sure that the application is performing to the clients requirements ",
  },
  {
    year: 2024 - 2025,
    title: "Networking Technician",
    duration: "> 1 year",
    details:
      "Executing Networking Solutions and Documentation to ensure successful connections",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040] n-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
