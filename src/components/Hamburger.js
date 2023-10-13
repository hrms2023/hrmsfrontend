const Hamburger = ({isMenuOpen, setIsMenuOpen}) => {
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <button
                onClick={toggleMenu}
                className="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400 p-2"
            >
                {/* Toggle button with the SVG icon */}
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
    )
}
export default Hamburger
