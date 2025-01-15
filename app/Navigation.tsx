import React from 'react';
import { useSwipeable } from 'react-swipeable';
import BanhMiLogo from './assets/BanhMiBros-Logo.svg'

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
            className={`absolute inset-0 bg-white-500 text-black-500 h-dvh w-screen overflow-y-auto overflow-x-hidden transition-transform ease-in-out duration-500 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Navigation Right */}
            <div className='absolute z-50 top-4 right-4 lg:top-8 lg:right-8 flex flex-col gap-8'>
                <button
                    className="self-end duration-200 hover:text-bmb-orange"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.6274L22.6274 0L25.4558 2.82843L2.82843 25.4558L0 22.6274Z"/>
                        <path d="M2.82843 0L25.4558 22.6274L22.6274 25.4558L0 2.82843L2.82843 0Z"/>
                    </svg>
                </button>
                {/* Address Section (Large Screens) */}
                <div className="hidden md:flex flex-col text-right gap-4 font-medium text-sm md:text-base lg:text-xl">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl circula-bold">Banh Mi Bros</h1>
                    <div>
                        <p>Metzgergasse 15</p>
                        <p>9000 St.Gallen</p>
                    </div>
                    <div className='flex flex-col'>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href='mailto:hello@banh-mi-bros.ch'>hello[at]banh-mi-bros.ch</a>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href='tel:0784809223'>078 480 92 23</a>
                    </div>
                    <div className='flex self-end mt-4'>
                        <img src={BanhMiLogo} alt="Logo" />
                    </div>
                </div>
            </div>
            {/* Navigation Left */}
            <div className='absolute top-4 left-4 lg:top-8 lg:left-8 flex flex-col flex-wrap gap-8 lg:gap-16'>
                <nav className='inline-flex flex-col text-8xl md:text-8xl lg:text-9xl circula-bold md:circula-extrabold lg:circula-black'>
                    <a className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300'>
                        <h1>
                            Home
                        </h1>
                        <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                                fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300' href="/menu">
                        <h1>
                            Menu
                        </h1>
                        <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                                fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300' href="/banh-mi">
                        <h1>
                            Banh Mi
                        </h1>
                        <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                                fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300' href="/order">
                        <h1>
                            Order
                        </h1>
                        <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                                fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a className='flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300' href="/catering">
                        <h1>
                            Catering
                        </h1>
                        <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                                fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </nav>

                {/* Address (Small Screen) */}
                <div className="flex flex-col md:hidden gap-2 text-base font-medium">
                    <h1 className='text-3xl md:text-4xl circula-bold'>
                        Banh Mi Bros
                    </h1>
                    <div>
                        <p>Metzgergasse 15</p>
                        <p>9000 St.Gallen</p>
                    </div>
                    <div className='flex flex-col'>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href='mailto:hello@banh-mi-bros.ch'>hello[at]banh-mi-bros.ch</a>
                        <a className='hover:text-bmb-orange transition-colors duration-300' href='tel:0784809223'>078 480 92 23</a>
                    </div>
                    <div className='mt-2'>
                        <img src={BanhMiLogo} alt="" />
                    </div>
                </div>

                {/* Socials (Small & Medium Screen) */}
                <div className="flex flex-row w-screen flex-wrap gap-4 pb-4 lg:hidden font-poppins font-medium text-sm">
                    <a href="https://instagram.com/banhmibros_ch/" className="flex flex-row gap-2 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-6 w-6" src="./icon-instagram.png" alt="Instagram Icon" />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.facebook.com/people/Banh-Mi-Bros/61558393710150/" className="flex flex-row gap-2 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-6 w-6" src="./icon-facebook.png" alt="Facebook Icon" />
                        <p>Facebook</p>
                    </a>
                    <a href="https://www.tiktok.com/@banh.mi.bros" className="flex flex-row gap-2 pr-4 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-6 w-6" src="./icon-tiktok.png" alt="TikTok Icon" />
                        <p>TikTok</p>
                    </a>
                </div>
            </div>
            {/* Socials Section (Large Screen) */}
            <div className="hidden lg:flex absolute bottom-8 left-8 gap-8 font-poppins font-medium text-xl">
                <a href="https://instagram.com/banhmibros_ch/" className="flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300">
                    <img className="h-8 w-8" src="./icon-instagram.png" alt="Instagram Icon" />
                    <p>Instagram</p>
                </a>
                <a href="https://www.facebook.com/people/Banh-Mi-Bros/61558393710150/" className="flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300">
                    <img className="h-8 w-8" src="./icon-facebook.png" alt="Facebook Icon" />
                    <p>Facebook</p>
                </a>
                <a href="https://www.tiktok.com/@banh.mi.bros" className="flex flex-row gap-4 items-center hover:text-bmb-orange transition-colors duration-300">
                    <img className="h-8 w-8" src="./icon-tiktok.png" alt="TikTok Icon" />
                    <p>TikTok</p>
                </a>
            </div>
        </div>
    );
};

export default Navigation;