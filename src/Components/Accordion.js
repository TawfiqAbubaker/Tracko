import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export const AccordionComponent = (props) => {
    const { index, open, setOpen, workout, setWorkoutsData, workoutsData} = props;

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    let date = workout[0].Date;
    if(date instanceof Date){
        var options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        date = workout[0].Date.toLocaleDateString("en-US", options);
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
                    onClick={() => {
                        console.log(workoutsData)
                        const test = [...workoutsData];
                        console.log(index,test)
                        test.splice(index, 1);
                        console.log(test)
                        setWorkoutsData(test);
                    }}
                >
                    Delete Workout
                </button>
            </AccordionBody>
        </Accordion>
    );
};
