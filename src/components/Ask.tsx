import {useState} from 'react';

interface Question {
    question: string;
    answerChoices: string[];
}

export const Ask = () => {
    const datas: Question[] = [
        {
            question: 'Bac +5 équivalent ou supérieur ?',
            answerChoices: ['Oui', 'Non']
        },
        {
            question: 'En couple',
            answerChoices: ['Ouii', 'Nonn']
        },
        {
            question: 'Domicile',
            answerChoices: ['Appartement', 'Maison', 'Autres']
        },
    ];

    const [index, setIndex] = useState<number>(0);

    const nextQuestion = () => {
        index === datas.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    
    return (
        <form>
            <p>{datas[index].question}</p>
            {datas[index].answerChoices.map(q => {
               return (
                <div onClick={nextQuestion}>
                    <input type="radio" id={q} name={q}/>
                    <label htmlFor={q}>{q}</label>
                </div>)
            }
            )}
        </form>
    );
};