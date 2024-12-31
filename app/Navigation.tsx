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
            className={`absolute inset-0 bg-white-500 text-black-500 h-screen w-screen transition-transform ease-in-out duration-500 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Navigation Button */}
            <div className='absolute top-8 right-8 flex flex-col gap-8 text-lg'>
                <button
                    className="self-end duration-200 hover:text-bmb-orange"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.6274L22.6274 0L25.4558 2.82843L2.82843 25.4558L0 22.6274Z"/>
                        <path d="M2.82843 0L25.4558 22.6274L22.6274 25.4558L0 2.82843L2.82843 0Z"/>
                    </svg>
                </button>
                <div className='flex flex-col text-right gap-4'>
                    <h1 className='md:text-3xl lg:text-5xl circula-bold'>
                        Banh Mi Bros
                    </h1>
                    <div>
                        <p>Metzgergasse 15</p>
                        <p>9000 St.Gallen</p>
                    </div>
                    <div>
                        <p>hello@banhmibros.ch</p>
                        <p>078 480 92 23</p>
                    </div>
                </div>
            </div>
            {/* Navigation Content */}
            <div className='absolute top-8 left-8'>
                <div className='flex flex-col gap-8 lg:gap-16'>
                    <nav className="flex flex-col gap-4 text-6xl md:text-8xl lg:text-9xl sm:circula-bold md:circula-bold lg:circula-black">
                        <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                            <a href="#">
                                Home
                            </a>
                        </h1>
                        <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                            <a href="#">
                                Menu
                            </a>
                        </h1>
                        <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                            <a href="#">
                                Banh Mi
                            </a>
                        </h1>
                        <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                            <a href="#">
                                Order
                            </a>
                        </h1>
                        <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                            <a href="#">
                                Catering
                            </a>
                        </h1>
                    </nav>
                    <div className='flex flex-row gap-8 font-poppins font-medium text-2xl'>
                        <a href="" className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300'>
                            <img src="./app/assets/icon-instagram.png" alt="" />
                            <p>
                                Instagram
                            </p>
                        </a>
                        <a href="" className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300'>
                            <img src="./app/assets/icon-facebook.png" alt="" />
                            <p>
                                Facebook
                            </p>
                        </a>
                        <a href="" className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300'>
                            <img src="./app/assets/icon-tiktok.png" alt="" />
                            <p>
                                TikTok
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;