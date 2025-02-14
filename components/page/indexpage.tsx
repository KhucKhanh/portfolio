'use client';

import { useEffect, useRef } from "react";
import {Typed} from "react-typed"; // Không destructure { Typed }

const IndexPage = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Developer", "Designer", "Fullstack"],
                typeSpeed: 60,
                backSpeed: 50,
                loop: true,
            });

            return () => typed.destroy(); // Cleanup khi component unmount
        }
    }, []);

    return (
        <div className="flex w-full h-screen bg-slate-400 justify-center items-center">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
                    Hello, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text">
                        Khanh
                    </span>
                </h1>
                <p className="text-4xl font-semibold text-black mt-4">
                    <span ref={typedRef} className=" pr-2 animate-pulse" />
                </p>
            </div>
        </div>
    );
};

export default IndexPage;
