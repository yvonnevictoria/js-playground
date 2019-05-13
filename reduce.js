// REDUCE

// Write a function that takes a string and returns an object representing the character
// count for each letter. Use .reduce to build this object.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
const countLetters = string => {
    return string.split("").reduce((obj, letter) => {
        obj.hasOwnProperty(letter) ? obj[letter]++ : obj[letter] = 1;
        return obj;
    }, {});
};

const letterCount = countLetters('abbcccddddeeeee');
console.log(letterCount);

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false

const isPresentWithoutReduce = (string, target) => {
    let targetPresent = false;
    if (string.toLowerCase().includes(target)) {
        targetPresent = true;
    }
    return targetPresent;
};

const isPresent = (string, target) => {
    return string.toLowerCase().split("").reduce((result, letter) => {
        if (letter === target) {
            result = true;
        }
        return result;
    }, false);
};

const isPresentAlt = (string, target) =>
    string.toLowerCase().split("").reduce((result, letter) =>
        result || letter === target, false
    );

const resultTrue = isPresent('abcd', 'b');
const resultFalse = isPresent('efghi', 'a');
const resultMultipleTrue = isPresent('efeghi', 'e');
const resultCapitalTrue = isPresent('Efghi', 'e');
console.log(`
    resultTrue: ${resultTrue}
    resultFalse: ${resultFalse}
    resultMTrue: ${resultMultipleTrue}
    resultCTrue: ${resultCapitalTrue}
`);

// Write a function that takes a string and a target, and returns the number of times the target appears. Use
// .reduce to acomplish this.
// ex. isPresentCount('abcdbfdb', 'b') // => 3
// ex. isPresentCount('efEghi', 'e') // => 2
// ex. isPresentCount('efghi', 'a') // => 0

const isPresentCount = (string, target) => {
    return string.toLowerCase().split("").reduce((acc, letter) => {
        console.log(acc);
        if (letter === target) {
            acc++;
        }
        return acc;
    }, 0);
};

const resultNormal = isPresentCount('abcdbfdb', 'b');
const resultCapital = isPresentCount('efEghi', 'e');
const resultNone = isPresentCount('efghi', 'a');

console.log(`
    resultNormal: ${resultNormal}
    resultCapital: ${resultCapital}
    resultNone: ${resultNone}
`);
