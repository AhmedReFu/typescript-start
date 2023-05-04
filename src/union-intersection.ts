
type NoobDeveloper = {
    name:string,
}

/* type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}; */

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

enum Level{
    junior = "junior",
    mid = "mid",
    senior="senior"
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: Level;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Ahmed ReFat",
    expertise: "JavaScript"
    ,
    experience: 1,
}

const developer: NextLevelDeveloper = {
    name: "Next Bhai",
    expertise: "TypeScript",
    experience: 2,
    leadershipExperience: 1,
    level: Level.senior
};