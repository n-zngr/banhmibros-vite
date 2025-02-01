import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function Link({ href, className = '', children }: LinkProps) {
    const [hover, setHover] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (textRef.current) {
            setTimeout(() => {
                const { width, height } = textRef.current!.getBoundingClientRect();
                setDimensions({ width, height });
            }, 0);
        }
    }, [children, className]);

    const bounceVariant = {
        initial: { y: 0, transition: { type: 'spring', stiffness: 175, damping: 15 } },
        hover: { y: dimensions.height, transition: { type: 'spring', stiffness: 175, damping: 15 } }
    };

    return (
        <a
            href={href}
            className={`relative ${className} text-nowrap inline-block overflow-hidden cursor-pointer`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="relative overflow-hidden" style={{ width: dimensions.width, height: dimensions.height }}>
                <motion.p ref={textRef} className="absolute top-0 inline-block" variants={bounceVariant} initial="initial" animate={hover ? 'hover' : 'initial'}>
                    {children}
                </motion.p>
                <motion.p className="absolute inline-block" style={{ top: -dimensions.height }} variants={bounceVariant} initial="initial" animate={hover ? 'hover' : 'initial'}>
                    {children}
                </motion.p>
            </div>
        </a>
    );
}