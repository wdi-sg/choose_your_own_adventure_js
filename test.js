var testObj = {
    a: ".",
    b: ".",
    c: "."
}

console.log(testObj.a);

var testCopy = JSON.parse(JSON.stringify(testObj));

testObj.a = "booo!";

console.log(testCopy.a);
