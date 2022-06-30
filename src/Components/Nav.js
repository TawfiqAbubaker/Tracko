import { useState } from "react";
import "../index.css";
import logo from "../Media/Dumbell.png";
import { Link } from "react-router-dom";
export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50 px-10 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 backdrop-filter backdrop-blur-lg">
            <div className="lg:px-12 relative flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/Tracko/"
                        aria-label="goTrack"
                        title="goTrack"
                        className="inline-flex items-center mr-8"
                    >
                        <img src={logo} alt="" className="inline-flex w-4" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                            TRACKO
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/Tracko/"
                                aria-label="Our Service"
                                title="Our service"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Tracko/track"
                                aria-label="Track your workouts"
                                title="Track your workouts"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Track
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to="/Tracko/Visualize"
                                aria-label="Visualize your progress"
                                title="Visualize your progress"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Visualize
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Tracko/Feedback"
                                aria-label="Submit feedback"
                                title="Send feedback"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Feedback
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/Tracko/"
                            aria-label="Login"
                            title="Login"
                            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lightBlue hover:bg-sky-300 focus:shadow-outline focus:outline-none"
                            onClick={()=> {alert('This feature will be implemented soon.')}}
                        >
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Tracko/"
                            className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-darkBlue-100 hover:bg-darkBlue-200 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                            onClick={()=> {alert('This feature will be implemented soon.')}}
                        >
                            Sign up
                        </Link>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="goTrack"
                                            title="goTrack"
                                            className="inline-flex items-center"
                                        >
                                            <img
                                                src={logo}
                                                alt=""
                                                className="inline-flex w-4"
                                            />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Tracko
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg
                                                className="w-5 text-gray-600"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our service"
                                                title="Our service"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Tracko/track"
                                                aria-label="Track your progress"
                                                title="Track your progress"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Track
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link
                                                to="/Tracko/Visualize"
                                                aria-label="Visualize your progress"
                                                title="Visualize your progress"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Visualize
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Tracko/Feedback"
                                                aria-label="View your past workouts"
                                                title="View your past workouts"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Feedback
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Tracko/"
                                                aria-label="Login"
                                                title="Sign in"
                                                className="font-medium tracking-wide text-darkBlue-100 transition-colors duration-200 hover:text--purple-accent-400"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/Tracko/"
                                                className="font-medium tracking-wide text-darkBlue-100 transition-colors duration-200 hover:text--purple-accent-400"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
