function validatePassword (pswd: string): boolean {
    const hasUpperCase = /[A-Z]/.test(pswd);
    const hasLowerCase = /[a-z]/.test(pswd);
    const hasDigit = /[0-9]/.test(pswd);
    const hasMinLength = pswd.length >= 8;
    return hasUpperCase && hasLowerCase && hasDigit && hasMinLength;
}

// Tests

console.log(validatePassword("HelloWorld123!"));
console.log(validatePassword("hello123"));
console.log(validatePassword("11111111"));
console.log(validatePassword("999999999!"));
console.log(validatePassword("HELLO_MY_FRIEND"));
