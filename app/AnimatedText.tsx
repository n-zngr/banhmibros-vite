import React, { useEffect, useRef, useState } from "react";

interface AnimatedTextProps {
    text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;

            const rect = textRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress = Math.min(
                Math.max(1 - rect.top / windowHeight, 0),
                1
            );
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={textRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed overflow-hidden"
        >
            {text.split("").map((char, index) => {
                const charProgress = scrollProgress - index / text.length;
                const clampedProgress = Math.max(Math.min(charProgress * 2, 1), 0);

                return (
                <span
                    key={index}
                    className="inline-block transition-all"
                    style={{
                    color: `rgba(255, 255, 255, ${clampedProgress})`,
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
                );
            })}
        </div>
    );
};

export default AnimatedText;