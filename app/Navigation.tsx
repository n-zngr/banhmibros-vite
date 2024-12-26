import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        preventScrollOnSwipe: true,
        trackTouch: true
    });

    return (
        <div {...swipeHandlers} className='relative w-full h-full'>
            {/*Top-left naivgation button*/}
            <button
                className='fixed top-4 left-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md' 
                onClick={() => setIsOpen((prev) => !prev)}
            >
                Menu
            </button>
            {/* Overlay for mobile swipe */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Navigation Drawer */}
            <div
                className={`fixed top-0 left-0 h-full bg-white shadow-md w-64 z-50 transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <nav className="flex flex-col space-y-4 p-4">
                <a href="#" className="text-lg font-semibold text-gray-800">
                    Home
                </a>
                <a href="#" className="text-lg font-semibold text-gray-800">
                    About
                </a>
                <a href="#" className="text-lg font-semibold text-gray-800">
                    Services
                </a>
                <a href="#" className="text-lg font-semibold text-gray-800">
                    Contact
                </a>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;