var x = 1; // assigned to global space
a(); // assigned to global space
b(); // assigned to global space
console.log(x);

// defining fn->a
function a() {
    var x = 10;
    console.log(x);
}

// defining fn->b
function b() {
    var x = 100;
    console.log(x);
}