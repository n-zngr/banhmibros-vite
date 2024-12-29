import React from 'react';
import { useSwipeable } from 'react-swipeable';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen }) => {
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div
            {...swipeHandlers}
            className={`fixed inset-0 z-50 bg-white h-screen w-screen transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Navigation Button */}
            <button
                className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
            </button>

            {/* Navigation Content */}
            <nav className="flex flex-col space-y-4 p-8 h-full">
                <h1>
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        Home
                    </a>
                </h1>
                <h1>
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        About
                    </a>
                </h1>
                <h1>
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        Services
                    </a>
                </h1>
                <h1>
                    <a href="#" className="text-2xl font-semibold text-gray-800">
                        Contact
                    </a>
                </h1>
            </nav>
        </div>
    );
};

export default Navigation;