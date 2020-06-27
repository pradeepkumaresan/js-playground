// call site matters in 'this'. variable bar's will be the
// one declared in the scope the function is called.

var o1 = {
    bar: "1",
    foo: function () {
        console.log(this.bar);
    }
};

var o2 = {bar: "2", foo: o1.foo};

var bar = "3";
var foo = o1.foo;

o1.foo();

// if o2 does not have a bar, it does not refer back to
// global bar and o1's bar, but it will be undefined.
o2.foo();
foo();