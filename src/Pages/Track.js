import React, { useState, Fragment, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Exercise } from "../Components/Exercise";
import { Footer } from "../Components/Footer";
import { Dum} from "../tempData/DumData";
import { useNavigate } from "react-router";
import { AccordionComponent } from "../Components/Accordion";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

export const Track = (props) => {
    const {language, workoutsData, setWorkoutsData} = props;
    const [currentWeight, setCurrentWeight] = useState();
    const [workoutName, setWorkoutName] = useState();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const {currentUser} = useAuth();
    const [workoutData, setWorkoutData] = useState(Dum);
    const [open, setOpen] = useState(0);
   
    useEffect(()=> {
        // if(currentUser === null){
        //     console.log('we here')
        //     navigate('/Tracko/login')
        // }
        axios
            .get(
                "https://tracko-dev-c8ced-default-rtdb.firebaseio.com/Workout/" + currentUser.uid+'.json'
            )
            .then((response) => setWorkoutsData(response.data))
            .catch((error) => console.log('error is' ,error));
    },[])
    const addExercise = () => {
        let temp = [];
        try {
            temp = [...workoutData];
        } catch {}
        temp.push({
            Exercise: "",
            Reps: [{ Weight: "", Reps: "" }],
        });
        setWorkoutData(temp);
    };
    const verififer = () => {
        let verified = true;
        if(workoutName === undefined || currentWeight === undefined) verified = false;
        workoutData.forEach((exercise) => {
            if (exercise.Exercise === undefined || exercise.Exercise === "") verified = false;
            exercise.Reps.forEach((Rep) => {
                if (Rep.Reps === undefined || Rep.Reps === "" || Rep.Weight === undefined || Rep.Weight === "") verified = false;
            })
        })
        return verified;
    }
    const saveExercise = () => {
        if (!verififer()) {
            alert("Please fill all of the form inputs");
        } else {
            let temp = [];
            try {
                temp = [...workoutsData];
            } catch {}
            temp.push([
                {
                    Name: workoutName,
                    Date: startDate,
                    Weight: currentWeight,
                },
                ...workoutData,
            ]);
            console.log('workoutdata',workoutsData);
            console.log('temp', temp)
            setWorkoutsData(temp);

            axios
                .put(
                    "https://tracko-dev-c8ced-default-rtdb.firebaseio.com/Workout/" +
                        currentUser.uid+
                        ".json",
                    temp
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setWorkoutData(Dum);
        }
    };
    return (
        <div className=" bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[100vh] pt-14">
            <h2 className="max-w-lg mb-6 font-sans text-4xl mx-auto text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                {language === "En"
                    ? "Track your workouts"
                    : "Notez vos entraînements."}
            </h2>

            <div className="container mx-auto px-16 max-w-4xl  min-h-[50vh] mb-24">
                <div className="flex flex-row justify-around mb-16 mt-10 ">
                    <div>
                        <label className="text-xl mb-10">
                            {language === "En"
                                ? "Workout Date"
                                : "Date d'entrainement."}
                        </label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="inline-block mt-2"
                            dateFormat="yyyy/MM/dd"
                        />
                    </div>
                    <div>
                        <label className="text-xl mb-10">
                            {language === "En" ? "Workout name" : "Nom"}
                        </label>
                        <div className="flex flex-row">
                            <input
                                type="text"
                                placeholder="Workout name"
                                className="input w-32 mt-2 max-w-xs mr-3"
                                value={workoutName}
                                onChange={(e) => {
                                    setWorkoutName(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xl mb-10">
                            {language === "En"
                                ? "Current Weight"
                                : "Poids Actuel"}
                        </label>
                        <div className="flex flex-row">
                            <input
                                type="number"
                                placeholder="Weight"
                                className="input w-24 mt-2 max-w-xs mr-3"
                                value={currentWeight}
                                onChange={(e) => {
                                    setCurrentWeight(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:ml-20">
                    <hr className="mt-4 w-[90%] border-black" />
                    <div className="flex flex-row">
                        <div className="basis-1/3 text-2xl bold">Exercise</div>
                        <div className="basis-1/3 text-2xl bold">
                            {language === "En" ? "Weight" : "Poids"}
                        </div>
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
                            className="bg-salmonOrange w-32 h-8 mt-3 rounded-lg"
                            onClick={addExercise}
                        >
                            {language === "En"
                                ? "Add Exercise"
                                : "Ajouter Exercise"}
                        </button>
                        <button
                            className="bg-lightBlue w-28 h-8 mt-3 ml-4 rounded-lg"
                            onClick={saveExercise}
                        >
                            {language === "En" ? "Save Workout" : "Enregistrer"}
                        </button>
                    </div>
                </div>
                <h2 className="max-w-lg mb-6 mt-20 font-sans text-4xl text-center leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    {language === "En"
                        ? "View your past workouts."
                        : "Visualisez vos entraînements"}
                </h2>
                {console.log(workoutsData)}
                {workoutsData ? (
                    <Fragment>
                        {workoutsData.map((workout, index) => (
                            <AccordionComponent
                                index={index}
                                open={open}
                                setOpen={setOpen}
                                workout={workout}
                                setWorkoutsData={setWorkoutsData}
                                workoutsData={workoutsData}
                                currentUser={currentUser}
                            />
                        ))}
                    </Fragment>
                ) : (
                    <div className="text-center">{language==="En"? "No workouts saved yet" : "Aucun entrainements trouvés"}</div>
                )}
            </div>

            <div className="bg-lightBlue">
                <Footer />
            </div>
        </div>
    );
};
