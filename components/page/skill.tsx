'use client';

import { Progress } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
    { name: "HTML", value: 36 },
    { name: "CSS", value: 36 },
    { name: "JavaScript", value: 36 },
    { name: "React", value: 36 },
    { name: "Next.js", value: 36 },
    { name: "Tailwind", value: 36 },
];

const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Skill = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div id="skill" className="w-full flex flex-col" ref={ref}>
            <motion.h2 
                className="text-2xl font-bold mb-4 text-black mt-5 ml-5"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariant}
            >
                Skill
            </motion.h2>
            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
                {/* Cột 1 */}
                <ul className="w-full md:w-1/2 px-4">
                    {skills.slice(0, 3).map((skill, index) => (
                        <motion.div 
                            key={skill.name} 
                            className="mb-4"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariant}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
                            </div>
                            <Progress aria-label={skill.name} color="default" value={skill.value} />
                        </motion.div>
                    ))}
                </ul>

                {/* Cột 2 */}
                <ul className="w-full md:w-1/2 px-4">
                    {skills.slice(3).map((skill, index) => (
                        <motion.div 
                            key={skill.name} 
                            className="mb-4"
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={textVariant}
                            transition={{ delay: (index + 3) * 0.2 }}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                <span className="text-sm font-medium text-gray-700">{skill.value}%</span>
                            </div>
                            <Progress aria-label={skill.name} color="default" value={skill.value} />
                        </motion.div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skill;
