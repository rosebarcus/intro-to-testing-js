// helloWorld function 
const helloWorld = function() {
    return 'Hello, World!';
}


function sayHello(input) {
    if ((typeof input === "string" && input.trim().length > 0) || typeof input === "number" || typeof input === true) {
        return "Hello, " + input + "!";
    }
    return "Hello, World!";
}

function isFive(input) {
    if (typeof input != "boolean")
        return true;
}