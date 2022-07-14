import Rocket from "../Media/Rocket.png";
import Calendar from "../Media/Calendar.png";
import Hand from "../Media/Hand.png";
export const Feature = (props) => {
    const { language } = props;
    return (
        <div className="mt-0 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        {language == "En"
                            ? "Our exclusive features"
                            : "Nos caractéristiques exclusives"}
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    {language == "En"
                        ? "Why we are better than the competition."
                        : "Pourquoi nous sommes les meilleurs."}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    {language == "En"
                        ? "Learn about the new features that make this website useful to any fitness enthusiast."
                        : "Découvrez les nouvelles fonctionnalités qui rendent ce site web utile à tout amateur de fitness."}
                </p>
            </div>
            <div className="grid gap-20 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col text-center justify-between p-5 brder shadow-3xl rounded-3xl bg-cardColor">
                    <div>
                        <div className="imgContainer w-[100%] flex justify-center items-center">
                            <img
                                src={Rocket}
                                alt=""
                                className="max-h-48 align-middle m-0 p-0"
                            />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">
                            {language == "En"
                                ? "Science based approach"
                                : "Approche scientifique"}
                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                            {language == "En"
                                ? "This website adapts the notion of progressive overload."
                                : "Ce site adapte la notion de surcharge progressive surcharge progressive."}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-between p-5  shadow-3xl rounded-3xl bg-cardColor">
                    <div>
                        <div className="imgContainer w-[100%] flex justify-center items-center">
                            <img
                                src={Hand}
                                alt=""
                                className="max-h-48 align-middle m-0 p-0"
                            />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">
                            {language == "En"
                                ? "Cleaner Modern Design"
                                : "Design Moderne Propre"}
                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                            {language == "En"
                                ? "This website was carefully designed to be very user-friendly."
                                : "Ce site a été soigneusement conçu pour être très convivial."}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center justify-between p-5 shadow-3xl rounded-3xl bg-cardColor">
                    <div>
                        <div className="imgContainer w-[100%] flex justify-center items-center">
                            <img
                                src={Calendar}
                                alt=""
                                className="max-h-48 align-middle m-0 p-0"
                            />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">
                            {language == "En"
                                ? "New Graphing service"
                                : "Service de Graphiques"}
                        </h6>
                        <p className="mb-3 text-sm text-gray-900">
                            {language == "En"
                                ? "Visualize your progress using stunning graphs faster than ever."
                                : "Visualisez vos progrès à l'aide de jolie graphiques"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
