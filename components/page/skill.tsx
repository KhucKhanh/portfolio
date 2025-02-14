import { Progress } from "@heroui/react";

const skills = [
    { name: "HTML", value: 36 },
    { name: "CSS", value: 36 },
    { name: "JavaScript", value: 36 },
    { name: "React", value: 36 },
    { name: "Next.js", value: 36 },
    { name: "Tailwind", value: 36 },
];

const Skill = () => {
    return (
        <div id="skill" className="w-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-black mt-5 ml-5">Skill</h2>
            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
                {/* Cột 1 */}
                <ul className="w-full md:w-1/2 px-4">
                    {skills.slice(0, 3).map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
                            </div>
                            <Progress aria-label={skill.name} color="default" value={skill.value} />
                        </div>
                    ))}
                </ul>

                {/* Cột 2 */}
                <ul className="w-full md:w-1/2 px-4">
                    {skills.slice(3).map((skill) => (
                        <div key={skill.name} className="mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
                            </div>
                            <Progress aria-label={skill.name} color="default" value={skill.value} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skill;
