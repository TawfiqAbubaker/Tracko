import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { Footer } from "../Components/Footer";
export const Singup = (props) => {
    const { language } = props;
    const emailRef = useRef();
    const passwordRef = useRef();

    const nameRef = useRef();
    const ageRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const verifier = (e) => {
        e.preventDefault()
        console.log("error is hh", error);
        if (nameRef.current.value === "" || ageRef.current.value === "")
            setError("Please fill up all inputs");
        else {
            setStep(1)
            setError("");
        }
    };
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            console.log("we here");
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/Tracko/track");
        } catch (e) {
            setLoading(false);
            setError(
                e.message.replace("Firebase: ", "").replace(/\(auth.*\)\.?/, "")
            );
        }
    }
    return (
        <>
            <section className="h-[80vh] bg-gradient-to-b from-cyan-500 to-blue-500 pt-14">
                <h2 className="max-w-lg mb-0 font-sans text-4xl mx-auto md:text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto text-center ">
                    {language === "En"
                        ? "Sign up to Tracko"
                        : "Inscrivez vous à Tracko"}
                </h2>
                <div className="container px-6 py-12 mx-auto">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-5/12">
                            {step === 0 ? (
                                <>
                                <form onSubmit={verifier}>
                                    <div className="mb-6">
                                        <p>
                                            {language==="En" ? "Enter your Name and Age then press Next." : "Entrez votre nom et votre âge, puis appuyez sur Suivant."}
                                        </p>
                                        <p className="mb-2 text-red-600">
                                            {error}
                                        </p>
                                        <label
                                            htmlFor="name"
                                            className="text-xl font-semibold"
                                        >
                                            Name :
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control mt-2 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Name"
                                            ref={nameRef}
                                        />
                                    </div>
                                    <label
                                        htmlFor="age"
                                        className="text-xl font-semibold"
                                    >
                                        Age :
                                    </label>
                                    <div className="mb-6">
                                        <input
                                            type="number"
                                            id="age"
                                            min="13"
                                            max="100"
                                            className="form-control block w-full mt-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Age"
                                            ref={ageRef}
                                        />
                                    </div>

                                    <button
                                        disabled={loading}
                                        className="self-end px-7  py-3 bg-lightBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        type="submit"
                                    >
                                        {language === "En" ? "Next" : "Suivant"}
                                    </button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <p className="mb-2 text-red-600">
                                                {error}
                                            </p>
                                            <label
                                                htmlFor="email"
                                                className="text-xl font-semibold"
                                            >
                                                Email address :
                                            </label>
                                            <input
                                                type="text"
                                                ref={emailRef}
                                                className="form-control block w-full mt-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Email address"
                                            />
                                        </div>

                                        <div className="mb-6">
                                            <label
                                                htmlFor="email"
                                                className="text-xl font-semibold"
                                            >
                                                Password :
                                            </label>
                                            <input
                                                type="password"
                                                ref={passwordRef}
                                                className="form-control block w-full mt-2 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="inline-block px-7 py-3 bg-lightBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            {language === "En"
                                                ? "Sign up"
                                                : "S'inscrire"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-lightBlue">
                <Footer language={language} />
            </div>
        </>
    );
};
