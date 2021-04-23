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

function isEven(input) {
        if (typeof input != "string") {
            return parseInt(input) % 2 === 0;
        } else {
            return parseInt(input) % 2 === 0;
        }
}

/*function isVowel (input) {
    if(typeof input === 'number' || typeof input === 'boolean')
        return true
}*/

function isVowel(vowel){
    if (typeof vowel === "number"){
        return false;
    }else if (vowel === "a" || vowel === "A" || vowel === 'boolean') {
        return true;
    } else {
        return false;
    }
}