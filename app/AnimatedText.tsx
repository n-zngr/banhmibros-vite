import React, { useRef, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

const interpolateColor = (
        value: number,
        inputRange: [number, number],
        outputRange: [string, string]
    ): string => {
    const [inputStart, inputEnd] = inputRange;
    const [outputStart, outputEnd] = outputRange;
    
    const ratio = Math.max(0, Math.min(1, (value - inputStart) / (inputEnd - inputStart)));
    
    const r1 = parseInt(outputStart.slice(1, 3), 16);
    const g1 = parseInt(outputStart.slice(3, 5), 16);
    const b1 = parseInt(outputStart.slice(5, 7), 16);
    
    const r2 = parseInt(outputEnd.slice(1, 3), 16);
    const g2 = parseInt(outputEnd.slice(3, 5), 16);
    const b2 = parseInt(outputEnd.slice(5, 7), 16);
    
    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);
    
    return `rgb(${r}, ${g}, ${b})`;
};

export type AnimatedTextProps = {
    children?: React.ReactNode;
    scrollRef: React.RefObject<HTMLElement>;
    "data-en"?: string;
    "data-de"?: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, scrollRef }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const spansRef = useRef<Array<HTMLSpanElement | null>>([]);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollRef,
        offset: ["0 1", "0 0.25"],
        layoutEffect: false
    });

    const text = React.Children.toArray(children || '').join('');
    const progress = useTransform(scrollYProgress, [0, 1], [0, text.length]);

    useEffect(() => {
        const unsubscribe = progress.onChange((value) => {
            spansRef.current.forEach((span, index) => {
                if (!span) return;
                
                const color = interpolateColor(
                value,
                [index - 0.5, index + 0.5],
                ["#8E8983", "#1D1A17"]
                );
        
                span.style.color = color;
            });
        });
        
        return () => unsubscribe();
    }, [text, progress]);

    return (
        <div 
            ref={containerRef}
            style={{ 
                overflow: "hidden", 
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                position: 'relative'
            }}
        >
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    ref={(el) => (spansRef.current[index] = el)}
                    style={{
                        display: "inline-block",
                        whiteSpace: 'pre-wrap',
                        color: "#8E8983"
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default AnimatedText;