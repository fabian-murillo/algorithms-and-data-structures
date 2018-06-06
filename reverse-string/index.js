// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// My solution:
function reverse(str) {
    // create a variable for our reversed string:
    var newStr = "";
    // We set the counter to 1 to offset how computers start counting @ 0
    for (var i = 1; str.length >= i; i++) {
    // loop over our string, starting at the end, adding each index to the new str
        newStr += str[str.length - i]
    }
    return newStr;
}

// Steven's solution (using built in JS functions that I wasn't sure if I was supposed to use): 
function reverse(str) {
    const arr = str.split(''); // splits string into an array of chars
    arr.reverse(); // reverses the els in an array;
    arr.join(''); // joins array els back into a string
// even more simplified:
       return str.split('').reverse().join('');
}

// Other way of writing a for loop, introduced in ES2015:
function reverse(str) {
    let reversed = '';
    // The following syntax can't be used everywhere
    for (let character of str) {
        reversed = character + reversed;
    } 
    return reversed;
}

// Most complicated way using the reduce helper:

function reverse(str) {
    // 1. Reduce is used to take all the different vals of an array and condense them down to a singular val
    return str.split('').reduce((reversed, character) => { // 4. So the firt arg passed to reduce is our reversed string
    // 3. whatever gets returned from the inner function, will be then used as the starting arg
    //    for every successive run of the function (1 time for every el of the array)
    return character + reversed;
    }, ''); // 2. Whenever reduce runs, it takes this starting arg (the empty string), & passes it into the function
}


module.exports = reverse;
