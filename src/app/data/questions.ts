import { Quest } from "../types/Quest";

export const questions: Quest[] = [
    {
        quest:"Nome da distância de 1 TOM :",
        options: [
            "2 menor",
            "3 maior",
            "2 maior",
            "4 justa"
        ],
        answer:2
    },
    {
        quest:"Nome da distância de 2 TONS :",
        options: [
            "5 justa",
            "3 maior",
            "2 maior",
            "4 justa"
        ],
        answer:1
    },
    {
        quest:"Nome da distância de 3 TONS e MEIO :",
        options: [
            "6 menor",
            "5 aumentada",
            "4 justa",
            "5 justa"
        ],
        answer:3
    },
    {
        quest:"Qual é distância do intervalo de 6 Maior :",
        options: [
            "4 tons e meio",
            "3 tons e meio",
            "5 tons ",
            "6 tons "
        ],
        answer:0
    },
    {
        quest:"Qual é distância do intervalo de 8 Justa :",
        options: [
            "5 tons",
            "6 tons",
            "7 tons",
            "8 tons"
        ],
        answer:1
    }

];