// theoretical dynamic scoping as opposed
// to lexical scoping.
// here we expect foo() to ask its calling
// function baz() for bar. Which does
// not work.
function foo() {
    console.log(bar); // dynamic. RefError
}

function baz() {
    var bar = "bar";
    foo();
}

baz();