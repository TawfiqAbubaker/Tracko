import { Link } from "react-router-dom";
import workingOut from "../Media/homePage.svg";

export const About = () => {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 border-red-400 p-3">
                <div className="max-w-xl mb-6">
                    <div>
                        <p className="inline-block px-1 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full">
                            From the creator of Bookify
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
                        The best{" "}
                        <span className="inline-block text-cyan-100">
                            Workout Tracker
                        </span>
                        <br className="hidden md:block" />
                        {' '} service in the industry
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Want to achieve your fitness goals? Our website
                        facilitates the implementation of the best
                        science-based muscle building workout method
                        called Progressive Overload.
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row">
                    <Link
                        to="/Tracko/track"
                        className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-salmonOrange hover:bg-lightBlue focus:shadow-outline focus:outline-none"
                    >
                        <span className="mr-3">Get Started</span>
                    </Link>
                    <Link
                        to="/Tracko/track"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        Sign up while it's free!
                    </Link>
                </div>
            </div>
            <div className="relative lg:w-1/2">
                <img
                    className="object-contain w-full h-56 rounded sm:h-96"
                    src={workingOut}
                    alt=""
                />
            </div>
        </div>
    </div>
    )
}