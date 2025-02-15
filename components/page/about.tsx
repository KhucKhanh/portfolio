'use client';

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const About = () => {
    return (
        <div id="about" className="ml-5">
            <motion.h2
                className="text-2xl font-bold mb-4 text-black"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Chỉ chạy 1 lần khi vào màn hình 30%
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                About Me
            </motion.h2>

            {/* Layout chính */}
            <div className="flex flex-col overflow-hidden md:flex-row items-center md:items-start w-full gap-4 md:gap-8">
                {/* Hình ảnh */}
                <motion.img
                    src="/meme-meo.jpg"
                    alt="khanh"
                    className="w-full max-w-xs md:w-60 h-60 mx-auto md:ml-5 mb-4 md:mb-0 rounded-lg object-cover"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Thông tin cá nhân */}
                <motion.div
                    className="flex flex-col w-full md:text-left"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h1 className="text-2xl font-bold mb-4 text-black">Fullstack Developer</h1>
                    <h1 className="text-2xl mb-2 text-black">This is my bio</h1>

                    <div className="flex flex-col md:flex-row w-full">
                        <ul className="flex-1">
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>
                                Full name: <span className="font-normal"> Khúc Gia Khánh</span>
                            </motion.li>
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}>
                                Birthday: <span className="font-normal"> 27/08/2004</span>
                            </motion.li>
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>
                                Phone: <span className="font-normal"> 0842618148</span>
                            </motion.li>
                        </ul>
                        <ul className="flex-1">
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}>
                                Age: <span className="font-normal">21</span>
                            </motion.li>
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}>
                                Email: <span className="font-normal">khucgiakhanh27082004@gmail.com</span>
                            </motion.li>
                            <motion.li className="text-xl font-bold mb-2 text-black" variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}>
                                Github: <a href="https://github.com/KhucKhanh/" className="font-normal">https://github.com/KhucKhanh</a>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;
