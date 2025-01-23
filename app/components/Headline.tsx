import React from 'react';

interface HeadlineProps {
    children: React.ReactNode;
}

const Headline: React.FC<HeadlineProps> = ({ children }) => {
    const browserLanguage = navigator.language.startsWith('de') ? 'de' : 'en';

    return (
        <div className="px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-32 font-poppins font-semibold text-3xl md:text-5xl lg:text-7xl text-black-500">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === 'h2') {
                    const text = child.props[`data-${browserLanguage}`];
                    return <h2>{text}</h2>;
                }
                return child;
            })}
        </div>
    );
}

export default Headline;