import {FullDeckDto, FullSubjectDto} from "@/shared/types";

export const mockSubjects: FullSubjectDto[] = [
    { id: 1, name: "Matematika 1",   createdAt: new Date("2024-01-10") },
    { id: 2, name: "Ekonomija",      createdAt: new Date("2024-01-11") },
    { id: 3, name: "Menadžment",     createdAt: new Date("2024-01-12") },
    { id: 4, name: "OIKT",           createdAt: new Date("2024-01-13") },
    { id: 5, name: "Psihologija",    createdAt: new Date("2024-01-14") },
    { id: 6, name: "Marketing",      createdAt: new Date("2024-01-15") },
    { id: 7, name: "Osnovi organizacije", createdAt: new Date("2024-01-16") },
    { id: 8, name: "UIS",            createdAt: new Date("2024-01-17") },
];

// Helper funkcija da se pronadje predmet u listi
const S = (id: number) => mockSubjects.find((s) => s.id === id)!;

export const mockDecks: FullDeckDto[] = [
    {
        id: 11,
        name: "Funkcije i limiti – zbirka",
        createdAt: new Date("2024-02-01"),
        subject: S(1),
        cardsCount: 40,
    },
    {
        id: 12,
        name: "Derivacije – brzi test",
        createdAt: new Date("2024-02-03"),
        subject: S(1),
        cardsCount: 25,
    },
    {
        id: 21,
        name: "Osnovi mikroekonomije",
        createdAt: new Date("2024-02-05"),
        subject: S(2),
        cardsCount: 30,
    },
    {
        id: 22,
        name: "Makroekonomski indikatori",
        createdAt: new Date("2024-02-06"),
        subject: S(2),
        cardsCount: 22,
    },
    {
        id: 31,
        name: "4 funkcije menadžmenta",
        createdAt: new Date("2024-02-08"),
        subject: S(3),
        cardsCount: 18,
    },
];
sidebar.txt
{/* Sidebar */} 
<aside className="w-full md:w-64 shrink-0"> 
    <div className="flex flex-col gap-4 md:sticky md:top-20"> 
        {/* Search */} 
        <input 
            placeholder="Pretraga špilova…" 
            className="w-full rounded border border-gray-200 px-3 py-2" 
        /> 
        {/* Dugme koje vodi na create deck stranicu*/} 
        <Link 
            href="/deck-create" 
            className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700" 
        > 
            + Napravi špil 
        </Link> 
    </div>
</aside> 