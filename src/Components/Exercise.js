
import { Weight } from "./Weight";

export const Exercise = (props) => {
    const { setter, index, ogData } = props;
    const mainIndex = index;
    const setAdder = () => {
        const temp = [...ogData];
        temp[index].Reps.push({
            Weight: "",
            Reps: "",
        });
        setter(temp);
    };
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <input
                        type="text"
                        placeholder="Exercise"
                        className="input w-32 mt-2 mr-3 rounded-lg pl-1"
                        value={ogData[mainIndex].Exercise}
                        onChange={(e) => {
                            const temp = [...ogData];
                            temp[mainIndex].Exercise = e.target.value;
                            setter(temp);
                        }}
                    />
                </div>
                <div className="basis-1/3 flex flex-col">
                    <div className="">
                        {ogData[index].Reps.map((irrelevant, index) => (
                            <Weight
                                index={index}
                                mainIndex={mainIndex}
                                setter={setter}
                                ogData={ogData}
                            />
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
                                value={ogData[mainIndex].Reps[index].Reps}
                                onChange={(e) => {
                                    const temp = [...ogData];
                                    temp[mainIndex].Reps[index].Reps =
                                        e.target.value;
                                    setter(temp);
                                }}
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
