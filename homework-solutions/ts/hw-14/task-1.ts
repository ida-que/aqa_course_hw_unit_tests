// 1. Define the IEmployee interface and create an object QA of that type

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: "Ida",
    salary: 5000,
    isManager: false,
}


// 2. Create an EmployeeKeys type that is a union of the keys of IEmployee
type EmployeeKeys = keyof IEmployee;

// 3. Create a QaKeys type that contains only the keys of the QA object (use keyof and typeof)
type QaKeys = keyof typeof QA;

// 4. Create a UserType type based on the QA object (use typeof)
type UserType = typeof QA;

// 5. Create a type where all fields from the IEmployee interface are optional
type OptionalEmployee = Partial<IEmployee>;

// 6. Create a type that only includes the name and salary fields from IEmployee
type NameAndSalary = Pick<IEmployee, "name" | "salary">;

// 7. Create a type that includes all fields from IEmployee except isManager
type EmployeeWithoutManager = Omit<IEmployee, "isManager">;

// 8. Create a type which makes all fields of IWmployee readonly
type ReadonlyEmployee = Readonly<IEmployee>;

// 9. Create an objectt using Record, where te keys are strings and the values are keys of the QA object
const qaField: Record<string, QaKeys> = {
    field1: "name",
    field2: "salary",
    field3: "isManager",
};

// 10. Create a generic function called wrapInArray which wraps any value into an array of that value's type

function wrapInArray<T>(value: T): T[] {
    return [value];
}

// test
const numberArray = wrapInArray(5);
const stringArray = wrapInArray("Hello");

console.log(numberArray);
console.log(stringArray);

console.log(wrapInArray(17));
console.log(wrapInArray({name: "Ida", age: "18",}));
console.log(wrapInArray("Hello World!"));


// 11. Create a generic function called getLastElement whichv takesan array of elements of type T and returns the last element

function getLastElement<T>(array: T[]): T {
    return array[array.length - 1];
}

// test
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement(["a", "b", "c"]));
