function add(num1:number, num2:number):number {
    return num1 + num2;
};


// console.log(add(2, 2))

const addArrow = (num1: number, num2: number): number => num1 + num2;


const arr = [1, 4, 6];0

const newArray = arr.map((elem: number) => elem * elem);

// console.log(newArray);

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'Ahmed',
    balance: 0
    , addBalance(money: number) {
        console.log(`My New Balance is ${this.balance + money}`);
    }
};

// person.addBalance(5000);

//spread opearator

const friends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];

const myBestFriend = {
    fullName: "Rayhan",
    age: 33
};
const [bestFriend] = friends;
const { fullName:hisName } = myBestFriend;

console.log(hisName);

friends.push(...newFriends);
// console.log(friends);


//rest paaremeter

const greetFriends = (
    ...friends: string[]
): void => friends.forEach((friend => console.log(`Hi ${friend}`)));

// greetFriends("Rayhan", "Azhar", "Shakil", "Nur Uddin", "Jihad",
//     "Saimun");



    //array destructuring 