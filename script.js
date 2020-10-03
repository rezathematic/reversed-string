// defining the function - take an input, convert it to string and return the reversed string
function reverseString(str) { 
     return str
        .split("")
        .reverse()
        .join("");  
};
// add the value of the reversedString function to <p> tag
function returnReverse() {
    let str = document.getElementById("string").value;
    document.getElementById("reversed").innerHTML = reverseString(str);
};