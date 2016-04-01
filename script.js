var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];

ascii.map(function(element) { return String.fromCharCode(element) }).join(''); 
// map function will create a new array
// iterate through every element or num in the ascii array by calling it through the function
// use fromCharCode on every element to change the ascii number into a char, then join the whole function to form a sentence.
