import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import axios from "axios";
export const AccordionComponent = (props) => {
    const { index, open, setOpen, workout, setWorkoutsData, workoutsData,currentUser} = props;

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    let date = new Date(workout[0].Date);
    if(date instanceof Date){
        var options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        date = date.toLocaleDateString("en-US", options);
    }
    const deleteWorkout = () => {
        const test = [...workoutsData];
        test.splice(index, 1);
        setWorkoutsData(test);
        axios
                .put(
                    "https://tracko-dev-c8ced-default-rtdb.firebaseio.com/Workout/" +
                        currentUser.uid + ".json",
                    test
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }
    return (
        <Accordion
            open={open === index + 1}
            onClick={() => handleOpen(index + 1)}
        >
            <AccordionHeader>
                {workout[0].Name} | {date} | {workout[0].Weight} kgs
            </AccordionHeader>
            <AccordionBody>
                {workout.map((workout, index) => {
                    if (index > 0) {
                        return (
                            <>
                                • {workout.Exercise} : <br />
                                {workout.Reps.map((Rep) => (
                                    <>
                                        {"\u00A0"}
                                        {"\u00A0"} {"\u00A0"}
                                        {"\u00A0"}- {Rep.Weight} kgs for{" "}
                                        {Rep.Reps} reps <br />
                                    </>
                                ))}
                            </>
                        );
                    }
                })}
                <button
                    className="block bg-lightBlue w-32 h-6 mt-3 rounded-lg"
                    onClick={() => deleteWorkout()}
                >
                    Delete Workout
                </button>
            </AccordionBody>
        </Accordion>
    );
};
