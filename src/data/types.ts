export interface Question {
    label: string;
    answers: Answer[];
}

export interface Answer {
    label: string;
    point: number;
}
