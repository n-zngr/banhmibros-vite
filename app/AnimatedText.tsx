import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    scrollRef: React.RefObject<HTMLDivElement>;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, scrollRef }) => {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false, amount: 0.5 });
    const { scrollYProgress } = useScroll({ 
        container: scrollRef, 
        layoutEffect: false,
        target: textRef,
        offset: ["start end", "end start"]
    });

    /*useEffect(() => {
        const unsubscribe = scrollY.on('change', value => {
            console.log("Scroll Y:", value);
        });

        return () => unsubscribe();
    }, [scrollY]);*/

    return (
        <motion.div ref={textRef} className="text-3xl font-bold whitespace-pre-wrap">
            {text.split('').map((char, index) => {
                const charColor = useTransform(
                    scrollYProgress,
                    [0, 0.5, 1],
                    ['#8E8983', 'rgb(29 26 23)', 'rgb(29 26 23)']
                );

                return (
                    <motion.span
                        key={index}
                        style={{
                            display: 'inline-block',
                            color: charColor,
                            transition: `color 0.5s ease ${index * 0.05}s`
                        }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.div>
    );
};

export default AnimatedText;