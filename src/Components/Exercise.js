import { repItem } from "../tempData/DumData";
import { Weight } from "./Weight";

export const Exercise = (props) => {
    const { setter, index, ogData } = props;
    const setAdder = () => {
        const temp = [...ogData];
        temp[index].Reps.push(repItem);
        setter(temp);
    };
    console.log(index, ogData[index]);
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <input
                        type="text"
                        placeholder="Exercise"
                        className="input w-32 mt-2 mr-3 rounded-lg pl-1"
                    />
                </div>
                <div className="basis-1/3 flex flex-col">
                    <div className="">
                        {ogData[index].Reps.map((irrelevant, index) => (
                            <Weight />
                        ))}
                    </div>
                    <button
                        className="bg-salmonOrange w-20 mt-3 rounded-lg"
                        onClick={setAdder}
                    >
                        Add set
                    </button>
                </div>
                <div className="basis-1/3">
                    <div className="flex flex-col">
                        {ogData[index].Reps.map((irrelevant, index) => (
                            <input
                            type="number"
                            placeholder="Repetitions"
                            className="input w-28 mt-2 max-w-xs mr-3 rounded-lg pl-1"
                        />
                        ))}
                    </div>
                    
                </div>
            </div>
            <hr className="mt-4 w-[90%] border-black" />
        </>
    );
};
