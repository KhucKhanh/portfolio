'use client';

import { useEffect, useRef } from "react";
import {Typed} from "react-typed"; // Không destructure { Typed }

const IndexPage = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Hello, I'm Khanh"],
                typeSpeed: 40,
                backSpeed: 50,
                loop: true,
            });

            return () => typed.destroy(); // Cleanup khi component unmount
        }
    }, []);

    return (
        <div className="flex w-full h-screen justify-center items-center" id="home">
            <div className="text-center">
                <h1 className="text-red-700 text-4xl font-bold">
                    <span ref={typedRef} /> {/* Gán ref vào span */}
                </h1>
                <p className="text-black text-2xl">Fullstack Developer</p>
            </div>
        </div>
    );
};

export default IndexPage;
