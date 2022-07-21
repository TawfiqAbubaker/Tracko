import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const Feedback = (props) => {
    const {language} = props;
    return (
        <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[100vh] pt-14">
            <h2 className="max-w-lg mb-6 font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                {language === "En"
                    ? "Send us your feedback."
                    : "Envoyez nous votre feedback"}
            </h2>
            <div className="container mx-auto px-16 max-w-4xl  min-h-[50vh] mb-24">
                <div className="flex flex-col justify-around mb-20 mt-10">
                    <label className="text-xl mb-10 text-center">
                        {language === "En"
                            ? "Feel free to send us any comment or recommendation about the website, we will carefully review it take it into consideration moving forward."
                            : "N'hésitez pas à nous faire part de vos commentaires ou recommandations concernant le site web. Nous les examinerons attentivement et les prendrons en considération pour l'avenir."}
                    </label>
                    <textarea
                        name="Feedback"
                        id=""
                        cols="30"
                        rows="10"
                        className="p-2"
                    ></textarea>
                    <Link
                        to="/Tracko/"
                        className="self-end"
                        onClick={() => {
                            alert("Thank you for your feedback!");
                        }}
                    >
                        <button
                            type="submit"
                            className="bg-salmonOrange w-24 rounded-md mt-3 text-lg"
                        >
                            {language==="En"?"Submit":"Soumettre"}
                        </button>
                    </Link>
                </div>
            </div>
            <div className="bg-lightBlue">
                <Footer />
            </div>
        </div>
    );
};
