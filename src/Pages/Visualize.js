import { LineChart } from "../Components/LineChart";
import { Footer } from "../Components/Footer";

export const Visualize = () => {
    return (
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[90vh]">
            <div className="w-[80vw] mx-auto pt-16">
                <h2 className="max-w-lg mb-6  font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Visualize your progress.
                </h2>
                <div className="mb-3">
                    <label htmlFor="graphContent" className="text-xl mr-3">Graph type:</label>
                    <select className="select mt-2 w-20 max-w-xs rounded-sm" id="graphContent">
                        <option defaultValue>Weight</option>
                        <option disabled>Coming soon</option>
                    </select>
                </div>

                <div className=" bg-white rounded-lg">
                    <LineChart />
                </div>
            </div>
            <div className="bg-lightBlue mt-10">
                <Footer />
            </div>
        </div>
    );
};
