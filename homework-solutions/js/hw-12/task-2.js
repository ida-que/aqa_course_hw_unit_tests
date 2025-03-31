// 1. Send a POST request using fetch
// 2. Check if response status is 201, otherwise throw an error
// 3. Convert response to JSON Object
// 4. COmpare response sata with request body, throw an error in case of mismatch
// 5. Return the response Object, with handling errors and logging the function execution


async function createTodo(body) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
    }
        );

if (response.status !== 201) throw new Error("Invalid response status");

const data = await response.json();

for (const key in body) {
    if (body[key] !== data[key]) throw new Error("Data is mismatching");

return data;
}

} catch (error) {
    console.error(error);

} finally {
    console.log("Function execution completed");
}
}