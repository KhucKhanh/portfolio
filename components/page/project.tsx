'use client';

import { HoverEffect } from "../ui/card-hover-effect";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const projects = [
  {
    title: "2048",
    description: "Trò chơi 2048 cổ điển với giao diện đơn giản, dễ chơi nhưng đầy thách thức.",
    link: "https://github.com/KhucKhanh/game-project",
  },
  {
    title: "SoundNova",
    description: "Ứng dụng nghe nhạc trên Android với giao diện hiện đại và nhiều tính năng tiện ích.",
    link: "https://github.com/buiftheescoong/HKI2425_MobDev20_Nhom06",
  },
  {
    title: "Ném vào cho đẹp",
    description: "Dự án thử nghiệm sáng tạo, khám phá các ý tưởng và tính năng mới.",
    link: "https://google.com",
  },
];

const Project = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold mb-4 text-black mt-5 ml-5">Project</h2>
      <HoverEffect items={projects} className="max-w-5xl mx-auto px-8" />
    </motion.div>
  );
};

export default Project;
