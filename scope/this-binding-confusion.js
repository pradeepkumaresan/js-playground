function foo() {
    var bar = "1";
    baz();
}

function baz() {
    console.log(this.bar);
}

var bar = "2";
foo(); // 2