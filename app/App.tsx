import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import DatabaseViewer from './DatabaseViewer';
import Navigation from './Navigation';
import BanhMi from '../public/BanhMi.png';
import { useSwipeable } from 'react-swipeable';

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
            {/* Toggle Navigation Button */}
            <button
                className="absolute top-4 left-4 z-50 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                Toggle Navigation
            </button>
            <header className='w-full h-screen'>
            <div className='relative h-screen'>
                <img
                src={BanhMi}
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