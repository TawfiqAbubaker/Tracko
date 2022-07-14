export const Weight = (props) => {
    const{index, mainIndex, setter, ogData}= props;
    return (
        <div className="flex flex-row">
            <input
                type="number"
                placeholder="Weight"
                className="input w-24 mt-2 max-w-xs mr-3 rounded-lg pl-1"
                value={ogData[mainIndex].Reps[index].Weight}
                onChange={(e) => {
                    const temp = [...ogData];
                    temp[mainIndex].Reps[index].Weight = e.target.value;
                    setter(temp);
                }}
            />
            {/* <select className="select mt-2 w-12 max-w-xs pl-1 rounded-lg">
                <option defaultValue>Kg</option>
                <option>Lbs</option>
            </select> */}
        </div>
    );
};
