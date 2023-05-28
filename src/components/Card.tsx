import { skills } from "@/data/skills.jsx";

type Skill = {
  title: string;
  icon: JSX.Element;
};

type SkillType = {
  type: string;
  color: string;
  list: Skill[];
};

type CardProps = {
  type: string;
  dataAos: string,
  dataDelayAos: string
};

function Card({ type, dataAos, dataDelayAos }: CardProps) {
  const filteredSkills = skills.find((skill) => skill.type === type);

  if (!filteredSkills) {
    return null;
  }

  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 rounded-xl bg-gradient-to-r from-[#00cea8] to-[#bf61ff] p-[2px] shadow-xl shadow-[#00cea8]/20" >
      <div className="flex flex-col h-full bg-[#151030] text-white rounded-lg flex-wrap border-2  p-2" >
        <h2 className="text-center text-xs md:text-xl py-1 sm:py-2">{type}</h2>
        <div className="flex justify-start flex-row flex-wrap ">
          {filteredSkills.list.map((skill, index) => (
            <div key={index} className="flex justify-start items-center w-1/3 sm:w-1/2 p-1 text-sm sm:text-md  ">
              <span className="pr-1">{skill.icon}</span>
              <span className="md:text-sm">{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
