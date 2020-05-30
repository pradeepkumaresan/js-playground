function foo() {
    var bar = "bar";
    //let makes i visible only to the 'for' block
    //var would have attached i to function scope
    for (let i=0; i<bar.length; i++){
        console.log(bar.charAt(i));
    }
    console.log(i); //ReferenceError
}

foo();