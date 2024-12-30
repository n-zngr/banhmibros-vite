import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import DatabaseViewer from './DatabaseViewer';
import Navigation from './Navigation';
import { useSwipeable } from 'react-swipeable';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [navHover, setNavHover] = useState(false);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div {...swipeHandlers} className="relative h-screen overflow-hidden">
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                isOpen ? 'translate-x-full' : ''
                } overflow-y-auto`}
            >
                <header className='relative w-full h-screen'>
                    {/* Toggle Navigation Button */}
                    <div className='absolute top-8 left-8'>
                        
                        <div className='flex flex-col text-9xl text-white-500 gap-4 transition-colors'>
                            <div className='flex'>
                                <button
                                    className="block transition duration-200 hover:text-bmb-orange"
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    onMouseEnter={() => setNavHover(true)}
                                    onMouseLeave={() => setNavHover(false)}
                                    >
                                    <svg
                                        width="32"
                                        height="12"
                                        viewBox="0 0 32 12"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Top path */}
                                        <path d="M0 0H32V2H0V0Z" />
                                        {/* Bottom path scales dynamically */}
                                        <path
                                        d="M0 10H24V12H0V10Z"
                                        className={`transition-transform duration-300 origin-left ${
                                            navHover ? 'scale-x-133' : 'scale-x-100'
                                        }`}
                                        />
                                    </svg>
                                </button>
                            </div>
                            <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                                <a href="/home">Home</a>
                            </h1>
                            <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                                <a href="/menu">Menu</a>
                            </h1>
                            <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                                <a href="/banhmi">Banh Mi</a>
                            </h1>
                            <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                                <a href="/contact">Contact</a>
                            </h1>
                        </div>
                    </div>
                    <div className='h-screen'>
                        <img
                        src='./BanhMi.png'
                        alt=''
                        className='w-full h-full object-cover object-center'
                        />
                    </div>
                </header>
                <main className='p-8'>
                <h1 className='text-4xl text-bmb-green'>
                    Welcome to My App
                </h1>
                <p className="mt-4 text-lg font-bold font-poppins text-black-500">
                    Swipe right to open the navigation, or click the button in the
                    top-left corner.
                </p>
                <div className="flex gap-4">
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="w-16 h-16" alt="React logo" />
                    </a>
                </div>
                <h1 className="mt-6 text-2xl">Vite + React</h1>
                <DatabaseViewer />
                </main>
            </div>
        </div>
    );
}

export default App;