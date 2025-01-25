import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedSquareProps {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const AnimatedSquare: React.FC<AnimatedSquareProps> = ({ scrollRef }) => {
    const { scrollY } = useScroll({ container: scrollRef });
    const scale = useTransform(scrollY, [2000, 2500], [1, 1.5]);

    useEffect(() => {
        const unsubscribe = scrollY.on('change', value => {
            console.log("Scroll Y:", value);
        });

        return () => unsubscribe();
    }, [scrollY]);

    return (
        <motion.div
            style={{
                scale,
                width: '500px',
                height: '400px',
                backgroundColor: 'blue',
                margin: '1500px auto',
                borderRadius: '20px'
            }}
        >
        </motion.div>
    );
};

export default AnimatedSquare;