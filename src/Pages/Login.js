import { useRef, useState } from "react";
import { useAuth} from "../contexts/AuthContext";
import { useNavigate } from "react-router";
import { Footer } from "../Components/Footer";
export const Login = (props) => {
    const {language} = props;
    const emailRef = useRef();
    const passwordRef = useRef();
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword]= useState('testtest');

    const {login, currentUser} = useAuth();
    const [error, setError] =  useState('');
    const [loading, setLoading] =  useState(false);
    const navigate = useNavigate();
    async function handleSubmit(e){
        setError('')
        e.preventDefault();
        try{
            setError('');
            setLoading(true);
            console.log('we here');
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/Tracko/track')
        }
        catch(e){
            setLoading(false);
            setError(e.message.replace("Firebase: ", "").replace(/\(auth.*\)\.?/, ""))
        }
    }
    return (
        <>
        <section className="h-[80vh] bg-gradient-to-b from-cyan-500 to-blue-500 pt-14">
            <h2 className="max-w-lg mb-0 font-sans text-4xl mx-auto md:text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto text-center ">
                {language === "En"
                    ? "Log in to Tracko"
                    : "Connectez vous à Tracko"}
            </h2>
            <div className="container px-6 py-12 mx-auto">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 ">
                        <form onSubmit={handleSubmit} className="w-full">
                            <div className="mb-6">
                                <p className="mb-2 text-red-600">
                                    {error}
                                </p>
                                <input
                                    type="text"
                                    ref={emailRef}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    value={password}
                                    ref={passwordRef}
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    onChange={event => setPassword(event.target.value)}

                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-block px-7 py-3 bg-lightBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-sky-400 hover:shadow-lg focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {language==="En"? "Log in" : "Connection"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
        <div className="bg-lightBlue">
                <Footer language={language}/>
            </div>
        </>
    );
};
