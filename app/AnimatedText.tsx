import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type AnimatedTextProps = {
    text: string;
    scrollRef: React.RefObject<HTMLElement>;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, scrollRef }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        container: scrollRef,
        offset: ["0 1", "0 0.25"]
    });

    return (
        <div ref={ref} style={{ overflow: "hidden" }}>
            {text.split("").map((char, index) => {
                const colorProgress = useTransform(
                    scrollYProgress,
                    [index / text.length, (index + 1) / text.length],
                    ["#8E8983", "#1D1A17"]
                );
                return (
                <motion.span
                    key={index}
                    style={{ display: "inline-block", color: colorProgress }}
                >
                    {char}
                </motion.span>
                );
            })}
        </div>
    );
};

export default AnimatedText;