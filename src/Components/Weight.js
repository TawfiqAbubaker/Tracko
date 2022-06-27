export const Weight = () => {
    return (
        <div className="flex flex-row">
            <input
                type="number"
                placeholder="Weight"
                className="input w-20 mt-2 max-w-xs mr-3 rounded-lg pl-1"
            />
            <select className="select mt-2 w-12 max-w-xs pl-1 rounded-lg">
                <option defaultValue>Kg</option>
                <option>Lbs</option>
            </select>
        </div>
    );
};
