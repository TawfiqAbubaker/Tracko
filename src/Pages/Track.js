import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Exercise } from "../Components/Exercise";
import { Footer } from "../Components/Footer";
import { Dum } from "../tempData/DumData";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export const Track = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [workoutData, setWorkoutData] = useState(Dum);
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
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

            <div className="container mx-auto px-16 max-w-4xl  min-h-[50vh] mb-24">
                <div className="flex flex-row justify-around mb-16 mt-10 ">
                    <div>
                        <label className="text-xl mb-10">Workout Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="inline-block mt-2"
                            dateFormat="yyyy/MM/dd"
                        />
                    </div>
                    <div>
                        <label className="text-xl mb-10">Current Weight</label>
                        <div className="flex flex-row">
                            <input
                                type="number"
                                placeholder="Weight"
                                className="input w-20 mt-2 max-w-xs mr-3"
                            />
                            <select className="select mt-2 w-full max-w-xs">
                                <option defaultValue>Kg</option>
                                <option>Lbs</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:ml-20">
                    <hr className="mt-4 w-[90%] border-black" />
                    <div className="flex flex-row">
                        <div className="basis-1/3 text-2xl bold">Exercise</div>
                        <div className="basis-1/3 text-2xl bold">Weight</div>
                        <div className="basis-1/3 text-2xl bold">
                            Repetitions
                        </div>
                    </div>
                    <hr className="mt-4 w-[90%] border-black" />

                    <div className="mt-4">
                        {workoutData.map((exercise, index) => (
                            <Exercise
                                setter={setWorkoutData}
                                index={index}
                                ogData={workoutData}
                            />
                        ))}
                    </div>
                    <div className="flex flex-row">
                        <button
                            className="bg-salmonOrange w-28 h-8 mt-3 rounded-lg"
                            onClick={addExercise}
                        >
                            Add Exercise
                        </button>
                        <button
                            className="bg-lightBlue w-28 h-8 mt-3 ml-4 rounded-lg"
                            onClick={() => {
                                alert("This feature will be implemented soon.");
                            }}
                        >
                            Save Workout
                        </button>
                    </div>
                </div>
                <h2 className="max-w-lg mb-6 mt-20 font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    View your past workouts.
                </h2>
                <Fragment>
                    <Accordion open={open === 1} onClick={() => handleOpen(1)}>
                        <AccordionHeader>
                            Chest Workout | 2022-06-15 | 75 kgs
                        </AccordionHeader>
                        <AccordionBody>
                            Bench press: 3 sets 70kgs 8 reps <br />
                            Dumbell : 3 sets 25kgs 12 reps <br />
                            Shoulder press: 3 sets 25kgs 12 reps
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} onClick={() => handleOpen(2)}>
                        <AccordionHeader>
                            Back Workout | 2022-06-10 | 76 kgs
                        </AccordionHeader>
                        <AccordionBody>
                            Lat pulldown: 3 sets 74kgs 8 reps <br />
                            Dumbell rows: 3 sets 30kgs 11 reps
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} onClick={() => handleOpen(3)}>
                        <AccordionHeader>
                            Leg Workout | 2022-06-03 | 76.5 kgs
                        </AccordionHeader>
                        <AccordionBody>
                            Leg press: 4 sets 120kgs 12 reps <br />
                            Calve raises: 3 sets 90kgs 14 reps
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>

            <div className="bg-lightBlue">
                <Footer />
            </div>
        </div>
    );
};
