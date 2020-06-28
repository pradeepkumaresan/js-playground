function foo() {
    console.log(this.bar);
}

var obj = {bar: "1"};
var obj2 = {bar: "2"};

var orig = foo;
foo = function(){
    // hard binding
    orig.call(obj);
};

foo(); // 1
foo.call(obj2); // 1