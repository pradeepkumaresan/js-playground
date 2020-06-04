/* not compatible with ES6
function foo(bar) {
    let(baz = bar) {
        console.log(baz); //bar
    }
    console.log(baz); //ReferenceError
}

foo("bar");
*/