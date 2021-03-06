import { LineChart } from "../Components/LineChart";
import { Footer } from "../Components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export const Visualize = (props) => {
    const {language, workoutsData, setWorkoutsData} = props;
    const {currentUser} = useAuth();

    useEffect(()=> {
        axios
            .get(
                "https://tracko-dev-c8ced-default-rtdb.firebaseio.com/Workout/" + currentUser.uid+'.json'
            )
            .then((response) => setWorkoutsData(response.data))
            .catch((error) => console.log('error is' ,error));
    },[])
    return (
        <div className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[90vh]">
            <div className="w-[80vw] mx-auto pt-16">
                <h2 className="max-w-lg mb-6  font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    {language == "En"
                        ? "Visualize your progress"
                        : "Visualisez votre progrès"}
                </h2>
                <div className="mb-3">
                    <label htmlFor="graphContent" className="text-xl mr-3">
                    {language==="En" ? "Graph type:" : "Type de graphe"}
                    </label>
                    <select
                        className="select mt-2 w-20 max-w-xs rounded-sm"
                        id="graphContent"
                    >
                        <option defaultValue>Weight</option>
                        <option disabled>Coming soon</option>
                    </select>
                </div>

                <div className=" bg-white rounded-lg">
                    <LineChart workoutsData={workoutsData} />
                </div>
            </div>
            <div className="bg-lightBlue mt-10">
                <Footer />
            </div>
        </div>
    );
};
