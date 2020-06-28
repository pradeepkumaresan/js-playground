function foo() {
    console.log(this.bar);
}

var bar = "1";
var obj = {bar: "2"};

foo(); // 1
foo.call(obj); // 2