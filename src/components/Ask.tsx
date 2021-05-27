import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useState } from 'react';
import { debounce } from '../helpers/data';

interface Answer {
    id: number;
    answer: string;
    points: number;
}

interface Question {
    question: string;
    answerChoices: Answer[];
}

const debounceTimer: number = 200;

export const Ask = () => {
    const datas: Question[] = [
        {
            question: 'Bac +5 équivalent ou supérieur ?',
            answerChoices: [{id: 1, answer: 'Oui', points: 10}, {id: 2, answer: 'Non', points: 0}]
        },
        {
            question: 'En couple',
            answerChoices: [{id: 3, answer: 'Oui', points: 10}, {id: 4, answer: 'Non', points: 0}]
        },
        {
            question: 'Domicile',
            answerChoices: [
                {id: 5, answer: 'Appartement', points: 10},
                {id: 6, answer: 'Maison', points: 10},
                {id: 7, answer: 'Palace', points: 30},
            ]
        },
    ];

    const [index, setIndex] = useState<number>(0);
    const [value, setValue] = useState<number | undefined>(undefined);
    const [points, setPoints] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);

    // const nextQuest = debounce(() => {
    //     index === datas.length - 1 ? setIndex(0) : setIndex(index + 1);
    // }, 200);

    const nextQuest = debounce(() => {
        setIndex(index + 1);
    }, debounceTimer);

    const handleOnChange = (answer: Answer) => {
        if (index === datas.length - 1) {
            setPoints(points + answer.points);
            setIndex(0);
            setShowScore(true);
        } else {
            setValue(answer.id);
            setPoints(points + answer.points);
            nextQuest();
        }
    };
    
    return (
        <>
            {showScore && <>
                Bien joué, tu as {points} points !
            </>}
            {!showScore &&
            <>
                <p>{datas[index].question}</p>
                <FormControl component="fieldset" >
                    {datas[index].answerChoices.map((a) => {
                        return (
                            <div key={a.id}>
                                <RadioGroup name={datas[index].question} value={value} onChange={() => handleOnChange(a)}>
                                    <FormControlLabel value={a.id} control={<Radio />} label={a.answer} />
                                </RadioGroup>
                            </div>
                        )}
                    )}
                </FormControl>
            </>}
    </>
    );
};