import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type AnimatedTextProps = {
    children?: React.ReactNode;
    scrollRef: React.RefObject<HTMLElement>;
    "data-en"?: string;
    "data-de"?: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, scrollRef }) => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const containerRef = isMounted ? scrollRef : null;

    const { scrollYProgress } = useScroll({
        target: ref,
        container: containerRef || undefined,
        offset: ["0 1", "0 0.25"],
        layoutEffect: false
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const text = React.Children.toArray(children || '').join('');

    return (
        <div ref={ref} style={{ 
            overflow: "hidden", 
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            position: 'relative'
        }}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: "inline-block",
                        color: useTransform(
                            scrollYProgress,
                            [index / text.length, (index + 1) / text.length],
                            ["#8E8983", "#1D1A17"]
                        ),
                        whiteSpace: 'pre-wrap',
                        visibility: isMounted ? 'visible' : 'hidden'
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;