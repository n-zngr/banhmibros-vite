export default function Button() {
    return (
        <button className="flex justify-center items-center gap-8 rounded-full py-4 px-10 border-4 border-black-500 group relative overflow-hidden">
            <p className="font-circula circula-bold text-3xl">Arrow Button</p>
            <div className="flex items-center justify-center relative w-8 h-12 overflow-hidden">
                {/* First arrow */}
                <svg
                className="absolute group-hover:translate-y-12 transition-transform duration-300 ease-in-out"
                width="32"
                height="48"
                viewBox="0 0 32 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.0102 29.9551C31.6835 30.6614 31.6835 31.8064 31.0102 32.5127L17.219 46.9805C16.5458 47.6868 15.4542 47.6868 14.781 46.9805L0.989768 32.5127C0.316542 31.8064 0.316542 30.6614 0.989768 29.9551C1.663 29.2489 2.75451 29.2489 3.42774 29.9551L14.2761 41.3357V2.29827C14.2761 1.29948 15.0479 0.489796 16 0.489796C16.9521 0.489796 17.7239 1.29948 17.7239 2.29827V41.3357L28.5723 29.9551C29.2455 29.2489 30.337 29.2489 31.0102 29.9551Z"
                    fill="#1D1A17"
                />
                </svg>
                {/* Second arrow */}
                <svg
                    className="absolute -top-12 group-hover:translate-y-12 transition-transform duration-300 ease-in-out"
                    width="32"
                    height="48"
                    viewBox="0 0 32 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.0102 29.9551C31.6835 30.6614 31.6835 31.8064 31.0102 32.5127L17.219 46.9805C16.5458 47.6868 15.4542 47.6868 14.781 46.9805L0.989768 32.5127C0.316542 31.8064 0.316542 30.6614 0.989768 29.9551C1.663 29.2489 2.75451 29.2489 3.42774 29.9551L14.2761 41.3357V2.29827C14.2761 1.29948 15.0479 0.489796 16 0.489796C16.9521 0.489796 17.7239 1.29948 17.7239 2.29827V41.3357L28.5723 29.9551C29.2455 29.2489 30.337 29.2489 31.0102 29.9551Z"
                    fill="#1D1A17"
                />
                </svg>
            </div>
        </button>
    )
}