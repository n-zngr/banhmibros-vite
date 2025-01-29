import React, { useEffect, useState } from 'react';
import AnimatedText, { AnimatedTextProps } from '../AnimatedText';

interface HeadlineProps {
    children: React.ReactNode;
}

type Language = 'en' | 'de';
type DataAttribute = `data-${Language}`;

const Headline: React.FC<HeadlineProps> = ({ children }) => {
    const [browserLanguage, setBrowserLanguage] = useState<Language>('en');

    useEffect(() => {
        setBrowserLanguage(navigator.language.startsWith('de') ? 'de' : 'en');
    }, []);

    return (
        <div className="px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-32 font-poppins font-semibold text-3xl md:text-5xl lg:text-7xl text-black-500">
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                
                if (child.type === AnimatedText) {
                    const props = child.props as AnimatedTextProps;
                    const dataAttribute = `data-${browserLanguage}` as DataAttribute;
                    const translatedText = props[dataAttribute] || '';
                    
                    return React.cloneElement(child, {
                        children: translatedText
                    } as Partial<AnimatedTextProps>);
                }

                if (child.type === 'h2') {
                    const dataAttribute = `data-${browserLanguage}` as DataAttribute;
                    const translatedText = child.props[dataAttribute];
                    
                    return React.cloneElement(child, { 
                        children: translatedText 
                    } as React.HTMLProps<HTMLHeadingElement>);
                }

                return child;
            })}
        </div>
    );
}

export default Headline;