function foo() {
    console.log(this.bar);
}

function bind(fn, o) {
    return function () {
        fn.call(o);
    }
}

var obj = {bar: "1"};
var obj2 = {bar: "2"};

foo = bind(foo, obj);

foo(); // 1
foo.call(obj2); // 1