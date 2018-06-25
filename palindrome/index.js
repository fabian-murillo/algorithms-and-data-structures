// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// My solution:
function palindrome(str) {
    var result;
    str.split('').forEach((l) => str.split('').reverse().forEach((rl => rl === l ? result = true : result = false)))
    return result;
}

// Steven's solution:...Talk about looking at the big picture...
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Using the 'every' array helper:
function palindrome(str) {
    // The 'every' array helper runs a comparison function against every el in an array
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
        // Subtract 1 from the current index to offset arrays starting at 0
    })
   
}

module.exports = palindrome;
