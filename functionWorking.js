var x = 1;
a();
b();
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