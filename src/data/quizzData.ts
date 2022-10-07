import { Question } from "./types";

export const questions: Question[] = [
    {
        label: "Do you own your house ?",
        answers: [
            { label: "Yes", point: 20 },
            { label: "No", point: 0 },
            { label: "In a short period, yes", point: 15 },
        ],
    },
    {
        label: "Did you travel a lot ?",
        answers: [
            { label: "Yes", point: 20 },
            { label: "No", point: 0 },
            { label: "I traveled to some countries", point: 10 },
        ],
    },
    {
        label: "Did you do major studies ? (3 years minimum)",
        answers: [
            { label: "Yes", point: 20 },
            { label: "No", point: 0 },
            { label: "On it", point: 15 },
        ],
    },
];
