type CrushType={
    name: string;
    age: number;
    profession: string;
    address: string;
}

const crush1: CrushType = {
    name: "Faru",
    age: 22,
    profession: "grapixer",
    address:"KodoKaji road"
}

const crush2: CrushType = {
    name: "Emu",
    age: 14,
    profession: "student",
    address:"Dolia"
}

type CrushMarriedType = boolean;

const isCrushMarried: boolean = false;

type CourseNameType = string
const CourseName: CourseNameType = "Next Level Web Developer"

type OperationType = (x: number, y: number) => number;

const calculate = (
    number1: number,  //10
    number2: number,  //20
    operation: OperationType  //(x, y) => x + y

) => {
    return console.log(operation(number1, number2));
};

calculate(10, 20, (x, y) => x + y);

calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
