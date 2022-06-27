import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Exercise } from "../Components/Exercise";
import { Footer } from "../Components/Footer";
import { Dum } from "../tempData/DumData";
export const Track = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [workoutData, setWorkoutData] = useState(Dum);
    const addExercise = () => {
        const temp = [...workoutData];
        temp.push({
            Exercise: " ",
            Reps: [{ Weight: "", Reps: "" }],
        });
        setWorkoutData(temp);
    };
    return (
        <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[100vh] pt-14">
            <h2 className="max-w-lg mb-6 font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                Track your workouts.
            </h2>
            <div className="container mx-auto px-16 max-w-4xl">
                <div className="flex flex-row justify-around mb-20 mt-10">
                    <div>
                        <label className="text-xl mb-10">Workout Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="inline-block mt-2"
                        />
                    </div>
                    <div>
                        <label className="text-xl mb-10">Current Weight</label>
                        <div className="flex flex-row">
                            <input
                                type="number"
                                placeholder="Weight"
                                className="input w-12 mt-2 max-w-xs mr-3"
                            />
                            <select className="select mt-2 w-full max-w-xs">
                                <option defaultValue>Kg</option>
                                <option>Lbs</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="basis-1/3 text-2xl bold">Exercise</div>
                        <div className="basis-1/3 text-2xl bold">Weight</div>
                        <div className="basis-1/3 text-2xl bold">
                            Repetitions
                        </div>
                    </div>
                    <div className="mt-4">
                        {workoutData.map((exercise, index) => (
                            <Exercise setter={setWorkoutData} index={index} ogData={workoutData}/>
                        ))}
                    </div>
                    <div className="flex flex-row">
                        <button
                            className="bg-salmonOrange w-28 h-8 mt-3 rounded-lg"
                            onClick={addExercise}
                        >
                            Add Exercise
                        </button>
                        <button className="bg-lightBlue w-28 h-8 mt-3 ml-4 rounded-lg">
                            Save Workout
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
