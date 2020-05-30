var foo = "bar";
function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar();
console.log(foo); //bar
console.log(bam); //yay - because bam is created in global scope when compiler asked for
// it there because there's no declaration for it in baz() and bar()
baz(); //ReferenceError: baz() is not defined