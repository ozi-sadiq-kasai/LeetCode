// "doG gniD"
var reverseWords = function(s) {
    return s.split(' ').map(e => e.split('').reverse().join('')).join(' ')
};

console.log(reverseWords("God Ding"))