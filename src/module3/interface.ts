type User = {
    name: string;
    age: number; 
};

type extendUser = User & {
    role: string;
}
interface IUser {
    name: string;
    age: number;
};

interface IExtendedUser extends IUser{
    role:string
}

type rollNumber = number;

// Object , Function, Array

type addNumbersType = (num1: number, num2: number) => number

interface IAddNumbers{
    (num1: number, num2: number): number;
}

const addNumbers:addNumbersType = (num1, num2) => num1 + num2;

type rollNumberType = number[]
interface IRollNumber {
    [index:number]:number
}
const rollNumber :IRollNumber = [1, 4, 5];

const userN: IExtendedUser = {
    name: "Ahmed",
    age: 20,
    role:"Unknown"
}

// const userWithTypeAlias: User = {
//     name: 'Type Alias',
//     age:100,
// }


// const userWithInterface: IUser = {
//     name: "Interface",
//     age: 200,
// }
// userWithInterface