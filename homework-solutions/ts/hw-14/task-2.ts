// Write a custom map() function which takes an array and callback. 
// Use generic types in function as well as in callback

function customMap<T, U>(
    arr: T[], 
    callback: (el: T, index: number, arr: T[]) => U
): U[] {
    const res: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(callback(arr[i], i, arr));
    }
    return res;
}

// Test this function with taking the 1-5 numbers as an array and returning a new array with each element multiplied by its index.

const numbers = [1, 2, 3, 4, 5];
const multipliedByIndex = customMap(numbers, (value, index) => {
    return value * index;
});

console.log(multipliedByIndex);