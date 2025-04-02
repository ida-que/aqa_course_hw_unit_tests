// 1. Variables with different types
const num1 : number = 42;
const str: string = "Hello, TypeScript!";
const isComplete : boolean = true;
const numbers : number[] = [1, 2, 3, 4, 5];
const cities: string[] = ["Minsk", "Warsaw", "London"];
const person: {name: string, age: number, city: string} = {
    name: "Alice", 
    age: 30,
    city: "Minsk"
};

// 2. Creating types

type User = {
    name: string;
    age: number;
    email?: string;
};

type Grade = "junior" | "middle" | "senior";

//3. Creating an interface for Car

interface Car {
    brand: string;
    model: string;
    year?: number;
}

// 4. Creating an interfaces for Address (with extension)
interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface FullAddress extends Address {
    country: string;
}

// 5. Creating types for Product (with concatenation)

type Product = {
    id: number;
    name: string;
    price: number;
};

type DiscountedProduct = Product & {
    discount: number
}

// 6. Creating a function called calculateDiscount that takes a DiscountedProduct and returns the final price

const product: DiscountedProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};

function calculateDiscount(product: DiscountedProduct): number {
    const discountAmt = (product.price * product.discount) / 100;
    return product.price - discountAmt;
}
console.log(calculateDiscount(product));