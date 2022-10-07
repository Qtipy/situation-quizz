import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { ChangeEvent, CSSProperties, FunctionComponent, useEffect, useState } from "react";
import { questions } from "./../data/quizzData";

const color: string = "white";
const buttonNextStyle: CSSProperties = { color, borderColor: color };

const Quizz: FunctionComponent = () => {
    const [point, setPoint] = useState<number>(0);
    const [currentValue, setCurrentValue] = useState<number | undefined>();
    const [index, setIndex] = useState<number>(0);

    const isFinished = index === questions.length;

    const handleNextChange = () => {
        setPoint(point + (currentValue ?? 0));
        setIndex(index + 1);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => setCurrentValue(+event.target.value);

    useEffect(() => {
        setCurrentValue(undefined);
    }, [index]);

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Quizz
            </Typography>

            {!isFinished ? (
                <FormControl sx={{ marginTop: 4 }} variant="outlined">
                    <FormLabel id={questions[index].label} style={{ color }}>
                        {questions[index].label}
                    </FormLabel>
                    <RadioGroup name="quiz" value={currentValue} onChange={handleRadioChange}>
                        {questions[index].answers.map((answer) => (
                            <FormControlLabel value={answer.point} control={<Radio />} label={answer.label} />
                        ))}
                    </RadioGroup>
                    <Button
                        sx={{ marginTop: 4 }}
                        // type="submit"
                        variant="outlined"
                        style={buttonNextStyle}
                        onClick={handleNextChange}
                    >
                        Next
                    </Button>
                </FormControl>
            ) : (
                <Typography variant="body1">Vous avez {point} points !</Typography>
            )}
        </>
    );
};

export default Quizz;
