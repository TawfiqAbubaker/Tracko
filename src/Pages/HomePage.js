import "../index.css";
import { About } from "../Components/About";
import { Feature } from "../Components/Feature";
import { Wave } from "../Waves/Wave";
import { Footer } from "../Components/Footer";
import { Wave2 } from "../Waves/Wave2";
export const HomePage = (props) => {
    const {language} = props;
    return (
        <>
            <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[80vh] flex justify-center items-center">
                <About language={language}/>
            </div>
            <div className="relative bg-gradient-to-b from-salmonOrange to-orange-300 min-h-[80vh]">
                <Wave/>
                <div className="h-20"></div>
                <Feature language={language}/>
            </div>
            <div className="bg-lightBlue relative">
                <Wave2/>
                <Footer language={language}/>
            </div>
        </>
    );
};
