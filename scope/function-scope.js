var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        console.log(foo); // function: bar
    }
    baz();
};

foo();
bar(); // ReferenceError: bar is not defined